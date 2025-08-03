import { useNavigate } from "react-router-dom"

export function Home(){
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/about');
    }
    return(
        <>
            <p>
                This is home
            </p>
            <h1 onClick={handleClick}>About Page Link</h1>
        </>
    )
}