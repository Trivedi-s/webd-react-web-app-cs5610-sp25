import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS1234 React JS </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/cybersecurity.png" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                    to="/Kambaz/Courses/5680/Home"> CS5680 Cybersecurity </Link>
                <p className="wd-dashboard-course-title">
                The Complete Cyber Security Course </p>
                <Link to="/Kambaz/Courses/5680/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
            <img src="/images/Robotics.jpeg" width={200} />
            <div>
                <Link className="wd-dashboard-course-link"
                    to="/Kambaz/Courses/5490/Home"> CS5490 Robotics </Link>
                <p className="wd-dashboard-course-title">
                Robotics Fundamental Course</p>
                <Link to="/Kambaz/Courses/5490/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/5010/Home"> CS 5010 Programming Design Paradigm </Link>
            <p className="wd-dashboard-course-title">
                Master programming design paradigms. </p>
            <Link to="/Kambaz/Courses/5010/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/5100/Home"> CS 5100 Foundations of Artificial Intelligence </Link>
            <p className="wd-dashboard-course-title">
                Explore AI algorithms and concepts. </p>
            <Link to="/Kambaz/Courses/5100/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/5200/Home"> CS 5200 Database Management SystemsS </Link>
            <p className="wd-dashboard-course-title">
                Learn database design and SQL. </p>
            <Link to="/Kambaz/Courses/5200/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/5330/Home"> CS 5330 Pattern Recognition and Computer Vision </Link>
            <p className="wd-dashboard-course-title">
                Explore pattern recognition techniques. </p>
            <Link to="/Kambaz/Courses/5330/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/5800/Home"> CS 5800 Algorithms </Link>
            <p className="wd-dashboard-course-title">
                Learn algorithm design and analysis. </p>
            <Link to="/Kambaz/Courses/5800/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/react.png" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/6120/Home"> CS 6120 Natural Language Processing </Link>
            <p className="wd-dashboard-course-title">
                Understand natural language processing. </p>
            <Link to="/Kambaz/Courses/6120/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
);}
