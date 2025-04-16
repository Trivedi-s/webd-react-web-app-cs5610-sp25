// import { Link } from "react-router-dom";
// import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { unenroll, enroll } from "./enrollmentReducer";
// import { v4 as uuidv4 } from 'uuid';
// import { setCourses } from "./Courses/reducer";
// import * as coursesClient from "./Courses/client";

// interface DashboardProps {
//   courses: any[];
//   addNewCourse: (course: any) => Promise<any>;
//   deleteCourse: (courseId: any) => Promise<any>;
//   updateCourse: (course: any) => Promise<any>;
//   fetchCourses: () => Promise<any[]>;
// }

// export default function Dashboard({
//   courses,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: DashboardProps) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
//   const dispatch = useDispatch();

//   const newCourse = {
//     _id: uuidv4(),
//     title: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     description: "New Description",
//     image: "images/react.png",
//   };

//   const [course, setCourse] = useState(newCourse);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const savedShowAll = sessionStorage.getItem('showAllCourses');
//     if (savedShowAll !== null) {
//       setShowAll(JSON.parse(savedShowAll));
//     }
//   }, []);

//   useEffect(() => {
//     sessionStorage.setItem('showAllCourses', JSON.stringify(showAll));
//   }, [showAll]);

// const fetchCourses = async () => {
//   const courses = await coursesClient.findModulesForCourse(currentUser._id as string);
//   dispatch(setCourses(courses));
// };
// useEffect(() => {
//   fetchCourses();
// }, []);

//   const isAdminOrFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";
//   const filteredCourses = showAll
//     ? courses
//     : courses.filter((course: any) =>
//       enrollments.some(
//         (enrollment: any) =>
//           enrollment.user === currentUser._id &&
//           enrollment.course === course._id
//       )
//     );

//   const handleAddCourse = async () => {
//     const updatedCourse = { ...course, _id: uuidv4(), image: "images/react.png" };
//     setCourse(updatedCourse);
//     const newCourseData = await addNewCourse(updatedCourse);
//     dispatch(enroll({ user: currentUser, course: newCourseData || updatedCourse }));
//   };

//   const handleUpdateCourse = async () => {
//     await updateCourse(course);
//   };

//   const handleDeleteCourse = async (courseId: string) => {
//     await deleteCourse(courseId);
//   };

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard
//         {!isAdminOrFaculty && (
//           <Button
//             className="float-end"
//             onClick={toggleShowAll}
//           >
//             {showAll ? "Enrolled Courses" : "All Courses"}
//           </Button>
//         )}
//       </h1>
//       <hr />
//       {isAdminOrFaculty && (
//         <>
//           <h5>New Course
//             <button className="btn btn-primary float-end"
//               id="wd-add-new-course-click"
//               onClick={handleAddCourse}> Add </button>
//             <button className="btn btn-warning float-end me-2"
//               onClick={handleUpdateCourse} id="wd-update-course-click">
//               Update
//             </button>
//           </h5>
//           <br />
//           <FormControl
//             value={course.title}
//             className="mb-2"
//             onChange={(e) => setCourse({ ...course, title: e.target.value })}
//           />
//           <FormControl
//             value={course.description}
//             as="textarea"
//             rows={1}
//             onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           />
//           <hr />
//         </>
//       )}

