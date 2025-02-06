import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
export default function Account() {
  return (
    <div id="wd-account-screen">
      <table>
        <tbody>
          <tr>
            <td valign="top"> <AccountNavigation /> </td>
            <td valign="top">
              <Routes>
                  <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
                  <Route path="/Signin" element={<Signin />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Signup" element={<Signup />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>      
    </div>
);}
{/* <div id="wd-account-screen" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Modules </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Piazza </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </Link>
    </div> */}
    