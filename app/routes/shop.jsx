
import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import ListGuitars from '~/components/list-guitars'
import styles from '~/styles/shop.css'

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader(){
    const guitars = await getGuitars()
    return guitars.data
}

function Shop(){

    const guitars = useLoaderData()

    return (
        <main>
            <ListGuitars guitars={guitars} />
        </main>
    )
}

export default Shop