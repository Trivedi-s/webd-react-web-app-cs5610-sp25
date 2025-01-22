export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" style={{marginLeft: "20px"}}>
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br />
        <input id="wd-name" value="A1 - ENV + HTML" style={{marginTop: "10px"}}/><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
        </textarea>
        <br />
        <table style={{marginTop: "10px"}}>
          <tr>
            <td align="right" valign="top" style={{marginLeft: "100px"}}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>PROJECTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
                <option>Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>Offline</option>
              </select>
              <div style={{ marginTop: "10px" }}>
                <p style={{ marginRight: "5px" }}>Online Entry Options</p>
                <label htmlFor="wd-text-entry">
                  <input id="wd-text-entry" type="checkbox" style={{ marginRight: "5px" }} /> Text Entry
                </label>
                <br />
                <label htmlFor="wd-website-url">
                  <input id="wd-website-url" type="checkbox" style={{ marginRight: "5px" }} /> Website URL
                </label>
                <br />
                <label htmlFor="wd-media-recordings">
                  <input id="wd-media-recordings" type="checkbox" style={{ marginRight: "5px" }} /> Media Recordings
                </label>
                <br />
                <label htmlFor="wd-student-annotation">
                  <input id="wd-student-annotation" type="checkbox" style={{ marginRight: "5px" }} /> Student Annotation
                </label>
                <br />
                <label htmlFor="wd-file-upload">
                  <input id="wd-file-upload" type="checkbox" style={{ marginRight: "5px" }} /> File Uploads
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>Assign To</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>
          <tr>
            <td ></td>
            <td >
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
          <td></td>
            <td>
              <input type="date" id="wd-due-date"/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td></td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="date" id="wd-available-from" />
            </td>
            <td></td>
            <td>
              <input type="date" id="wd-available-until" />
            </td>
          </tr>
        </table>
        <hr />
        <button style={{marginLeft: "270px", marginRight: "10px"}}>Cancel</button>
        <button>Save</button>
      </div>
  );}  