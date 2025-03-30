import { NextResponse } from "next/server";
import { z } from "zod";

// Zod validation schema
const schema = z.object({ email: z.string().email() });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    schema.parse(body);

    // TODO: Save the email to the database (MongoDB, Firebase, etc.)
    console.log("New Subscriber:", body.email);

    return NextResponse.json({ message: "Subscription successful!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Invalid email or server error." }, { status: 400 });
  }
}
