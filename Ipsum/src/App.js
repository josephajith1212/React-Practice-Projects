import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    setText(data.slice(0,count))
    console.log(text)
  }
  return (
      <section className="section-center">
        <h3>lorem ipsum</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor='amount'>paragraphs</label>
        <input type='number' min={0} max={data.length} name='amount' id='amount' value={count} onChange={(e)=>setCount(e.target.value)}/>
          <button type='submit' className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {text.map((para, index) => {
            return (
              <p key={index}>{para}</p>
            )
          })}
        </article>
      </section>
    )
}

export default App;
