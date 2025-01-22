import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" placeholder="username" /><br/>
      <input id="wd-password" placeholder="password"
             type="password" /><br/>
      <input id="wd-firstname" placeholder="First Name" /><br/>
      <input id="wd-lastname" placeholder="Last Name" /><br/>
      <input id="wd-dob" type="date" /><br/>
      <input id="wd-email" placeholder="Email" type="email" /><br/>
      <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}
