import dbConnect from "@/lib/db";
import Job from '@/models/job';
import { NextResponse } from "next/server";




export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const {
      jobtitle,
      joblocation,
      jobtype,
      jobdescription,
      companyName,
      department,
      workplaceType,
      employmentType,
      jobSummary,
      requiredQualifications,
      applicationDeadline,
      salary,
      experience,
      aboutCompany,
      aboutRole,
      keyResponsibilities,
      preferredQualifications,
   
      status = "Open"
    } = body;

    // Prepare job data - ONLY include fields that exist in schema
    const jobData = {
      // Required fields
      jobtitle: jobtitle,
      joblocation: joblocation,
      jobtype: employmentType || jobtype,
      jobdescription: jobdescription,
      companyName: companyName || "Our Company",
      location: joblocation,
      employmentType: employmentType || jobtype,
      workplaceType: workplaceType,
      jobSummary: jobSummary,
      requiredQualifications: requiredQualifications || ["Not specified"],
      applicationDeadline: applicationDeadline,
      
      // Optional fields
      status: status,
      department: department || "Other",
      experience: experience || "Not specified",
      aboutCompany: aboutCompany || "",
      aboutRole: aboutRole || "",
      keyResponsibilities: keyResponsibilities || [],
      preferredQualifications: preferredQualifications || [],
 
    };

    // Remove salary if it's causing issues (or handle properly)
    if (salary && (salary.min || salary.max)) {
      jobData.salary = salary;
    }

    // Check for existing job
    const alreadyexist = await Job.findOne({ jobtitle: jobtitle });
    
    if (alreadyexist) {
      return NextResponse.json(
        { error: true, success: false, message: "Job already exists" },
        { status: 400 }
      );
    }

    // Save in MongoDB
    const createJob = await Job.create(jobData);

    return NextResponse.json(
      {
        error: false,
        success: true,
        message: "Job posted successfully",
        createJob,
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await dbConnect();

    const jobitem = await Job.find();

    return Response.json(
      { success: true, jobitem },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in fetching Jobs", error);
    return NextResponse.json(
      { success: false, message: "Error in fetching Jobs" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const deletedProduct = await Job.findByIdAndDelete(body.id);

    if (!deletedProduct) {
      return NextResponse.json({ success: false, message: "Job not found" });
    }

    return NextResponse.json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Internal Server Error", error: error.message });
  }
}

export async function PUT(req){
    try {
        await dbConnect();
        const {id,status}=await req.json();
        const job=await Job.findByIdAndUpdate(id,{status:status},{new:true});
        if(!job){
            return NextResponse.json({error:true,success:false,message:"Job not found"});
        }
        return NextResponse.json({success:true,message:"Job status updated",job});        
    } catch (error) {
          console.error(error);
    return NextResponse.json({ success: false, message: "Internal Server Error", error: error.message });
        
    }
}