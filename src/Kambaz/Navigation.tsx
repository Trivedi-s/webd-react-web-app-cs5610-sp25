import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { LiaBookSolid} from "react-icons/lia";
import { FaInbox, FaRegCircleUser} from "react-icons/fa6";
import { Link } from "react-router";
export default function KambazNavigation() {
    return (
        <div id="wd-kambaz-navigation" style={{ width: 120 }} 
             className="list-group rounded-0 position-fixed
             bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a id="wd-neu-link" target="_blank" 
             href="https://www.northeastern.edu/"
             className="list-group-item bg-black border-0 text-center">
             <img src="/images/NEU.png" width="95px" /></a><br />
            <Link to="/Kambaz/Account" id="wd-account-link"
             className="list-group-item text-center border-0 bg-black text-white">
             <FaRegCircleUser className="fs-1 text text-white" /><br />
             Account </Link><br />
            <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
             className="list-group-item text-center border-0
                        bg-white text-danger">
             <AiOutlineDashboard className="fs-1 text-danger" /><br />
             Dashboard </Link><br />
            <Link to="/Kambaz/Dashboard" id="wd-course-link"
             className="list-group-item text-white
                        bg-black text-center border-0">
             <LiaBookSolid className="fs-1 text-danger" /><br />
             Courses </Link><br />
             <Link to="/Kambaz/Calendar" id="wd-course-link"
             className="list-group-item text-white
                        bg-black text-center border-0">
             <IoCalendarOutline className="fs-1 text-danger" /><br />
             Calendar </Link><br />
             <Link to="/Kambaz/Inbox" id="wd-course-link"
             className="list-group-item text-white
                        bg-black text-center border-0">
             <FaInbox className="fs-1 text-danger" /><br />
             Inbox </Link><br />
             <Link to="/Labs" id="wd-course-link"
             className="list-group-item text-white
                        bg-black text-center border-0">
             <IoSettingsOutline className="fs-1 text-danger" /><br />
             Labs </Link><br />
             {/* <Link to="/Kambaz/Sudio" id="wd-course-link"
             className="list-group-item text-white
                        bg-black text-center border-0">
             <MdOutlineSmartDisplay className="fs-1 text-danger" /><br />
             Studio </Link><br />
             <Link to="/Kambaz/Help" id="wd-course-link"
             className="list-group-item text-white
                        bg-black text-center border-0">
             <BsQuestionCircle className="fs-1 text-danger" /><br />
             Help </Link><br /> */}
        </div>
        );
    }
      
