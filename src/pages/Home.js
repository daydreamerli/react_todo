import { useHistory } from "react-router-dom";

export const Home = ()=>{
    let history = useHistory();
    history.push('/todo')
    return null
}