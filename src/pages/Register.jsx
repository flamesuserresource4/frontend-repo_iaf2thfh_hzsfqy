import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL

export default function Register(){
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({name:'', email:'', phone:'', college:'', ticket_type:'student'})
  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')

  async function createOrder(e){
    e.preventDefault()
    setLoading(true); setError('')
    try{
      const res = await fetch(`${BACKEND}/api/registration/create-order`,{
        method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)
      })
      if(!res.ok){ throw new Error(await res.text()) }
      const data = await res.json()
      setOrder(data)
      if(window.Razorpay){
        const options = {
          key: data.razorpay_key,
          amount: data.amount,
          currency: data.currency,
          name: 'AWS Cloud Club SCD 2025',
          description: 'Event Registration',
          order_id: data.order_id,
          prefill: { name: data.name, email: data.email, contact: data.phone },
          theme: { color: '#4f46e5' },
          handler: async function (response){
            try{
              const vr = await fetch(`${BACKEND}/api/registration/verify-payment`,{
                method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({
                  order_id: response.razorpay_order_id,
                  payment_id: response.razorpay_payment_id,
                  signature: response.razorpay_signature
                })
              })
              if(!vr.ok) throw new Error(await vr.text())
              alert('Payment successful! Check your email for confirmation.')
            }catch(err){
              alert('Verification failed. Please contact support.')
            }
          }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
      } else {
        setError('Razorpay SDK not loaded')
      }
    }catch(err){
      setError('Could not create order. Please try again later.')
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    const s = document.createElement('script')
    s.src = 'https://checkout.razorpay.com/v1/checkout.js'
    s.async = true
    document.body.appendChild(s)
    return ()=>{ document.body.removeChild(s) }
  },[])

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900">Register</h2>
      <p className="mt-2 text-gray-600">Secure payment powered by Razorpay.</p>
      <form onSubmit={createOrder} className="mt-8 space-y-4">
        {['name','email','phone','college'].map((f)=>(
          <div key={f}>
            <label className="block text-sm font-medium text-gray-700 capitalize">{f}</label>
            <input required value={form[f]} onChange={e=>setForm(prev=>({...prev,[f]:e.target.value}))} type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"/>
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Ticket Type</label>
          <select value={form.ticket_type} onChange={e=>setForm(p=>({...p, ticket_type:e.target.value}))} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        {error && <div className="text-sm text-red-600">{error}</div>}
        <button disabled={loading} className="inline-flex items-center px-5 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 disabled:opacity-50">{loading? 'Processing...':'Proceed to Pay'}</button>
      </form>
    </div>
  )
}
