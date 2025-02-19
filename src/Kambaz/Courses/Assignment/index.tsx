import { Button, ListGroup } from "react-bootstrap";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import AssignmentControll from "./AssignmentControlRight";
import AssignmentControll1 from "./AssignmentControlLeft";
import * as db from "../../Database";
import { Link, useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter((assignment) => assignment.course === cid);
    return (
      <div id="wd-assignments">
        <div className="row justify-content-between">
          <div className="position-relative col-md-8">
            <HiMagnifyingGlass className="position-absolute ms-2" style={{margin:"0 auto", height:"100%", left:"12px"}}/>
            <input
                type="text"
                placeholder="Search..."
                className="form-control wd-search-bar"
                style={{paddingLeft:"30px", height:"48px"}}
            />
          </div>
          <div className="col-md-4">
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
          </div>
        </div>
        
        <div id="wd-asignment-main-section" className="wd-title p-3 ps-2 ">
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-center">
              <div className="ms-3">
                <BsGripVertical className="me-2 fs-3" /><FaCaretDown /> ASSIGNMENTS
              </div>
              <div className="ms-3 align-items-center">
                <button className="rounded-pill me-3 bg-secondary border-opacity-50">
                  40% of total
                </button>
                <button className="border-0 bg-secondary">
                  <IoAddSharp></IoAddSharp>
                </button>
                <IoEllipsisVerticalOutline></IoEllipsisVerticalOutline>
              </div>
            </div>
          </ListGroup.Item>

          {courseAssignments.length > 0 && (
            <div>
              {courseAssignments.map((assignment) => (
                <ListGroup.Item className="d-flex justify-content-between align-items-center p-3 wd-lesson">
                    <div className="d-flex align-items-center">
                      <AssignmentControll1 />
                        <div className="mt-3">
                            <div key={assignment._id} className="ms-3 assignment-item">
                            <Link
                              to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                              className="wd-assignment-link text-black text-decoration-none"
                            >
                              <strong>{assignment._id}</strong>
                            </Link>
                            <p className="wd-assignment-details mb-0">
                              <span className="text-danger">{assignment.title}</span> |{" "}
                              <b>Not Available until</b> {assignment.availableFrom} |
                              <br />
                              <b>Due </b>{assignment.dueDate} | {assignment.points} pts
                            </p>
                          </div>
                        </div>
                    </div>
                    <AssignmentControll />
                </ListGroup.Item>
              ))}
            </div>
          )}
        </ListGroup>

      </div>
    </div>
  );
}
  