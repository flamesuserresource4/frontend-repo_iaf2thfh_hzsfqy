export default function Agenda(){
  const items = [
    {time: '09:00', title: 'Registration & Breakfast'},
    {time: '10:00', title: 'Opening Keynote'},
    {time: '11:00', title: 'Talk: Building on AWS'},
    {time: '12:30', title: 'Lunch'},
    {time: '14:00', title: 'Hands-on Workshop'},
    {time: '16:30', title: 'Community Showcase'},
  ]
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900">Schedule</h2>
      <div className="mt-6 divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-between p-4">
            <div className="text-sm text-gray-500 w-24">{it.time}</div>
            <div className="font-medium text-gray-900 flex-1">{it.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
