import React, {useState} from 'react'
import * as S from './Style'

const Main = () => {

    const [task, setTask] = useState([''])
    const [list, setList] = useState([])
    const Tasks = {task: task, id: Date.now()}
    const Remove = (id) => {setList(list.filter((item)=>item.id !== id))}

    return(
        <S.FORM onSubmit={(e)=>{
           e.preventDefault()
        }}>
        <input value={task} onChange={(e)=>{setTask(e.target.value)}} />
        <S.BUTTON onClick={()=>{if(task !== ''){setList([...list, Tasks], setTask(''))}else{setTask('')}}}>Send</S.BUTTON>
        <S.BUTTON onClick={()=>{setList([])}}>Remove All</S.BUTTON>
        {list.map((item, index)=>(
            <S.DIV key={index}>
                <ul><li>{item.task}</li></ul>
                <button onClick={()=>{Remove(item.id)}}>X</button>
            </S.DIV>
        
        ))}
        </S.FORM>
    )
}

export default Main