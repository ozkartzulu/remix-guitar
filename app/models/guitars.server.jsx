
export async function getGuitars(){
    const answer = await fetch(`${process.env.API_URL}/guitars?populate=image`)
    const res = await answer.json()
    return res
}

export async function getGuitar(urlGuitar){
    const answer = await fetch(`${process.env.API_URL}/guitars?filters[url]=${urlGuitar}&populate=image`)
    const res = await answer.json()
    return res;
}