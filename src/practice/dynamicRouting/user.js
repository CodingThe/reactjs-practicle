import { useParams } from "react-router-dom";

//dynamic routes
export default function User(){
  const {id} = useParams();
  return <h1>userId: {id}</h1>
}