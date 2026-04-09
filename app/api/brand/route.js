import dbConnect from "@/lib/db";
import Brand from "@/models/brand";
import { NextResponse } from "next/server";



export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { brandname,website,description,image } = body;

 
const alreadybrand=await Brand.findOne({brandname:brandname});
if(alreadybrand){
  return NextResponse.json({error: true, success: false, message: "Brand with this name already exists"});
}


    const creatbrand = await Brand.create({
   brandname,
   website,
   image,
    description,
    });




    return NextResponse.json(
      {
        error: false,
        success: true,
        message: "Your brand has been added successfully",
        creatbrand,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: "Something went wrong while adding new brand",
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await dbConnect();

    const applybrand = await Brand.find();

    return Response.json(
      { success: true, applybrand },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in fetching Brands", error);
    return NextResponse.json(
      { success: false, message: "Error in fetching Brands" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const deletedProduct = await Brand.findByIdAndDelete(body.id);

    if (!deletedProduct) {
      return NextResponse.json({ success: false, message: "Brand not found" });
    }

    return NextResponse.json({ success: true, message: "Brand deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Internal Server Error", error: error.message });
  }
}
// UPDATE BRAND
