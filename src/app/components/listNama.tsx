type ListNamaProps = {
    names: {
        first :string
        last : string
    }[]

}


export const ListNama = (props:ListNamaProps) =>{
    return(
        <div>
            {props.names.map(name => {
                return(
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}
