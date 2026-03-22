import dbConnect from "@/lib/db";
import Job from '@/models/job';
import { NextResponse } from "next/server";




export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const { jobtitle,joblocation,jobtype,jobdescription } = body;



 const alreadyexist = await Job.findOne({
  jobtitle: jobtitle,
  jobtype: jobtype,
});

if (alreadyexist) {
  return NextResponse.json(
    {
      error: true,
      success: false,
      message: "Job with same title and type already exists",
    },
    { status: 400 }
  );
}


    // Save in MongoDB
    const createJob = await Job.create({
      jobtitle,
      joblocation,
      jobtype,
      jobdescription,
      status:'open',
    });



    return NextResponse.json(
      {
        error: false,
        success: true,
        message: "Your job has been posted successfully",
        createJob,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: "Something went wrong while posting your job",
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