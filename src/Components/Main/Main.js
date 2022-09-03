import React, {useState} from 'react'

const Main = () => {

    const [task, setTask] = useState([''])
    const [list, setList] = useState([])
    const Tasks = {task: task, id: Date.now()}
    const Remove = (id) => {setList(list.filter((item)=>item.id !== id))}

    return(
        <form onSubmit={(e)=>{
           e.preventDefault()
        }}>
        <input value={task} onChange={(e)=>{setTask(e.target.value)}} />
        <button onClick={()=>{if(task !== ''){setList([...list, Tasks], setTask(''))}}}>Send</button>
        <button onClick={()=>{setList([])}}>Remove All</button>
        {list.map((item, index)=>(
            <div key={index}>
                <ul><li>{item.task}</li></ul>
                <button onClick={()=>{Remove(item.id)}}>X</button>
            </div>
        
        ))}
        </form>
    )
}

export default Main