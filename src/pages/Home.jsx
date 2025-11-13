import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white"/>
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Ahmedabad • 2025</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">AWS Cloud Club Student Community Day 2025</h1>
            <p className="mt-4 text-gray-600 text-lg">A day of cloud talks, workshops, and networking with the community. Learn from experts, build projects, and level up your AWS skills.</p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/register" className="inline-flex items-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">Register Now</Link>
              <Link to="/agenda" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">View Schedule</Link>
            </div>
            <div className="mt-6 text-sm text-gray-600">Venue: Your College, Ahmedabad • Feb 2025</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500/90 shadow-lg"/>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {[{t:'Talks',d:'Inspiring sessions by experienced speakers.'},{t:'Workshops',d:'Hands-on labs to build with AWS.'},{t:'Community',d:'Meet peers, mentors, and potential collaborators.'}].map((c,i)=>(
          <div key={i} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="text-lg font-semibold text-gray-900">{c.t}</div>
            <div className="mt-2 text-gray-600 text-sm">{c.d}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
