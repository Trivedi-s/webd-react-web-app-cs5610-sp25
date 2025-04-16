import { ListGroup } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { setQuizzes} from "./QuizReducer";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import * as quizzesClient from "./client";
import QuizControlButtons from "./QuizControlButton";
import { useEffect } from "react";
export default function Quizzes() {
    const { cid } = useParams();
    console.log("cid", cid);
    const { quizzes } = useSelector((state: any) => state.quizReducer);
    const dispatch = useDispatch();

    const fetchQuizzes = async () => {
        const quizzes = await quizzesClient.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
      };
      useEffect(() => {
        fetchQuizzes();
      }, []);

    return (
        <div id="wd-quizzes">

            <div className="row">
                <div className="position-relative col-md-6" style={{ paddingBottom: "12px"}}>
                    {/* <HiMagnifyingGlass className="position-absolute ms-2" style={{ margin: "0 auto", height: "100%", left: "12px" }} /> */}
                    <input
                        type="text"
                        placeholder="Search for Quiz"
                        className="form-control wd-search-bar"
                        style={{ height: "48px" }}
                    />
                </div>
                {/* <div className="col-md-4">
                    <ProtectedRoute>
                        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment" >
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Assignment
                        </Button>
                    </ProtectedRoute>
                    <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </Button>
                </div> */}
            </div>

            <div id="wd-asignment-main-section" className="wd-title p-3 ps-2 ">
                <ListGroup className="rounded-0" id="wd-quiz">
                    <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-center">
                            <div className="ms-3">
                                <FaCaretDown /> ASSIGNMENT QUIZZES
                            </div>
                            <div className="ms-3 align-items-center">
                                {/* <button className="rounded-pill me-3 bg-secondary border-opacity-50">
                                    40% of total
                                </button> */}
                                <button className="border-0 bg-secondary">
                                    <IoAddSharp></IoAddSharp>
                                </button>
                                <IoEllipsisVerticalOutline></IoEllipsisVerticalOutline>
                            </div>
                        </div>
                    </ListGroup.Item>
                    {quizzes
                        .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <ListGroup.Item key={module._id} className="d-flex justify-content-between align-items-center p-3 wd-quizzes">
                                <div className="d-flex align-items-center">
                                    <QuizControlButtons />
                                    <div className="mt-3">
                                        <div className="ms-3 assignment-item">
                                            <Link
                                                to={`/Kambaz/Courses/${cid}/Assignments/${module._id}/EditAssignment`}
                                                className="wd-assignment-link text-black text-decoration-none"
                                            >
                                                <strong>{module._id}</strong>
                                            </Link>
                                            <p className="wd-assignment-details mb-0">
                                                <span className="text-danger">{module.description}</span> |{" "}
                                                <b>Not Available until</b> {module.description} |
                                                <br />
                                                <b>Due </b>{module.description} | {module.description} pts
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                </ListGroup>
            </div>
        </div>
    );
}