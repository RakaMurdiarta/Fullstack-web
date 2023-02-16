import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'
import { useTheme } from './context/Theme'

const TopBar = () => {
    const user = useContext(UserContext)
    const theme = useTheme()
    return (
        <div>
            <h1>
                ID : {user.id}
                <br />
                Name : {user.name}
                <br />
                Email : {user.email}
            </h1>
        </div>
    )
}

export default TopBar