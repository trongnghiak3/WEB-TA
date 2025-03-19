import { Home, Users, Clock, Calendar, BookOpen, Search, BarChart, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen shadow-md p-4">
      <h2 className="text-xl font-bold text-gray-800 flex items-center">
        <span className="bg-yellow-500 h-6 w-6 mr-2"></span> TeacherTA
      </h2>
      <nav className="mt-6">
        <ul>
          <li className="flex items-center px-4 py-3 bg-yellow-500 text-white rounded-md cursor-pointer">
            <Home className="w-5 h-5 mr-3" /> Trang chủ
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <Users className="w-5 h-5 mr-3" /> Danh sách giáo viên
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <Clock className="w-5 h-5 mr-3" /> Chấm công
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <Calendar className="w-5 h-5 mr-3" /> Lịch giảng dạy
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <BookOpen className="w-5 h-5 mr-3" /> Quản lý môn học
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <Search className="w-5 h-5 mr-3" /> Tra cứu công dạy
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <BarChart className="w-5 h-5 mr-3" /> Báo cáo công dạy
          </li>
          <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            <User className="w-5 h-5 mr-3" /> Quản lý tài khoản
          </li>
        </ul>
      </nav>
    </div>
  );
}
