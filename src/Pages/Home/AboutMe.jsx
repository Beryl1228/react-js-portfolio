import React from 'react'

export const AboutMe = () => {
  return (
    <section id='AboutMe' className='about--section'>
        <div className='about--section-img'>
            <img src="./img/about-me.png" alt="AboutMe" />
        </div>
        <div className='hero-section--content--box'>
            <p className='section--title'>About</p>
            <h1>About Me</h1>
            <p className='hero--section--description'>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit Fugiat consectetur 
            perspiciatis pariatur quae porro 
            deleniti nemo.nesciunt laboriosam sit, 
            assumenda rem nam illum culpa 
            rerum aspernatur adipisci nisi!
            </p>
            <br />
            <p className='hero--section--description'>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit Fugiat consectetur 
            perspiciatis pariatur quae porro 
            deleniti nemo.nesciunt laboriosam sit.
            </p>
        </div>
    </section>
  )
}
