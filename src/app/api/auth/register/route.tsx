import { RegisterRequest } from "@/data/dto/responses";
import { register } from "@/server/api/endpoint/register";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterRequest;
    console.log("body: ", body);

    const token = await register(body.id, body.name, body.serialNumber, body.password);

    return NextResponse.json({ token: token });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "회원가입에 실패했습니다." },
      { status: 500 }
    );
  }
}
