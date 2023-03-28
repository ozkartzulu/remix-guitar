
import { Link, useLocation } from '@remix-run/react'
import image from '../../public/img/cart.png'

function Navigation(){
    const location = useLocation()
    return (
        <nav className="nav">
            <Link to='/' className={ location.pathname === '/' ? 'active' : '' } >Home</Link>
            <Link to='/shop' className={ location.pathname === '/shop' ? 'active' : '' } >Shop</Link>
            <Link to='/about' className={ location.pathname === '/about' ? 'active' : '' } >About</Link>
            <Link to='/blog' className={ location.pathname === '/blog' ? 'active' : '' } >Blog</Link>
            <Link to='/cart'><img src={image} alt="Shopping cart" /></Link>
        </nav>
    )
}

export default Navigation