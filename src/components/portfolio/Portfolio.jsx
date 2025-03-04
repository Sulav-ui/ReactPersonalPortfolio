import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Futsal1.jpg'
import IMG2 from '../../assets/ap1hd.png'
import IMG3 from '../../assets/JavascriptPlayer.png'


const data = [
{
  id:1,
  image: IMG1,
  title:'Fully Functional Frontend and BackEnd for Futsal Reservation System',
  github:'https://github.com/Sulav-ui/FutsalReservationSystem',
 
},
{
  id:2,
  image: IMG2,
  title:'AP1hd Website With Full Functionality',
  github:'https://github.com/Sulav-ui/LoginAuthority',
  
},
{
  id:3,
  image: IMG3,
  title:'Make Music With One Tap Tap Music',
  github:'https://github.com/Sulav-ui/JavascriptSoundPlayer',
  
},

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
        {
          data.map(({id, image, title, github})=>{
            return(
              <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
            </div>
        </article>  
            )

          })
        }

        

        
    </div>
    </section>
  )
}

export default Portfolio