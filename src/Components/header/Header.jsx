import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../Assets/Crown.svg'
import { auth } from '../../firebase/Firebase'
import './Header.scss'
function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to="Shop">
                    SHOP
                </Link>
                <Link className="option" to="Contact">
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div className="option" onClick={()=>auth.signOut()}> 
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className="option" to="Contact">
                            SIGN IN
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Header
