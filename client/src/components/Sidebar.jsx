import { Home, Users,Briefcase, Clock, Calendar, BookOpen, Search, BarChart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center">
        <span className="bg-yellow-500 h-6 w-6 mr-2"></span> TeacherTA
      </h2>
      <nav className="mt-6">
        <ul>
          
          <li className="flex items-center px-4 py-3 bg-yellow-500 text-white rounded-md">
            <Home className="w-5 h-5 mr-3" />
            <Link to="/" className="text-white font-medium">Trang chủ</Link>
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <User className="w-5 h-5 mr-3" />
            <Link to="/quan-ly-tai-khoan" className="text-gray-700 hover:text-yellow-600 font-medium">
              Quản lý tài khoản
            </Link>
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <Users className="w-5 h-5 mr-3" />
            <Link to="/danh-sach-giao-vien" className="text-gray-700 hover:text-yellow-600 font-medium">
              Danh sách giáo viên
            </Link>
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <Briefcase className="w-5 h-5 mr-3" />
            <Link to="/danh-sach-quan-ly" className="text-gray-700 hover:text-yellow-600 font-medium">
              Danh sách quản lí
            </Link>
          </li>
         
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <BookOpen className="w-5 h-5 mr-3" />
            <Link to="/quan-ly-mon-hoc" className="text-gray-700 hover:text-yellow-600 font-medium">
              Quản lý môn học
            </Link>
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <Clock className="w-5 h-5 mr-3" />
            <Link to="/cham-cong" className="text-gray-700 hover:text-yellow-600 font-medium">
              Chấm công
            </Link>
          </li>
          
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <Calendar className="w-5 h-5 mr-3" />
            <Link to="/lich-giang-day" className="text-gray-700 hover:text-yellow-600 font-medium">
              Lịch giảng dạy
            </Link>
          </li>
    
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <Search className="w-5 h-5 mr-3" />
            <Link to="/tra-cuu-cong-day" className="text-gray-700 hover:text-yellow-600 font-medium">
              Tra cứu công dạy
            </Link>
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md">
            <BarChart className="w-5 h-5 mr-3" />
            <Link to="/bao-cao-cong-day" className="text-gray-700 hover:text-yellow-600 font-medium">
              Báo cáo công dạy
            </Link>
          </li>
    
        </ul>
      </nav>
    </div>
  );
}
