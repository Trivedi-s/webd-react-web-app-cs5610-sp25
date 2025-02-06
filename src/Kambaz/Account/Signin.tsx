import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen" style={{paddingLeft: "30px"}}>
      <h3>Sign in</h3>
      {/* <input placeholder="username" id="wd-username" /> <br />
      <input placeholder="password" id="wd-password"
             type="password" /> <br />
      <Link  to="/Kambaz/Dashboard"
             id="wd-signin-btn"> Sign in </Link><br />
      <Link  to="/Kambaz/Account/Signup"
             id="wd-signup-link">Sign up</Link> */}
       <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2 mt-1"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2 mt-2"
            style={{marginBottom: "5px"}}>
            Sign in </Link>
       <Link  to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
    </div>
);}
