import { useState } from 'react'

import './App.css'
import Card from './components/QuoteBox'
import Quotes from './quotes.json'

function App() {
  const color = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871']
  const random = Math.floor(Math.random() * Quotes.length)
  const [numberQuote, setnumberQuote] = useState(random)
  const changeQuote = () => {
    const random = Math.floor(Math.random() * Quotes.length)
    setnumberQuote(random)
  }
  const randomColor = Math.floor(Math.random() * color.length)
  document.body.style = `background: ${color[randomColor]}`

  return (
    <div>
      <Card
        parra={Quotes[numberQuote].quote}
        author={Quotes[numberQuote].author}
        buttom={changeQuote}
        colors={color[randomColor]}
      />
    </div>
  )
}

export default App