//       <h2 id="wd-dashboard-published">
//         Published Courses ({filteredCourses.length})
//       </h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {filteredCourses.map((course: any) => (
//             <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
//               <Card>
//                 <Link to={`/Kambaz/Courses/${course._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark" >
//                   <Card.Img variant="top" src={course.image} width="100%" height={160} /><br />
//                   <div className="card-body">
//                     <h5 className="wd-dashboard-course-title card-title overflow-hidden text-nowrap">
//                       {course.title} </h5>
//                     <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 50 }}>
//                       {course.description} </p>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <button className="btn btn-primary wd-go-button"> Go </button>
//                       {isAdminOrFaculty &&
//                         <>
//                           <Button onClick={(event) => {
//                             event.preventDefault();
//                             handleDeleteCourse(course._id);
//                           }} className="btn btn-danger wd-card-delete-button float-end"
//                             id="wd-delete-course-click">
//                             Delete
//                           </Button>
//                           <Button id="wd-edit-course-click"
//                             onClick={(event) => {
//                               event.preventDefault();
//                               setCourse(course);
//                             }}
//                             className="btn btn-warning me-2 wd-card-edit-button float-end" >
//                             Edit
//                           </Button>
//                         </>}
//                       {!isAdminOrFaculty && (
//                         enrollments.some((enrollment: any) =>
//                           enrollment.user === currentUser._id && enrollment.course === course._id
//                         ) ?
//                           <Button className="btn btn-danger wd-card-delete-button" onClick={(e) => {
//                             e.preventDefault();
//                             dispatch(unenroll({ user: currentUser, course }));
//                           }}>Unenroll</Button>
//                           :
//                           <Button className="btn btn-success wd-card-delete-button" onClick={(e) => {
//                             e.preventDefault();
//                             dispatch(enroll({ user: currentUser, course }));
//                           }}>Enroll</Button>
//                       )}
//                     </div>
//                   </div>
//                 </Link>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { unenroll, enroll } from "./enrollmentReducer";
import { v4 as uuidv4 } from 'uuid';
import { setCourses } from "./Courses/reducer";
import * as coursesClient from "./Courses/client";

interface DashboardProps {
  courses: any[];
  addNewCourse: (course: any) => Promise<any>;
  deleteCourse: (courseId: any) => Promise<any>;
  updateCourse: (course: any) => Promise<any>;
  fetchCourses: () => Promise<any[]>;
}

export default function Dashboard({
  courses,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();

  const newCourse = {
    _id: uuidv4(),
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    image: "images/NEU.png",
  };

  const [course, setCourse] = useState(newCourse);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const savedShowAll = sessionStorage.getItem('showAllCourses');
    if (savedShowAll !== null) {
      setShowAll(JSON.parse(savedShowAll));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('showAllCourses', JSON.stringify(showAll));
  }, [showAll]);

  const fetchCourses = async () => {
    const courses = await coursesClient.findModulesForCourse(currentUser._id as string);
    dispatch(setCourses(courses));
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const isAdminOrFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";

  const filteredCourses = showAll
    ? courses
    : courses.filter((course: any) =>
      enrollments.some(
        (enrollment: any) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
      )
    );

  const handleAddCourse = async () => {
    const updatedCourse = { ...course, _id: uuidv4(), image: "images/NEU.png" };
    setCourse(updatedCourse);
    const newCourseData = await addNewCourse(updatedCourse);
    dispatch(enroll({ user: currentUser, course: newCourseData || updatedCourse }));
  };

  const handleUpdateCourse = async () => {
    await updateCourse(course);
  };

  const handleDeleteCourse = async (courseId: string) => {
    await deleteCourse(courseId);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {!isAdminOrFaculty && (
          <Button
            className="float-end"
            onClick={toggleShowAll}
          >
            {showAll ? "Enrolled Courses" : "All Courses"}
          </Button>
        )}
      </h1>
      <hr />
      {isAdminOrFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={1}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {filteredCourses.map((course: any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img variant="top" src={course.image} width="100%" height={160} /><br />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title overflow-hidden text-nowrap">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 50 }}>
                      {course.description} </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-primary wd-go-button"> Go </button>
                      {isAdminOrFaculty &&
                        <>
                          <Button onClick={(event) => {
                            event.preventDefault();
                            handleDeleteCourse(course._id);
                          }} className="btn btn-danger wd-card-delete-button float-end"
                            id="wd-delete-course-click">
                            Delete
                          </Button>
                          <Button id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 wd-card-edit-button float-end" >
                            Edit
                          </Button>
                        </>}
                      {!isAdminOrFaculty && (
                        enrollments.some((enrollment: any) =>
                          enrollment.user === currentUser._id && enrollment.course === course._id
                        ) ?
                          <Button className="btn btn-danger wd-card-delete-button" onClick={(e) => {
                            e.preventDefault();
                            dispatch(unenroll({ user: currentUser, course }));
                          }}>Unenroll</Button>
                          :
                          <Button className="btn btn-success wd-card-delete-button" onClick={(e) => {
                            e.preventDefault();
                            dispatch(enroll({ user: currentUser, course }));
                          }}>Enroll</Button>
                      )}
                    </div>
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}