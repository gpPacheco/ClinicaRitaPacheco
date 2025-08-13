export default function UsuarioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-comfort-cream">
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
