type ReactChildProps = {
    children : React.ReactNode
}

export const Status = (props : ReactChildProps) => {
    return(
        <div>{props.children}</div>
    )

}