import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const data = await req.json();

    console.log("New Enquiry Received:", data);


    return NextResponse.json({
      success: true,
      message: "Thank you! Your enquiry has been submitted."
    });


  } catch (error) {

    return NextResponse.json(
      {
        success:false,
        message:"Something went wrong"
      },
      {
        status:500
      }
    );

  }

}