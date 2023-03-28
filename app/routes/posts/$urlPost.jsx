
import { useLoaderData }  from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { fixDate } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export async function loader({params}){

    const post  = await getPost(params.urlPost)

    if(post?.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Post not found'
        })
    }

    return post.data[0].attributes
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
            title: 'Post not found',
            description: 'Guitar, Sell of Guitars, Post not found'
        }
    }
   
    return {
        title: `Post - ${data.title}`,
        description: `Guitar, Sell of Guitars, Guitar ${data.title}`
    }
}

function Post(){

    const post = useLoaderData()
    const {title, content, url, image, publishedAt} = post

    return (
        <article className='container post'>
            <img src={image.data.attributes.url} alt={`image of ${title}`} />
            <div className="contain">
                <h3 >{title}</h3>
                <span className="date">{ fixDate(publishedAt) }</span>
                <p className="description">{content}</p>
            </div>
        </article>
    )
}
export default Post