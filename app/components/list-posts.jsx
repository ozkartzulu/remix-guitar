
import Post from '~/components/post'

function ListPosts({posts}){
    return (
        <>
            <h2 className='heading'>Articles</h2>
            <div className="blog">
                {
                    posts?.map( (post) => (
                        <Post post={post.attributes} key={post.id} />
                    ) )
                }
            </div>
        </>
    )
}

export default ListPosts