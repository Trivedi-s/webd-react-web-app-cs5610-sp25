import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/react.png" width="100%" height={160}/>
                        <Card.Body >
                            <Card.Title className="wd-dashboard-course-title ">CS1234 React JS</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Full Stack software developer</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5680/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/cybersecurity.png" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5680 Cybersecurity</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Cyber Security Course</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5490/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/Robotics.jpeg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5490 Robotics</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Robotics Fundamental Course</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5800/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/algo.jpeg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5800 Algorithms</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Algorithm design and analysis</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5200/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/DBMS.jpeg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5200 DBMS</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">DB design and SQL</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5010/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/pdp.png" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5010 PDP</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Master PDP</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5100/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/FAI.jpeg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5100 Foundations AI</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">AI algorithms and concepts</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/5330/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/Pattern Recognition.jpeg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS5330 Machine Learning</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Understand ML Concepts</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                    <Link to="/Kambaz/Courses/6120/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                        <Card.Img variant="top" src="/images/Pattern Recognition.jpeg" width="100%" height={160}/>
                        <Card.Body>
                            <Card.Title className="wd-dashboard-course-title ">CS6120 Natural Language Processing</Card.Title>
                            <Card.Text className="wd-dashboard-course-description ">Understand natural language processing</Card.Text>
                            <Button variant="primary">Go</Button>
                        </Card.Body>
                    </Link>
                </Card>
            </Col>
        </Row> 
      </div>
    </div>
);}
