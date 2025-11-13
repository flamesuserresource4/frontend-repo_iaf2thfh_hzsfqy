export default function Speakers(){
  const speakers = [
    {name:'To Be Announced', title:'AWS Community Builder'},
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900">Speakers</h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {speakers.map((s, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-6 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500"/>
            <div className="mt-4 font-semibold text-gray-900">{s.name}</div>
            <div className="text-sm text-gray-600">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
