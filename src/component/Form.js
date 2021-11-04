import { useState } from 'react'

export const Form = ({ handleSubmitData }) => {
    
    const [state, setState] = useState({
        description: '',
        category: 'html',
        content: ''
    })
    // submit form
    const handleSubmit = () => {
        if(!state.description){
            return alert('description should not be empty!')
        }
        if(!state.content){
           return alert('content should not be empty!')
        }
        handleSubmitData(state,clearForm)
    }

    const clearForm = ()=>{
        setState({
            description: '',
            category: 'html',
            content: ''
        })
    }

    // handle change
    const handleChange = (type, value) => {
        setState({
            ...state,
            [type]: value
        })
    }

    return <div className="form-container">
        <form>
            <label>
                Description:
                <input type="text" value={state.description} onChange={(e) => handleChange('description', e.target.value)} />
            </label>
            <label>
                Category:
                <select value={state.category} onChange={(e) => handleChange('category', e.target.value)}>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="javascript">javascript</option>
                </select>
            </label>
            <label>
                Content:
                <textarea rows="3" type="text" value={state.content} onChange={(e) => handleChange('content', e.target.value)} />
            </label>
        </form>
        <button onClick={handleSubmit}>Submit</button>
    </div>
}