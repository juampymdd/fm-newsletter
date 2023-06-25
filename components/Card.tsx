import { FormEmail } from "./FormEmail"
import { ImageSignup } from "./ImageSignup"
import { List } from "./List"

export const Card = () => {
  return (
    <article className='card'>
        <div className='card-body'>
        <h1>Stay updated!</h1>
        <p style={{
          textAlign: 'start',
          fontSize: '12px'
        }}>Join 60,000+ product managers receiving monthly updates on:</p>
        
        <List/>
        <FormEmail/>
      </div>
      <ImageSignup/>
  
    </article>
  )
}
