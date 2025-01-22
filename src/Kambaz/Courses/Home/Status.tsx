export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
            <button style={{ marginRight: "10px" }}>Unpublish</button>
            <button style={{ marginRight: "10px" }}>Publish</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
            <button>Import Existing Content</button>
            <button>Import from Commons</button>
            <button>Choose from Homepage</button>
            <button>View Course Stream</button>
            <button>New Announcement</button>
            <button>New Analytics</button>
            <button>View Course Notifications</button>
        </div> 
    </div>
  );}
  