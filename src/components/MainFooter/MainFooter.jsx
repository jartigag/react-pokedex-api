import github from './../../assets/img/icons/github.svg'
import logo from './../../assets/img/icons/logo.svg'

import './MainFooter.css';

export const MainFooter = () => (
    <footer>
        <img className="footer-img-github" src={github} alt="github" />
        <img className="footer-img-logo" src={logo} alt="logo" />
    </footer>
)
    
  