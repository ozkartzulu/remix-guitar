
import { useState } from 'react'

import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'

import styles from '~/styles/shop.css'

export async function loader({params}){

    const { urlGuitar } = params
    const guitar = await getGuitar(urlGuitar)

    if(!guitar.data){
        throw new Response('',{
            status: 404,
            statusText: 'Guitar not found'
        })
    }

    return guitar
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta({data}){
    if(!data){
        return {
            title: 'Guitar not found',
            description: 'Guitar, Sell of Guitars, Guitar not found'
        }
    }
    return {
        title: `Guitar - ${data.data[0].attributes.name}`,
        description: `Guitar, Sell of Guitars, Guitar ${data.data[0].attributes.name}`
    }
}

function Guitar(){

    const { addCart } = useOutletContext()

    const guitar = useLoaderData()

    const [quantity, setQuantity] = useState(0)
    
    const{ name, description, price, url, image } = guitar.data[0].attributes

    const handleSubmit = (e) => {
        e.preventDefault()
        if(quantity < 1){
            alert('You should select a quantity')
            return
        }
        const guitarNew = {
            id: guitar.data[0].id,
            name,
            price,
            quantity,
            image: image.data.attributes.url

        }
        addCart(guitarNew)
    }

    return (
        <main className="container guitar">
            <img src={image.data.attributes.url} alt={`Guitar ${name}`} />
            <div className="contain">
                <h3 className="heading">{name}</h3>
                <p className="description">{description}</p>
                <span className="price">${price}</span>
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="quantity">Quantity</label>
                    <select name="quantity" id="quantity" onChange={ e => setQuantity(parseInt(e.target.value)) }>
                        <option value="0">-- Select --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value='Add to Cart' />
                </form>
            </div>
        </main>
    )
}
export default Guitar