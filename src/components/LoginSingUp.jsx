import {Link} from "react-router-dom"
function LoginSingUp() {
    return (
      <div>
        <button>Login</button>
        <button>Sing up</button>

        <Link to="/register">Sing Up</Link>
        <Link to="/login">Login</Link>
      </div>

    )
  }
  
  export default LoginSingUp