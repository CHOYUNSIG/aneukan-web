import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
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
      { error: "권한 조회에 실패했습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const token = request.headers.get("Authorization")?.split(" ")[1];
    const id = request.nextUrl.searchParams.get("id");

    const response = await fetch(`${process.env.BACKEND_URL}/user/permission`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return NextResponse.json({ message: data.message });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "권한 삭제에 실패했습니다." },
      { status: 500 }
    );
  }
}
