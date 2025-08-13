import { NextResponse } from "next/server"

// Mock: listar e criar agendamento
export async function GET() {
  return NextResponse.json({ items: [], total: 0 })
}

export async function POST() {
  return NextResponse.json({ ok: true }, { status: 201 })
}
