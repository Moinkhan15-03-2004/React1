import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div>
      <div className="about" id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tommorrow Leader today</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem neque architecto laudantium et, iusto iure maiores, quos ad rem sapiente sequi accusantium minima corrupti. Amet minus neque blanditiis nesciunt odio.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus facilis quis nam, accusamus adipisci nulla quas aspernatur voluptatum, aliquid deleniti, perferendis beatae iure dignissimos expedita quo recusandae dolore voluptatem unde.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem fuga veritatis reiciendis ipsa a. Voluptates ut, natus animi suscipit saepe, ipsa voluptatibus repudiandae ea tenetur facilis error asperiores quaerat?</p>
        </div>
      </div>
    </div>
  )
}

export default About
