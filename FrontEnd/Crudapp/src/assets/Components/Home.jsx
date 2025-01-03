import React from 'react'

function Home() {
  return (
     <>
  <body>
     <section>
      <div className='HomeMain'>
       
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" class="rotate">
    <circle cx="200" cy="200" r="100" fill="none" stroke="red" />
    <text font-size="20" fill="blue">
      <textPath href="#circlePath" startOffset="0%">
      Aman's Crud App
      </textPath>
    </text>
    <defs>
      <path id="circlePath" d="M 200,200 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
    </defs>
  </svg>
        </div>

      </section>
      </body>
     </>
  )
}


export default Home