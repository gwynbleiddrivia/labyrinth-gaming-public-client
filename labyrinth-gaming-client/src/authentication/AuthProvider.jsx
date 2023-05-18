import {createContext, useEffect, useState} from 'react'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import app from "./firebase.config"
export const AuthContext = createContext(null) 



const auth = getAuth(app)

const AuthProvider = ({children}) => {
	
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const createUser = (email, password) =>{
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const authInfo = {
		user,
		createUser
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
