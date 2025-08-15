import { NextResponse } from "next/server"
import { collections, ensureIndexes } from "@/lib/db"
import { hash } from "bcrypt"

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password, phone } = body || {}
  if (!name || !email || !password) return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })

  await ensureIndexes()
  const users = await collections.users()
  const existing = await users.findOne({ email })
  if (existing) return NextResponse.json({ error: "E-mail já cadastrado" }, { status: 409 })

  const passwordHash = await hash(password, 10)
  const now = new Date().toISOString()
  const userDoc = { name, email, passwordHash, role: "user", createdAt: now, updatedAt: now }
  const res = await users.insertOne(userDoc as any)

  const clientes = await collections.clientes()
  await clientes.insertOne({ userId: String(res.insertedId), name, email, phone, createdAt: now, updatedAt: now } as any)

  return NextResponse.json({ ok: true }, { status: 201 })
}
