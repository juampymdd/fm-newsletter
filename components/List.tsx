
const items = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a success',
  'And much more!'
]

export const List = () => {
  return (
    <ul>
      {
        items.map((item, index) => (
          <li key={index}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
            {item}
          </li>
        ))
      }
    </ul>
  )
}
