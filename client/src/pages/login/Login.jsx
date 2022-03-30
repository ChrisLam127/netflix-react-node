import "./login.scss"


const Register = () => {
   
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">

            <img className="logo" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8&w=1000&q=80"
            alt="logo" />
           
            </div>
        </div>
        <div className="container">
          <form >
              <h1>Sign In</h1>

              <input type="email" placeholder="Email or Phone Number" />
              <input type="password"  placeholder="Password"/>
              <button className="loginButton">Sign In</button>
              <span>New to Netflix? <b>Sign Up Now</b> </span>
              <small>This page is protected by Google ReCAPTCHA to ensure you are not a bot. <b>Learn More...</b></small>
          </form>
        </div>
    </div>
  )
}

export default Register