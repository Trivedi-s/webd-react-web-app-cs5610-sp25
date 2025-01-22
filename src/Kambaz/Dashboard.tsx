import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/1234/Home">
            <img src="/images/react.png" width={200} />
            <div>
                <h5>CS1234 React</h5>
                <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5680/Home">
            <img src="/images/cybersecurity.png" width={200} />
            <div>
                <h5>CS5680 Cybersecurity</h5>
                <p className="wd-dashboard-course-title">The Complete Cyber Security Course.</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5490/Home">
            <img src="/images/Robotics.jpeg" width={200} />
            <div>
                <h5>CS5490 Robotics</h5>
                <p className="wd-dashboard-course-title">Robotics Fundamental Course</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5010/Home">
            <img src="/images/pdp.png" width={200} />
            <div>
                <h5>CS 5010 Programming Design Paradigm</h5>
                <p className="wd-dashboard-course-title">Master programming design paradigms.</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5100/Home">
            <img src="/images/FAI.jpeg" width={200} />
            <div>
                <h5>CS 5100 Foundations of Artificial Intelligence</h5>
                <p className="wd-dashboard-course-title">Explore AI algorithms and concepts.</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5200/Home">
            <img src="/images/DBMS.jpeg" width={200} />
            <div>
                <h5>CS 5200 Database Management Systems</h5>
                <p className="wd-dashboard-course-title">Learn database design and SQL..</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5330/Home">
            <img src="/images/Pattern Recognition.jpeg" width={200} />
            <div>
                <h5>CS 5330 Pattern Recognition and Computer Vision</h5>
                <p className="wd-dashboard-course-title">Explore pattern recognition techniques.</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/5800/Home">
            <img src="/images/algo.jpeg" width={200} />
            <div>
                <h5>CS 5800 Algorithms</h5>
                <p className="wd-dashboard-course-title">Learn algorithm design and analysis.</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
        <div className="wd-dashboard-course">
             <Link className="wd-dashboard-course-link" to="/Kambaz/Courses/6120/Home">
            <img src="/images/NLP.jpeg" width={200} />
            <div>
                <h5>CS 6120 Natural Language Processing</h5>
                <p className="wd-dashboard-course-title">Understand natural language processing.</p>
                <button>Go</button>
            </div>
            </Link>
        </div>
      </div>
    </div>
);}
