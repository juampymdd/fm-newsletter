import { useState } from "react"


export const FormEmail = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    !e.target.validity.valid
    ?setError(true)
    :setError(false)
    
    setEmail(e.target.value)
  }

  return (
    <form className="w-100">
      <div className="space-arround w-100">
        <label className="text-label">Email address</label>
        <label className="text-label error-label" style={{
          visibility: error ? 'visible' : 'hidden'
        }}>Valid email required</label>
        
          
      </div>
      <input type='email' placeholder='Your email address' value={email} onChange={handleChange} />
      <button type='submit'>Subscribe to monthly newsletter</button>
    </form>
  )
}
