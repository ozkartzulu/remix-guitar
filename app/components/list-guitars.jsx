
import Guitar from '~/components/guitar'

function ListGuitars({guitars}){
    return (
        <>
            <h2 className='heading'>Our Collection</h2>
            {guitars?.length && (
            <div className="container shop">
            {
                guitars?.map( guitar => (
                <Guitar guitar={guitar?.attributes} key={guitar?.id}/>
                ) )
            }
            </div>
            )}
        </>
    )
}

export default ListGuitars