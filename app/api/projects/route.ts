import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany();

    return NextResponse.json(projects);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  const { name, description, images } = await request.json();

  try {
    const newProject = await prisma.project.create({
      data: {
        name,
        description,
        images,
      },
    });
    return NextResponse.json(newProject);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
