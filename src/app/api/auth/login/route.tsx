import { LoginRequest } from "@/data/dto/responses";
import { NextRequest, NextResponse } from "next/server";
import { login } from "@/server/api/endpoint/login";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET!;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoginRequest;
    console.log("body: ", body);

    const id = await login(body.id, body.password);
    const token = jwt.sign({ id: id }, SECRET_KEY, { expiresIn: "10min" });

    return NextResponse.json({ token: token });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "로그인에 실패했습니다." },
      { status: 500 }
    );
  }
}
