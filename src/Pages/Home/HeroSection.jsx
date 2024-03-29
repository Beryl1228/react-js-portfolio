import React from 'react'

export default function HeroSection() {
  return (
    <section id='heroSection' className='hero--section'>
    <div className='hero--section--content--box'>
        <div className='hero--section--content'>
            <p className='section--title'>Hey, I'm Beryl </p>
            <h1 className='hero--section--title'>
                <span className='hero--section--title--color'>
                Web
                </span>{' '}
                Developer
            </h1>
            <p className='hero--section--description'>Lorem ipsum, 
            dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Fugiat consectetur perspiciatis pariatur quae porro deleniti nemo, aut quod, nesciunt laboriosam sit, assumenda rem nam illum culpa rerum aspernatur adipisci nisi!
            </p>
        </div>
        <button className='btn btn-primary'>Get In Touch</button>
    </div>
    <div className='hero--section--img'>
        <img src="./img/hero_img.png" alt="Hero Section" />
    </div>
    </section>
  )
}
