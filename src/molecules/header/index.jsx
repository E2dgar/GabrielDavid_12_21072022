import Logo from "../../atoms/logo";
import MainNav from "../../components/menus/navMain";

import './index.css'

const Header = () => {
  return (
    <header>
      <div>
        <Logo/>
      </div>
      
      <MainNav/>
    </header>
  )
}

export default Header