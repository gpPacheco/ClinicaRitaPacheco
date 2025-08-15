import { MongoClient, ServerApiVersion, type Document, type Collection, type Db } from "mongodb"

const dbName = process.env.MONGODB_DB || "clinica_rita_pacheco"

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | undefined

declare global {
	// eslint-disable-next-line no-var
	var _mongoClientPromise: Promise<MongoClient> | undefined
}

export function getMongoClient(): Promise<MongoClient> {
	if (clientPromise) return clientPromise
	if (global._mongoClientPromise) return (clientPromise = global._mongoClientPromise)

	const uri = process.env.MONGODB_URI
	if (!uri) throw new Error("MONGODB_URI não definido no .env")

	client = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		},
	})
	clientPromise = client.connect()
	if (process.env.NODE_ENV !== "production") global._mongoClientPromise = clientPromise
	return clientPromise as Promise<MongoClient>
}

export async function getDb(): Promise<Db> {
	const c = await getMongoClient()
	return c.db(dbName)
}

export async function getCollection<T extends Document = Document>(name: string): Promise<Collection<T>> {
	const db = await getDb()
	return db.collection<T>(name)
}

export const collections = {
	users: () => getCollection("users"),
	clientes: () => getCollection("clientes"),
	appointments: () => getCollection("appointments"),
	services: () => getCollection("services"),
}

export async function ensureIndexes() {
	const users = await collections.users()
	await users.createIndex({ email: 1 }, { unique: true })

	const clientes = await collections.clientes()
	await clientes.createIndex({ email: 1 }, { unique: true, sparse: true })
	await clientes.createIndex({ userId: 1 })

	const appointments = await collections.appointments()
	await appointments.createIndex({ userId: 1, date: 1 })
}
