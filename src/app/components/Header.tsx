
type Prop = {
    children : string

}

export const Headers = (props : Prop) => {
    return(
        <h1 className="font-bold">{props.children}</h1>
    )

}