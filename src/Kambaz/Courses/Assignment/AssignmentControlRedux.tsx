// import { useNavigate, useParams } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { FaPlus } from "react-icons/fa";
// import { HiMagnifyingGlass } from "react-icons/hi2";
// import { useState } from "react";
// import * as db from "../../Database";
// import ProtectedRoute from "../../ProtectedRoutes";

// export default function AssignmentControlRedux(
//   { assignmentName, setAssignmentName, addAssignment }: {
//     assignmentName: string; setAssignmentName: (name: string) => void; addAssignment: () => void;
//   }
// ) {
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const { cid } = useParams();

//   const handleAddAssignment = () => {
//     //addAssignment();
//     navigate(`/Kambaz/Courses/${cid}/AssignmentEditor`);
//     handleClose();
//   };

//   return (
//     <div className="row justify-content-between">
//       <div className="position-relative col-md-8">
//         <HiMagnifyingGlass className="position-absolute ms-2" style={{margin:"0 auto", height:"100%", left:"12px"}}/>
//         <input
//           type="text"
//           placeholder="Search..."
//           className="form-control wd-search-bar"
//           style={{paddingLeft:"30px", height:"48px"}}
//         />
//       </div>
//       <div className="col-md-4">
//         <ProtectedRoute>
//             <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment" onClick={handleAddAssignment} >
//             <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//             Assignment
//             </Button>
//         </ProtectedRoute>
//         <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-module-btn">
//           <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//           Group
//         </Button>
//       </div>
//     </div>
//   );
// }