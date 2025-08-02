export default function ChildComponent(props){
    return(
        <>
            <div>This is from child component</div>
            {/* <div>{props.hi}</div>
            <div>{props.vals}</div> */}
            <button onClick={props.testing}></button>
        </>
    )
}