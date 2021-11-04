import { useEffect, useState } from "react"
import { Form } from "../component/Form"
import { List } from "../component/List"

export const Todo = () => {

    const [todoData, setTodoData] = useState([])

    const handleSubmitData = (data,callback) => {
        const _data = [...todoData]
        const id = _data.length ? 1 + _data[_data.length -1].id :1000
        _data.push({ ...data, id })
        setTodoData(_data)
        if(callback)callback()
    }
    // updata
    const handleUpdata = (data)=>{
        setTodoData([...data])
    }
    // init
    useEffect(()=>{
        try {
            if(sessionStorage.getItem('data')){
                setTodoData(JSON.parse(sessionStorage.getItem('data')))
            }
        } catch (error) {
            console.log(error)
        }
    },[])

    // update session storage
    useEffect(()=>{
        sessionStorage.setItem('data',JSON.stringify(todoData))
    },[todoData])
    
    return <div className="todo-container">
        <Form handleSubmitData={handleSubmitData} />
        <List data={todoData} updateData={handleUpdata} />
    </div>
}