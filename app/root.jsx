
import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link } from '@remix-run/react'
import { useState, useEffect } from 'react'
import Footer from './components/footer'
import styles from '~/styles/index.css'
import Header from '~/components/header'

export function meta(){
    return {
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1.0',
        title: 'Remix - Guitar'
    }
}

export function links(){
    return [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@300;400;600;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){

    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null
    const [cart, setCart] = useState(cartLS)


    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart] )

    const addCart = data => {
        // verify if exist this guitar in stage cart
        if(cart?.some( guitarNow => guitarNow.id === data.id )){
            
            const cartUpdated = cart?.map( guitarState => {
                if(guitarState.id === data.id){
                    // update quantity of guitar in stage cart
                    guitarState.quantity = data.quantity
                }
                return guitarState
            } )
            setCart(cartUpdated)

        }else{
            // if not exist add to state the guitar current
            setCart([...cart, data])
        }
        
    }

    const updateQuantity = guitar => {
        const cartUpdate = cart?.map( guitarStage => {
            if(guitarStage.id === guitar.id){
                guitarStage.quantity = guitar.quantity
            }
            return guitarStage
        } )
        setCart(cartUpdate)
    }

    const deleteGuitar = guitarId => {
        const cartUpdate = cart?.filter( guitarStage => guitarStage.id !== guitarId )
        setCart(cartUpdate)
    }

    return (
        <Document>
            <Outlet 
                context={{
                    addCart,
                    cart,
                    updateQuantity,
                    deleteGuitar
                }}
            />
        </Document>  
    )
}

function Document({children}){
    return (
        <html>
            <head>
                <Meta/>
                <Links />
            </head>
            <body>
                <Header/>
                {children}
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

// Errors

export function CatchBoundary(){
    const error = useCatch()
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className='error-link' to='/' >Maybe you want return to home page</Link>
        </Document>
    )
}

export function ErrorBoundary({error}){
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className='error-link' to='/' >Maybe you want return to home page</Link>
        </Document>
    )
}