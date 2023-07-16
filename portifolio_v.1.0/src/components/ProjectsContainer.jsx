import '../styles/components/projectscontainer.sass'

import FrontWineShop from '../img/frontWineshop.png'

const ProjectsContainer = () => {
  return (
    <section id="projects-container">
      <h2>Projetos</h2>
      <div className='project-card'>
        <div className="card-image">
          <img src={FrontWineShop} alt="" />
        </div>
        <div className="card-info">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi quos odit rem impedit. Ipsam nobis repudiandae, a unde quaerat hic deserunt cumque quibusdam laborum quis veniam distinctio repellendus quasi.
          </p>
          <a href="" className="btn">
          Ver Projetos
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsContainer;