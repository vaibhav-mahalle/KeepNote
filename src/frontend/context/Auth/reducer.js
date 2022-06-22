export const authReducer = (authState, {type, payload:{user, token}}) => {
    switch(type){
        case "LOGIN":
            {console.log(type);
            return {...authState,user: user, token: token};}
        case "SIGNUP":
            {console.log(type, authState);
            return {...authState, user: user, token: token};}
        case "LOGOUT": 
            return {...authState, user: null, token: null};
        default:
            return authState;
    }
}