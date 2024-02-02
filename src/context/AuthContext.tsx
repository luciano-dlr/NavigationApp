import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

// Definir como luce, que informacion tendre aqui
export interface AuthState {
    isLoggedIng: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado Inicial 
export const authInitialState: AuthState = {
    isLoggedIng: false,
    username: undefined,
    favoriteIcon: undefined
}

interface AuthProviderProps {
    children: JSX.Element;
}

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logOut: () => void;
    changeName: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente proveedor del estado
export const AuthProvider = ({ children }: AuthProviderProps) => {


    // Repaso useReducer
    // const [state, dispatch] = useReducer(reducer, initializer , third)
    // reducer, no es mas que una funcion, que recibe una argumento y genera un nuevo estado 
    // initializer es el valor inicial del estado 
    // third, es un argumento adicional opcional, se utiliza para proporcionar un valor inicial inicializado de manera perezosa (lazy).
    // dispatch, es la funcion que vamos a utilizar para mandar las acciones a nuestro reducer
    
    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const logOut = () => {
        dispatch({ type: 'logout' })
    }

    const changeName = (username:string) => {
        dispatch({type:'changeName',payload:username})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavIcon,
            logOut,
            changeName

        }}>
            {children}
        </AuthContext.Provider>
    )
}