// import { Navigate, Route, Routes, useParams, useLocation} from "react-router";
// import CoursesNavigation from "./Navigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignment";
// import AssignmentEditor from "./Assignment/Editor";
// import Piazza from "./Piazza";
// import Zoom from "./Zoom";
// import Quizzes from "./Quizzes";
// import Grades from "./Grades";
// import { FaAlignJustify } from "react-icons/fa6";
// import PeopleTable from "./People/Table";
// // import { courses } from "../Database";
// import Settings from "./Settings";
// import AssignmentEditorViewOnly from "./Assignment/AssignmentEditorViewOnly";
// export default function Courses({ courses }: { courses: any[]; }) {
//     const { cid } = useParams();
//     const course = courses.find((course) => course._id === cid);
//     const { pathname } = useLocation();
//     return (
//       <div id="wd-courses">
//         <h2 className="text-danger">
//         <FaAlignJustify className="me-4 fs-4 mb-1" />{course && course.name} &gt; {pathname.split("/")[4]}</h2>
//         <hr />
//         {/* <table>
//           <tr><td valign="top">*/}
//           <div className="d-flex">
//             <div className="d-none d-md-block">
//               <CoursesNavigation />{/*</td> */}
//             </div>
//             {/* <td valign="top"> */}
//             <div className="flex-fill">
//               <Routes>
//                 <Route path="/" element={<Navigate to="Home" />} />
//                 <Route path="Home" element={<Home />} />
//                 <Route path="Modules" element={<Modules />} />
//                 <Route path="Piazza" element={<Piazza />} />
//                 <Route path="Zoom" element={<Zoom/>} />
//                 <Route path="Assignments" element={<Assignments />} />
//                 <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//                 <Route path="Assignments/:aid/AssignmentEditorViewOnly" element={<AssignmentEditorViewOnly />} />
//                 <Route path="Quizzes" element={<Quizzes />} />
//                 <Route path="Grades" element={<Grades />} />
//                 <Route path="People" element={<PeopleTable />} />
//                 <Route path="Settings" element={<Settings />} />
//                 <Route path="AssignmentEditor" element={<AssignmentEditor />} />
//               </Routes>
//             </div>
//           </div>
//           {/* </td></tr>
//         </table> */}
//       </div>
//   );}


import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { useSelector } from "react-redux"; 
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import AssignmentEditorViewOnly from "./Assignment/AssignmentEditorViewOnly";

export default function Courses() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  
  const courses = useSelector((state: any) => state.coursesReduccer.courses);

  const course = courses.find((course: any) => course._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course Not Found"} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Assignments/:aid/AssignmentEditorViewOnly" element={<AssignmentEditorViewOnly />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Settings" element={<h2>Settings</h2>} />
            <Route path="AssignmentEditor" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}