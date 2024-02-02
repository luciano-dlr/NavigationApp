import { AuthState } from "./AuthContext";

// enum AuthActions {
//     SIGN_IN='signIn',
//     LOG_OUT='logout',
//     CHANGE_FAV_ICON='changeFavIcon'
// };

// interface AuthAction2  { 
//     type:AuthActions,      
//     payload?:string 
// };
    
type AuthAction = 
{ type: 'signIn' } 
|{ type: 'changeFavIcon', payload: string } 
| { type: 'logout' }
| {type:'changeName',payload:string};

// Genera nuevo estado
// Siempre tiene que regresar algo de tipo AuthState, la entidad creada para el reducer
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {

        case 'signIn':
           
            return {
                ...state,
                isLoggedIng: true,
                username: 'Leiox'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return {
                ...state,
                isLoggedIng:false,
                username:undefined,
                favoriteIcon:undefined
            }
        case 'changeName':
            return {
                ...state,
                username:action.payload,
            }

            
        default:
            return state
    }
}