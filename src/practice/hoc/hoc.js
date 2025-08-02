// export default function Hoc(NormalComponent){
//     return function EnhancedComponemt(props){
//         return <NormalComponent {...props} company="Google"></NormalComponent>
//     }
// }
export default function withAuth(NormalComponent){
    return function EnhancedComponemt(props){
        const isLoggedIn = true;
        if(!isLoggedIn) return <p>Please login</p>
        return <NormalComponent {...props}></NormalComponent>
    }
}