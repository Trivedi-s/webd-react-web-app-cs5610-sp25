export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button style={{ marginRight: "10px" }}>Collapse All</button>
        <button style={{ marginRight: "10px" }}>View Progress</button>
        <button style={{ marginRight: "10px" }}>Publish All</button>
        <button style={{ marginRight: "10px" }}>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Keep working on assignment 1</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to CSS</li>
                  <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  