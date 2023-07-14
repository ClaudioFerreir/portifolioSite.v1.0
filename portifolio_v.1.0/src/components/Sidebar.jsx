import SocialNetwork from './SocialNetworks';
import InformationContainer from './informationContainer';

import '../styles/components/sidebar.sass'
import '../styles/components/socialnetworks.sass'

import Avatar from '../img/FotoCV.jpg'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Claudio Ferreira" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  )
}


export default Sidebar