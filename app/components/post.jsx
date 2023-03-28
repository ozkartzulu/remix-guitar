
import { Link } from '@remix-run/react'
import { fixDate } from '~/utils/helpers'

function Post({post}){

    const { title, content, image, url, publishedAt } = post

    return (
        <article>
            <img src={image.data.attributes.formats.small.url} alt={`image of ${title}`} />
            <div className="contain">
                <h3 >{title}</h3>
                <span className="date">{ fixDate(publishedAt) }</span>
                <p className="text">{content}</p>
                <Link className='link' to={`/posts/${url}`}>Read More</Link>
            </div>
        </article>
    )
}

export default Post