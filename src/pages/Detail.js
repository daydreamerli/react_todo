import { useHistory, useLocation} from "react-router"

export const Detail = ()=>{
    
    let location = useLocation();
    const state = location.state
    const history = useHistory()
    return <div className="detail-container">
        <div className="item"><span>Description:</span>{state.description}</div>
        <div className="item"><span>Category:</span>{state.category}</div>
        <div className="item"><span>Content:</span>{state.content}</div>
        <button onClick={()=>{history.goBack()}}>Back</button>
    </div>
}