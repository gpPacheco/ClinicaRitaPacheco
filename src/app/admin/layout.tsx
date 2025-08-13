export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-comfort-cream">
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
