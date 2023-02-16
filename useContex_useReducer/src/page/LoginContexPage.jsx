import { useRef } from 'react'
import { useAuth } from '../components/context/auth'

const LoginContexPage = () => {

    const auth = useAuth()
    const emailRef = useRef()
    const passRef = useRef()

    const onSignIn = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        const { SignIn } = auth
        await SignIn(email, password)
        passRef.current.value = ""

    }

    const onSignOut = async () => {

        const { SignOut } = auth
        SignOut()

        passRef.current.value = ""
        emailRef.current.value = ""

    }

    return (
        <div>
            <h1>is Loading : {String(auth.isLoading)}</h1>
            <h1>is Login : {String(auth.isLogin)}</h1>
            <h1>is Error : {String(auth.isError)}</h1>
            <h1>
                ID : {auth.user.id}
                <br />
                Name : {auth.user.name}
                <br />
                Email : {auth.user.email}
            </h1>

            <form onSubmit={(event) => onSignIn(event)}>
                <div className='flex gap-2'>
                    <label htmlFor="email">Masukan Email</label>
                    <input ref={emailRef} type="email" name='email' id='email' placeholder='email' />
                    <label htmlFor="password">Masukan Password</label>
                    <input ref={passRef} type="password" name='password' id='password' placeholder='password' />
                </div>

                <button>Sign In</button>
            </form>

            <button onClick={onSignOut}>Sign Out</button>

        </div>
    )
}

export default LoginContexPage