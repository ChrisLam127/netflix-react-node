import "./register.scss"
import {useState, useRef} from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">

            <img className="logo" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8&w=1000&q=80"
            alt="logo" />
            <button className="loginButton">Sign In</button>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more...</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <p>Ready to watch? Enter your email to create or restart your membershio.</p>
        {
            !email ? <div className="input">
            <input type="email" placeholder="Email Address" ref = {emailRef} />
            <button className="registerButton" onClick={handleStart}  >Get Started</button>
        </div> : <form className="input">
            <input type="password" placeholder="password" ref = {passwordRef} />
            <button className="registerButton" onClick={handleFinish}  >Start</button>
        </form>
        }
        </div>
    </div>
  )
}

export default Register