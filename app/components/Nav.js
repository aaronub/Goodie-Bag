import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return(
        <nav >
            <Link style={{color:'red'}} to={'/candies'} >All-Candies!!!</Link>
            <Link style={{color:'red'}} to={'/'}>Home!!!</Link>
        </nav>
    )
}


export default Nav