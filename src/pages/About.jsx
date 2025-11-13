export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900">About the Event</h2>
      <p className="mt-4 text-gray-600 leading-relaxed">AWS Cloud Club Student Community Day 2025 in Ahmedabad is a student-led celebration of cloud learning and building. Expect curated talks, hands-on workshops, and an inclusive environment that welcomes beginners and advanced builders alike.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200 p-6">
          <div className="font-semibold text-gray-900">Who should attend?</div>
          <p className="mt-2 text-gray-600 text-sm">Students, faculty, and cloud-curious learners who want to explore AWS services and best practices.</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-6">
          <div className="font-semibold text-gray-900">What to expect?</div>
          <p className="mt-2 text-gray-600 text-sm">Keynotes, breakout sessions, guided labs, and networking opportunities throughout the day.</p>
        </div>
      </div>
    </div>
  )
}
