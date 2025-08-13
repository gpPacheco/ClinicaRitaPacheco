import { NextResponse } from "next/server"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json({ id: params.id })
}

export async function PATCH() {
  return NextResponse.json({ ok: true })
}

export async function DELETE() {
  return NextResponse.json({ ok: true })
}
