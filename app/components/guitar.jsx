
import { Link } from '@remix-run/react'

function Guitar({guitar}){

    const {name, price, description, image, url} = guitar

    return (
        <div className="guitar">
            <img src={image.data.attributes.formats.medium.url} alt={`guitar ${name}`} />
            <div className="contain">
                <h3 className="heading">{name}</h3>
                <p className="description">{description}</p>
                <span className="price">${price}</span>
                <Link className='link' to={`/guitars/${url}`}>See Product</Link>
            </div>
        </div>
    )
}

export default Guitar