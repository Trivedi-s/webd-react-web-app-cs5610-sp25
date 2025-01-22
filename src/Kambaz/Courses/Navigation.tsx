import { Link , useParams} from "react-router-dom";
export default function CoursesNavigation() {
    const { cid } = useParams<{ cid: string }>();
  return (
    <div id="wd-courses-navigation">
      <ul>
        <li><Link to={`/Kambaz/Courses/${cid}/Home`}>Home</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Modules`}>Modules</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Piazza`}>Piazza</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Zoom`}>Zoom</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Assignments`}>Assignments</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Quizzes`}>Quizzes</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/Grades`}>Grades</Link></li>
        <li><Link to={`/Kambaz/Courses/${cid}/People`}>People</Link></li>
      </ul>
    </div>
);}
