export default function AdminServicosPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-comfort-text">Serviços</h1>
      <form className="rounded-lg border bg-white p-4 space-y-3">
        <div>
          <label className="block text-sm text-comfort-text">Nome do serviço</label>
          <input className="mt-1 w-full border rounded-md p-2" placeholder="Ex.: Podologia Esportiva" />
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Preço</label>
          <input type="number" className="mt-1 w-full border rounded-md p-2" placeholder="Ex.: 150" />
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Duração (minutos)</label>
          <input type="number" className="mt-1 w-full border rounded-md p-2" placeholder="Ex.: 60" />
        </div>
        <button className="bg-comfort-accent hover:bg-comfort-warm text-white rounded-md px-4 py-2">Salvar</button>
      </form>
    </div>
  )
}
