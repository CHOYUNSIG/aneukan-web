import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("request body: ", await request.json());

  try {
    const token = request.headers.get("Authorization")?.split(" ")[1];

    const response = await fetch(`${process.env.BACKEND_URL}/user/info`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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
