import React from 'react'
import AccountMenu from '../accountDetails'

function Header() {
    return (
        <div style={{display:'flex',justifyContent:'flex-end'}}>
            <AccountMenu />
        </div>
    )
}

export default Header
