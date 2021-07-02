import React from 'react'

const detail = () => {
  const data = {
    description: 'Javascript from the basic for beginner. JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc. This class helps you get started with JavaScript and furthers your understanding of what is possible.',
    learn: ['Javascript', 'Phyton', 'React']
  }

  return (
    <>
      <section>
        <div style={{ marginBottom: '32px' }}>
          <h3>Description</h3>
          <p>{data.description}</p>
        </div>

        <div>
          <h3>What will I learn ?</h3>
          <ul>
            {data.learn.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default detail
