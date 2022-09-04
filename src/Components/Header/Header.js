import React, {useState} from 'react'
import * as S from './Style'

const Header = () => {

    const [click, setClick] = useState(false)

    const Menu = () => {
        return(
            <S.NAV>
                <S.UL>
                    <li>Home</li>
                    <li>What To Do</li>
                    <li>Social Media</li>
                </S.UL>
            </S.NAV>
        )
    }

    return(
        <S.DIV>
        <S.BUTTON onClick={()=>{setClick(!click)}}>{click === true ? 'X' : '☰'}</S.BUTTON>
        {click && Menu()}
        <h1>To Do</h1>
        </S.DIV>
    )
}

export default Header;