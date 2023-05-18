import {createContext, useEffect, useState} from 'react'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import app from "./firebase.config"
export const AuthContext = createContext(null) 



const auth = getAuth(app)

const AuthProvider = ({children}) => {
	
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

{/*To create a user*/}
	const createUser = (email, password) =>{
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}
	const logIn = (email, password) =>{
		return signInWithEmailAndPassword(auth, email, password)
	}

{/*To check the user's state*/}
	useEffect(()=>{
		const unsubscribe = onAuthStateChanged(auth, currentUser=>{
			setUser(currentUser)
			console.log(user)
			setLoading(false)
		})
		return () => {
			unsubscribe()
		}
	},[])




	const authInfo = {
		user,
		createUser,
		logIn
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
