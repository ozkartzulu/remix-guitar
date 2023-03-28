
import Navigation from "./navigation"

function Footer(){
    return (
        <footer className="footer">
            <Navigation />
            <p className="copyright">All Right Reserved - {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer