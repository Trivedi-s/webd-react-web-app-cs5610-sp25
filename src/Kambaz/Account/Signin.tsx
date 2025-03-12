// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen" style={{paddingLeft: "30px"}}>
//       <h3>Sign in</h3>
//        <Form.Control id="wd-username"
//              placeholder="username"
//              className="mb-2"/>
//       <Form.Control id="wd-password"
//              placeholder="password" type="password"
//              className="mb-2 mt-1"/>
//       <Link id="wd-signin-btn"
//             to="/Kambaz/Dashboard"
//             className="btn btn-primary w-100 mb-2 mt-2"
//             style={{marginBottom: "5px"}}>
//             Sign in </Link>
//        <Link  to="/Kambaz/Account/Signup" id="wd-signup-link">Sign up</Link>
//     </div>
// );}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import { Button, FormControl } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" />
      <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="mb-2" placeholder="password" type="password" id="wd-password" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
    </div>
);}