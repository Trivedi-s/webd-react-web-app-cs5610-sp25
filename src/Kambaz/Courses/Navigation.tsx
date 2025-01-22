import { Link , useParams} from "react-router-dom";
export default function CoursesNavigation() {
    const { cid } = useParams<{ cid: string }>();
  return (
    <div id="wd-courses-navigation">
      <Link to={`/Kambaz/Courses/${cid}/Home`}>Home</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Modules`}>Modules</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Piazza`}>Piazza</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Zoom`}>Zoom</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`}>Assignments</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Quizzes`}>Quizzes</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/Grades`}>Grades</Link><br/>
      <Link to={`/Kambaz/Courses/${cid}/People`}>People</Link><br/>
    </div>
);}
