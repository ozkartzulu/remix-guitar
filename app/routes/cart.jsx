
import { useState, useEffect } from 'react'
import { ClientOnly } from 'remix-utils'
import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/cart.css'


export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
export function meta(){
    return {
        title: 'Guitar - Shopping cart',
        description: 'Sell of guitars, shopping cart, music'
    }
}

function Cart(){
    
    const [total, setTotal] = useState(0)
    const {cart, updateQuantity, deleteGuitar} = useOutletContext()

    useEffect( () => {
        const calculateTotal = cart?.reduce( (total, guitar) => total + (guitar.price * guitar.quantity) , 0 )
        setTotal(calculateTotal)
    }, [cart] )

    return (
        <ClientOnly  fallback={'Uploading....'}>
        { () => (
        <main className="container">
            <h1 className="heading">Shopping Cart</h1>
            <div className="contain">
                <div className="cart">
                    <h2>Articles</h2>
                    { cart?.length === 0 ? 'Cart empty' : (
                        cart?.map( guitar => (
                            <div className="product" key={guitar.id}>
                                <div>
                                    <img src={guitar.image} alt={`guitar ${guitar.name}`} />
                                </div>
                                <div>
                                    <p className="name">{guitar.name}</p>
                                    <p className='quantity'>Quantity: </p>
                                    <select name="quantity" 
                                        id="quantity" 
                                        className="select" 
                                        value={guitar.quantity}
                                        onChange={ e => updateQuantity({
                                            quantity: +e.target.value,
                                            id: guitar.id
                                        }) }
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <p className="price">$ <span>{guitar.price}</span></p>
                                    <p className="subtotal">Subtotal: $<span>{guitar.price * guitar.quantity}</span></p>
                                </div>
                                <button className="cart-close"
                                    type='button'
                                    onClick={ () => deleteGuitar(guitar.id) }
                                >X</button>
                            </div>
                        ) )
                    ) }
                </div>
                <aside className="resume">
                    <h3>Summary of Request</h3>
                    <p>Total to pay: ${total}</p>
                </aside>
            </div>
        </main>
        ) }
        </ClientOnly>
    )
}

export default Cart