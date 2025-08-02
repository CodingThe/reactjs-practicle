import Hoc from "./hoc"

// function NormalFunction({name,company}){
//     return(
//         <div>
//             <h1>{name}</h1>
//             <h1>company:{company}</h1>
//         </div>
//     )
// }

// const EnhancedComponemt = Hoc(NormalFunction);
// export default EnhancedComponemt;

function NormalFunction(){
    return <h1>Welcome to dashboard</h1>
}
const EnhancedComponemt = Hoc(NormalFunction);
export default EnhancedComponemt;