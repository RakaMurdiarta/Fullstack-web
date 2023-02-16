import { useEffect, useReducer, useRef } from 'react'
import { LoginServer } from '../services/auth'


const initialState = {
    isLogin: false,
    isLoading: false,
    isError: false,
    user: {}
}

const LoginAction = {
    SET_LOADING: 'set_loading',
    SET_USER: 'set_user',
    LOGIN_SUCCESS: 'login_success',
    LOGIN_FAILED: 'login_failed',
    SIGN_OUT: 'sign_out'
}

const reducer = (state, action) => {
    console.log(action.type);
    if (action.type === LoginAction.SET_LOADING) {
        return { ...state, isLoading: true }
    }
    if (action.type === LoginAction.LOGIN_SUCCESS) {
        return { ...state, isLoading: false, isLogin: true, user: action.payload.user }
    }
    if (action.type === LoginAction.LOGIN_FAILED) {
        return { ...state, isLogin: false, isError: action.payload.error }
    }
    if (action.type === LoginAction.SIGN_OUT) {
        return initialState
    }

}

const LoginReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        console.log(state);
    }, [state])

    const emailRef = useRef()
    const passRef = useRef()


    const SignIn = async (event) => {
        event.preventDefault()
        dispatch({ type: LoginAction.SET_LOADING })
        try {
            const email = emailRef.current.value
            const password = passRef.current.value
            const user = await LoginServer(email, password)
            dispatch({ type: LoginAction.LOGIN_SUCCESS, payload: { user } })
            passRef.current.value = "";
        } catch (error) {
            dispatch({ type: LoginAction.LOGIN_FAILED, payload: { error: error.message } })
        }

    }

    const SignOut = () => {
        dispatch({ type: LoginAction.SIGN_OUT })

        emailRef.current.value = "";
        passRef.current.value = "";

    }

    return (
        <div>
            <h1>is Loading : {String(state.isLoading)}</h1>
            <h1>is Login : {String(state.isLogin)}</h1>
            <h1>is Error : {String(state.isError)}</h1>
            <h1>
                ID : {state.user.id}
                <br />
                Name : {state.user.name}
                <br />
                Email : {state.user.email}
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

export default LoginReducer