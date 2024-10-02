import React from 'react'
import actor from '../assets/image/samitk.jpg'

function FeaturedBox() {

  return (
    <section className='featured-box' id='home'>
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Wisarut Saelao</span>
        </div>
        <div className="featured-name">
          I'm <span className='typedText'></span>
        </div>
        <div className="featured-text-info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus mollitia facilis quae sequi
            esse hic incidunt, inventore dolorem consectetur fugiat? Cupiditate non delectus optio dicta
            eaque, nulla iusto iste illum! Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur ad
            ipisicing elit. Perspiciatis dolorem ipsam sequi a veniam ut odio animi facere cupiditate 
            repellendus.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className='btn'>Download CV <i className='uil uil-import'></i></button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/jeyer_z">
              <i className='uil uil-instagram-alt'></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/wisarut">
              <i className='uil uil-facebook'></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.github.com/JeyZ9">
              <i className='uil uil-github-alt'></i>
            </a>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={actor} alt="" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className='scroll-btn'>
          <i className='uil uil-mouse-alt'></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  )
}

export default FeaturedBox