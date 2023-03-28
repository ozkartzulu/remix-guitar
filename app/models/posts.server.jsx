export async function getPosts(){
    const answer = await fetch(`${process.env.API_URL}/posts?populate=image`)
    const res = await answer.json()
    return res
}

export async function getPost(urlPost){
    const answer = await fetch(`${process.env.API_URL}/posts?filters[url]=${urlPost}&populate=image`)
    const res = await answer.json()
    return res;
}