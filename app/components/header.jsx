
import { Link } from '@remix-run/react'
import Navigation from './navigation'
import logo from '../../public/img/logo.svg'

function Header(){
    return (
        <header className="header">
            <div className="container bar">
                <Link to='/'>
                    <img className='logo' src={logo} alt="Logo of Guitar" />
                </Link>
                <Navigation/>
            </div>
        </header>
    )
}

export default Header