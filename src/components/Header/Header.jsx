import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/APropos">A Propos</Link>
            <Link to="/FicheLogement">Fiche Logement</Link>
            <Link to="/Error">test Error</Link>
        </nav>
    )
}

export default Header