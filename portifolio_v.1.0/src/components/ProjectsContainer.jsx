import '../styles/components/projectscontainer.sass'

import FrontWineShop from '../img/frontWineshop.png'
import FrontSweetShop from '../img/frontSweetShop2.png'
import FrontCloneDecathlon from '../img/frontCloneDecathlonPT.png'
import FrontDoceria from '../img/frontDoceria.png'

const ProjectsContainer = () => {
  return (
    <section id="projects-container">
      <h2>Projetos Front-End</h2>
      <div className='project-card'>
        <div className="card-image">
          <img src={FrontWineShop} alt="" />
        </div>
        <div className="card-info">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi quos odit rem impedit. Ipsam nobis repudiandae, a unde quaerat hic deserunt cumque quibusdam laborum quis veniam distinctio repellendus quasi.
          </p>
          <a href="https://project-wine-shop.vercel.app/?vercelToolbarCode=TjWlYHCPS2Z7vH-" className="btn">
          Ver Projeto
          </a>
        </div>
      </div>
      <div className='project-card'>
        <div className="card-info">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi quos odit rem impedit. Ipsam nobis repudiandae, a unde quaerat hic deserunt cumque quibusdam laborum quis veniam distinctio repellendus quasi.
          </p>
          <a href="https://project-wine-shop.vercel.app/?vercelToolbarCode=TjWlYHCPS2Z7vH-" className="btn">
          Ver Projeto
          </a>
        </div>
        <div className="card-image">
          <img src={FrontSweetShop} alt="" />
        </div>
      </div>
      <div className='project-card'>
        <div className="card-image">
          <img src={FrontCloneDecathlon} alt="" />
        </div>
        <div className="card-info">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi quos odit rem impedit. Ipsam nobis repudiandae, a unde quaerat hic deserunt cumque quibusdam laborum quis veniam distinctio repellendus quasi.
          </p>
          <a href="https://project-decathlon-pt-layout.vercel.app/?vercelToolbarCode=0lCfj-7tPcxryri#" className="btn">
          Ver Projeto
          </a>
        </div>
      </div>
      <div className='project-card'>
        <div className="card-info">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi quos odit rem impedit. Ipsam nobis repudiandae, a unde quaerat hic deserunt cumque quibusdam laborum quis veniam distinctio repellendus quasi.
          </p>
          <a href="https://project-wine-shop.vercel.app/?vercelToolbarCode=TjWlYHCPS2Z7vH-" className="btn">
          Ver Projeto
          </a>
        </div>
        <div className="card-image">
          <img src={FrontDoceria} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ProjectsContainer;