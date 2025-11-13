export default function Footer(){
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© 2025 AWS Cloud Club • Ahmedabad</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Code of Conduct</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
