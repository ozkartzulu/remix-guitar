
import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import ListPosts from '~/components/list-posts'
import styles from '~/styles/blog.css'

export async function loader(){
    const posts = await getPosts()

    return posts?.data
}

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
        title: 'Guitars - Articles',
        description: 'Guitars, sell guitars, articles about guitars'
    }
}

function Blog(){

    const posts = useLoaderData()

    return (
        <main>
            <ListPosts posts={posts} />
        </main>
    )
}

export default Blog