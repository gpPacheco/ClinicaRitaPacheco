export default function AdminClientesPage() {
  const mock = [
    { id: "u1", name: "João Silva", email: "joao@example.com", phone: "(16) 99999-9999" },
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-comfort-text">Clientes</h1>
      <div className="rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-comfort-text">
              <th className="p-3">Nome</th>
              <th className="p-3">E-mail</th>
              <th className="p-3">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {mock.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
