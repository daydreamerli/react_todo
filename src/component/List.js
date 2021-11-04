import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const List = ({ data = [], updateData }) => {

    let history = useHistory();
    const [checkedList, setCheckedList] = useState([])
    const [checkAll, setCheckAll] = useState('')
    // handle show detail
    const handleClick = (item) => {
        history.push(`/todo/${item.id}`,item)
    }
    // handle delete
    const handleDelete = (items) => {
        const _data = [...data]
        let _checkedList = [...checkedList]
        if (Array.isArray(items)) {
            items.map((item, idx) => item ? idx : null).reverse().filter(item => item !== null).forEach(item => {
                _data.splice(item, 1)
            })
            _checkedList = []
            setCheckAll('')
        } else {
            _checkedList.splice(items,1)
            _data.splice(items, 1)
            if (_data.length === 0) setCheckAll('')
        }
        setCheckedList(_checkedList)
        updateData(_data)
    }
    // handle checkbox change
    const handleChange = (type, e, idx, id) => {
        const _checked = e.target.checked
        const _checkedList = [...checkedList]
        if (type === 'all') {
            data.forEach((item, idx) => {
                _checkedList[idx] = _checked ? item.id : ''
            })
            setCheckAll(_checked ? 'checked' : '')
        } else {
            _checkedList[idx] = _checked ? id : ''
            setCheckAll(_checkedList.filter(item => item).length === data.length ? 'checked' : '')
        }
        setCheckedList(_checkedList)
    }

    useEffect(() => {
        if (!checkedList.length) {
            setCheckAll('')
        }
    }, [checkedList])
    
    return <div className="list-container">
        <button onClick={() => handleDelete(checkedList)}>Delete Selected</button>
        <ul className="list">
            <li className="header">
                <input onChange={(e) => handleChange('all', e)} checked={checkAll} className="checkbox" type="checkbox" />
                <div className="description">Description</div>
                <div className="category">Category</div>
                <div className="operate">Operate</div>
            </li>
            {data.length ? data.map((item, idx) => {
                return <li key={idx}><input checked={checkedList[idx] === item.id ? 'checked' : ''} onChange={(e) => handleChange('single', e, idx, item.id)} className="checkbox" type="checkbox" /><div onClick={() => handleClick(item)} className="description">{item.description}</div>
                    <div onClick={() => handleClick(item)} className="category">{item.category}</div>
                    <div className="operate list-item" onClick={() => handleDelete(idx)}>delete</div></li>
            }) : <li className="no-data">No Data</li>}
        </ul>
    </div>
}