import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp'
import IMG2 from '../../assets/portfolio2.webp'
import IMG3 from '../../assets/portfolio3.webp'
import IMG4 from '../../assets/portfolio4.webp'
import IMG5 from '../../assets/portfolio5.webp'
import IMG6 from '../../assets/portfolio6.webp'

const data = [
{
  id:1,
  image: IMG1,
  title:'Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17661056-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id:2,
  image: IMG2,
  title:'Figma dashboard UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17610579-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id:3,
  image: IMG3,
  title:'Charts templates & infographics',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17557575-Orion-UI-kit-Charts-templates-infographics-in-Figma'
},
{
  id:4,
  image: IMG4,
  title:' UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17393929-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id:5,
  image: IMG5,
  title:'UI kit for data design web apps',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17341624-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
},
{
  id:6,
  image: IMG6,
  title:' Charts templates & infographics',
  github:'https://github.com',
  demo:'https://dribbble.com/shots/17317560-Orion-UI-kit-Charts-templates-infographics-in-Figma'
}

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={image} alt={title} />
            </div>

            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>  
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