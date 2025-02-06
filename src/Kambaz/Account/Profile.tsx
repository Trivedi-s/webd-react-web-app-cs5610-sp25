import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{paddingLeft: "30px"}}>
      <h3>Profile</h3>
      {/* <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
      <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
      <select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/> */}
      <Form.Control
        id="wd-username"
        defaultValue="alice"
        placeholder="Username"
        className="mb-2" />
      <Form.Control
        id="wd-password"
        defaultValue="123"
        type="password"
        placeholder="Password"
        className="mb-2 mt-1" />
      <Form.Control
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2 mt-1" />
      <Form.Control
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2 mt-1" />
      <Form.Control
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2 mt-1" />
      <Form.Control
        id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        placeholder="Email"
        className="mb-2 mt-1" />
      <Form.Select
        id="wd-role"
        defaultValue="User"
        className="mb-2 mt-1">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>

      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2 mt-2"> Sign out </Link>

    </div>
  );
}