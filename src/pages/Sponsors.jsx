export default function Sponsors(){
  const sponsors = [
    {name:'Sponsor 1'},
    {name:'Sponsor 2'},
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900">Sponsors</h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sponsors.map((s, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-lg bg-gray-100"/>
            <div className="mt-3 font-medium text-gray-900">{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
