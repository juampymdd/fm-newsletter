import { FormEmail } from "./FormEmail"
import { ImageSignup } from "./ImageSignup"
import { List } from "./List"

export const Card = () => {
  return (
    <article className='card'>
        <div className='card-body'>
        <div>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        
        <List/>
        <FormEmail/>
      </div>
      <ImageSignup/>
    </article>
  )
}
