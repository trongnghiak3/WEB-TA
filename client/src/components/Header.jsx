import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white shadow-md h-16 flex items-center px-6 justify-between">
      {/* Ô tìm kiếm */}
      <div className="flex items-center w-96 bg-gray-100 px-4 py-2 rounded-lg">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Icon thông báo + Avatar */}
      <div className="flex items-center space-x-6">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
