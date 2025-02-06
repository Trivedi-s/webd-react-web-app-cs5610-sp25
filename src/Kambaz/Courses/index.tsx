import { Navigate, Route, Routes, useParams} from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Quizzes from "./Quizzes";
import Grades from "./Grades";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
export default function Courses() {
    const { cid } = useParams<{ cid: string }>();
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />Course {cid} </h2>
        <hr />
        {/* <table>
          <tr><td valign="top">*/}
          <div className="d-flex">
            <div className="d-none d-md-block">
              <CoursesNavigation />{/*</td> */}
            </div>
            {/* <td valign="top"> */}
            <div className="flex-fill">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Piazza" element={<Piazza />} />
                <Route path="Zoom" element={<Zoom/>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Quizzes" element={<Quizzes />} />
                <Route path="Grades" element={<Grades />} />
                <Route path="People" element={<PeopleTable />} />
              </Routes>
            </div>
          </div>
          {/* </td></tr>
        </table> */}
      </div>
  );}
  