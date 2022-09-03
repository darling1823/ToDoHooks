import React, {useState} from 'react'

const Header = () => {

    const [click, setClick] = useState(false)

    const Menu = () => {
        return(
            <nav>
                <ul>
                    <li>Home</li>
                    <li>What To Do</li>
                    <li>Social Media</li>
                </ul>
            </nav>
        )
    }

    return(
        <>
        <button onClick={()=>{setClick(!click)}}>{click === true ? 'X' : '☰'}</button>
        {click && Menu()}
        <h1>To Do</h1>
        </>
    )
}

export default Header;