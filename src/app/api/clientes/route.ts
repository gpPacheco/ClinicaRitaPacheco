import { NextResponse } from "next/server"
import { collections, ensureIndexes } from "@/lib/db"
import type { Cliente } from "@/types"

export async function GET() {
  await ensureIndexes()
  const col = await collections.clientes()
  const items = await col.find().limit(50).toArray()
  return NextResponse.json({ items })
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<Cliente>
  if (!body?.name || !body?.email) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
  await ensureIndexes()
  const col = await collections.clientes()
  const now = new Date().toISOString()
  const doc: Cliente = { ...body, createdAt: now, updatedAt: now } as Cliente
  const result = await col.insertOne(doc as any)
  return NextResponse.json({ id: String(result.insertedId) }, { status: 201 })
}
