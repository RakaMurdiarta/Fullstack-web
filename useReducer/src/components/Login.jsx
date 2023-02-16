import React, { useRef, useState } from 'react'
import { LoginServer } from '../services/auth'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isLoggin, setIsLoggin] = useState(false)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState({})

    const emailRef = useRef()
    const passRef = useRef()


    const SignIn = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const email = emailRef.current.value
            const password = passRef.current.value
            const user = await LoginServer(email, password)
            setIsLoggin(true)
            setUser(user)
            passRef.current.value = "";
        } catch (error) {
            setIsError(error.message)
        }
        setIsLoading(false)
    }

    const SignOut = () => {
        setIsLoggin(false)
        setIsLoading(false)
        setUser({})
        setIsError(false)
        emailRef.current.value = "";
        passRef.current.value = "";

    }



    return (
        <div>
            <h1>is Loading : {String(isLoading)}</h1>
            <h1>is Login : {String(isLoggin)}</h1>
            <h1>is Error : {String(isError)}</h1>
            <h1>
                ID : {user.id}
                <br />
                Name : {user.name}
                <br />
                Email : {user.email}
            </h1>

            <form onSubmit={SignIn}>
                <div className='flex gap-2'>
                    <label htmlFor="email">Masukan Email</label>
                    <input ref={emailRef} type="email" name='email' id='email' placeholder='email' />
                    <label htmlFor="password">Masukan Password</label>
                    <input ref={passRef} type="password" name='password' id='password' placeholder='password' />
                </div>

                <button>Sign In</button>
            </form>

            <button onClick={SignOut}>Sign Out</button>

        </div>
    )
}

export default Login