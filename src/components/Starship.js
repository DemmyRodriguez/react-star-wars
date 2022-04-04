
const Starship = ({ name, url }) => {
    return(
        <div className="collection-item">
            <div  className='starship'><a href={url}>{name}</a></div>
        </div>
    )
}

export default Starship;