import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({childern})=>{
    const Navigate = useNavigate();
    const isAuthenticated = true;
    return isAuthenticated?childern:<p>it's route</p>
}
export default ProtectedRoute;