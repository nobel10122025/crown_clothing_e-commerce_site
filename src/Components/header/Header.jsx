import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {ReactComponent as Logo} from '../../Assets/Crown.svg'
import { auth } from '../../firebase/Firebase'
import './Header.scss'
import CartIcon from '../cart-icon/CartIcon'
import CartDropown from '../cart-dropdown/CartDropown'

function Header({currentUser , hidden}) {
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
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropown />
            }
        </div>
    )
}

const mapStatetoProps = ({user : {currentUser}, cart : {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStatetoProps)(Header);
