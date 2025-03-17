export default function Sidebar() {
    return (
      <div className="w-64 bg-white h-screen shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <span className="bg-yellow-500 h-6 w-6 mr-2"></span> TeacherTA
        </h2>
        <nav className="mt-6">
          <ul>
            <li className="flex items-center px-4 py-3 bg-yellow-500 text-white rounded-md cursor-pointer">
                Trang chủ
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
                Lịch giảng dạy
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
                Quản lý môn học
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
                Tra cứu công dạy
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
                 Báo cáo công dạy    
            </li>
            <li className="flex items-center px-4 py-3 hover:bg-yellow-100 rounded-md cursor-pointer">
            Quản lý tài khoản
            </li>
        
          </ul>
        </nav>
      </div>
    );
}
