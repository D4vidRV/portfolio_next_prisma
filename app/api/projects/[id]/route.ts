import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";
import { Prisma } from "@prisma/client";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const project = await prisma.project.findFirst({
      where: {
        id: params.id,
      },
    });
    if (!project)
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    return NextResponse.json(project);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedProject = await prisma.project.delete({
      where: {
        id: params.id,
      },
    });
    if (!deletedProject)
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      );
    return NextResponse.json({
      messge: `Project with id ${params.id} deleted`,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name, description, images } = await request.json();
    const updatedProject = await prisma.project.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        description,
        images,
      },
    });
    return NextResponse.json(updatedProject);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
