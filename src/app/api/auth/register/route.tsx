import { RegisterRequest } from "@/data/dto/front/responses";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("request body: ", await request.json());

  try {
    const body = (await request.json()) as RegisterRequest;

    const response = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return NextResponse.json({ message: data.message });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "회원가입에 실패했습니다." },
      { status: 401 }
    );
  }
}
