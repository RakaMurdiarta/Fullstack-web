import { createContext, useContext, useReducer } from "react";
import { LoginServer } from "../../services/auth";

const AuthState = {
    isLogin: false,
    isLoading: false,
    isError: false,
    user: {}
}

const AuthAction = {
    SET_LOADING: 'set_loading',
    SET_USER: 'set_user',
    LOGIN_SUCCESS: 'login_success',
    LOGIN_FAILED: 'login_failed',
    SIGN_OUT: 'sign_out'
}

const AuthReducer = (state, action) => {
    console.log(action.type);
    if (action.type === AuthAction.SET_LOADING) {
        return { ...state, isLoading: true }
    }
    if (action.type === AuthAction.LOGIN_SUCCESS) {
        return { ...state, isLoading: false, isLogin: true, user: action.payload.user }
    }
    if (action.type === AuthAction.LOGIN_FAILED) {
        return { ...state, isLogin: false, isError: action.payload.error }
    }
    if (action.type === AuthAction.SIGN_OUT) {
        return AuthState
    }

}

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, AuthState)

    const SignIn = async (email, password) => {

        dispatch({ type: AuthAction.SET_LOADING })
        try {

            const user = await LoginServer(email, password)
            dispatch({ type: AuthAction.LOGIN_SUCCESS, payload: { user } })
            // password = ""
        } catch (error) {
            dispatch({ type: AuthAction.LOGIN_FAILED, payload: { error: error.message } })
        }

    }

    const SignOut = () => {
        dispatch({ type: AuthAction.SIGN_OUT })

    }
    return (
        <AuthContext.Provider value={{ ...state, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;