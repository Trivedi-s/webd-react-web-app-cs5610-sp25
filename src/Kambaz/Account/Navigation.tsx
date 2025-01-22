import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
        <ul>
        <li><a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/></li>
        <li><Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/></li>
        <li><Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/></li>
        <li><Link to="/Labs" id="wd-labs-link">Labs</Link><br/></li>
        <li><Link to={`/Kambaz/Account/Signin`}  > Signin  </Link> <br/></li>
        <li><Link to={`/Kambaz/Account/Signup`}  > Signup  </Link> <br/></li>
        <li><Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/></li>
        </ul>
    </div>
);}
