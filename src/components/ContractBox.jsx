import React from 'react'

function ContractBox() {
  return (
    <section className='section' id='contact'>
      <div className="top-header">
        <h1>Get in touch</h1>
        <span>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <h2>Find Me <i className='uil uil-corner-right-down'></i></h2>
            <p><i className="uil uil-envelope"></i> Email: 664259015@webmail.npru.ac.th</p>
            <p><i className="uil uil-phone"></i> Tel: +66 65 668 3656</p>
          </div>
        </div>

        <div className="col">
          <div className="form-control">
            <div className="form-inputs">
              <input type="text" className='input-field' placeholder='Name' />
              <input type="email" className='input-field' placeholder='Email' />
            </div>
            <div className="text-area">
              <textarea placeholder='Message'></textarea>
            </div>
            <div className="form-button">
              <button className="btn">
                Send <i className="uil uil-message"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContractBox