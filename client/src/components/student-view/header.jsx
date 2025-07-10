import { AuthContext } from "@/context/auth-context";
import { GraduationCap, TvMinimalPlay } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

function StudentViewCommonHeader() {
  const navigate = useNavigate();
  const { resetCredentials } = useContext(AuthContext);

  function handleLogout() {
    resetCredentials();
    sessionStorage.clear();
  }

  return (
    <header className="flex items-center justify-between p-4 border-b bg-blue-600 relative">
      <div className="flex items-center space-x-4">
        <Link to="/home" className="flex items-center hover:text-black">
          <GraduationCap className="h-8 w-8 mr-4 text-white" />
          <span className="font-extrabold md:text-xl text-[14px] text-white">
            Wise Academy
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            onClick={() => {
              location.pathname.includes("/courses")
                ? null
                : navigate("/courses");
            }}
            className="text-[14px] md:text-[16px] font-medium text-blue-600 hover:bg-white"
          >
            Explore Courses
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex gap-4 items-center">
          <div
            onClick={() => navigate("/student-courses")}
            className="flex cursor-pointer items-center gap-3"
          >
            <span className="font-extrabold md:text-xl text-[14px] text-white">
              My Courses
            </span>
            <TvMinimalPlay className="w-8 h-8 cursor-pointer text-white" />
          </div>
          <Button onClick={handleLogout} className="text-white bg-transparent border border-white hover:bg-white hover:text-blue-600">
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}

export default StudentViewCommonHeader;

