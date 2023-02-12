import React, { useState } from 'react'
import NavChild from './navChild'

const Nabar = () => {
    const Menus = [
        { label: 'Home', link: '#' },
        { label: 'About me', link: '#' },
        { label: 'Contact', link: '#' },
        { label: 'Info', link: '#' }
    ]
    return (
        <div>
            <NavChild menu={Menus} />
        </div>
    )
}

export default Nabar