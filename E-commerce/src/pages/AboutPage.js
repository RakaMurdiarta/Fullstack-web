import React from 'react'
import { PageHero } from '../components'
import toko from '../assets/toko.png'
import './aboutpage.css'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <section className='page section section-center'>
        <img src={toko} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Tentang Kami</h2>
            <div className='underline'></div>
          </div>
          <p>
           Berawal dari kebiasaan bandingin harga antar toko, lahirlah Cek Toko Sebelah di 1998. Hingga sekarang telah berkembang melayani 300 Kota di indonesia.
          </p>
        </article>
      </section>
    </main>
  )
}

export default AboutPage
