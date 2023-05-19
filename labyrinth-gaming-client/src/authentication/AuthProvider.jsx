import {createContext, useEffect, useState} from 'react'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
import app from "./firebase.config"
export const AuthContext = createContext(null) 



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
	
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

{/*To create a user*/}
	const createUser = (email, password) =>{
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}
{/*To log in user*/}
	const logIn = (email, password) =>{
		return signInWithEmailAndPassword(auth, email, password)
	}

{/*To log in wuth Google*/}
	const googleLogIn = () =>{
		return signInWithPopup(auth, googleProvider)
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
{/*To Log Out*/}
	const logOut = () => {
		return signOut(auth)
	}


	const authInfo = {
		user,
		createUser,
		logIn,
		googleLogIn,
		logOut,
		loading
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
