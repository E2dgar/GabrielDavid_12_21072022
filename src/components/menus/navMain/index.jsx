import ItemMainNav from "../../atoms/menuItems/mainNav";
import './index.css'

/**
 * Component for the main nav
 * @component
 */
const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <ItemMainNav textContent={"Acceuil"} href="#"/>
        <ItemMainNav textContent={"Profil"} href="#"/>
        <ItemMainNav textContent={"Réglage"} href="#"/>
        <ItemMainNav textContent={"Communauté"} href="#"/>
      </ul>
    </nav>
  )
}

export default MainNav