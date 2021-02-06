import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout >
      <section className='newsletter-page' >
        <div className="page-center">
          <h2>Get all the latest stories to your inbox</h2>
          <h4>I whrite blog post about programming</h4>
          <form 
            className='contact-form'
            name='contact'
            method="post"
            netlify-honeypot='bot-field' 
            data-netlify='true'
            action='/success'
            >
            <input type="hidden" name='bot-field' />
            <input type="hidden" name='form-name' value='contact' />

            <input 
              type="text" 
              name='name' 
              placeholder='Your name' 
              className='form-control'
              />
            <input 
              type="email" 
              name='email' 
              placeholder='Your email' 
              className='form-control'
              />
              <button type='submit' className='btn form-control submit-btn' >subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  )
  
}

export default NewsLetter
