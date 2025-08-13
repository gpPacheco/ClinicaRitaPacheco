export default function UsuarioAgendarPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold text-comfort-text">Agendar consulta</h1>
      <form className="space-y-4 bg-white border rounded-lg p-4">
        <div>
          <label className="block text-sm text-comfort-text">Serviço</label>
          <select className="mt-1 w-full border rounded-md p-2">
            <option>Podologia Geriátrica</option>
            <option>Podologia Esportiva</option>
            <option>Podologia Infantil</option>
            <option>Spa dos pés</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Profissional</label>
          <select className="mt-1 w-full border rounded-md p-2">
            <option>Rita Pacheco</option>
            <option>Equipe</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-comfort-text">Data</label>
            <input type="date" className="mt-1 w-full border rounded-md p-2" />
          </div>
          <div>
            <label className="block text-sm text-comfort-text">Hora</label>
            <input type="time" className="mt-1 w-full border rounded-md p-2" />
          </div>
        </div>
        <div>
          <label className="block text-sm text-comfort-text">Observações</label>
          <textarea className="mt-1 w-full border rounded-md p-2" rows={3} />
        </div>
        <button className="bg-comfort-accent hover:bg-comfort-warm text-white rounded-md px-4 py-2">
          Confirmar agendamento
        </button>
      </form>
    </div>
  )
}
