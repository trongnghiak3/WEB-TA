import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { FaCalendarAlt, FaClock, FaUserTie } from "react-icons/fa";

export default function Dashboard() {
  const [stats, setStats] = useState({ totalTeachers: 0, totalDaysWorked: 0, totalDaysOff: 0, totalDaysPending: 0 });

  useEffect(() => {
    // Giả lập API call
    setTimeout(() => {
      setStats({ totalTeachers: 35, totalDaysWorked: 120, totalDaysOff: 10, totalDaysPending: 15 });
    }, 1000);
  }, []);

  const data = [
    { name: "Số ngày giảng dạy", value: stats.totalDaysWorked },
    { name: "Số buổi nghỉ", value: stats.totalDaysOff },
    { name: "Số buổi chấm công", value: stats.totalDaysPending },
  ];
  const COLORS = ["#16A34A", "#FACC15", "#DC2626"];

  const statCards = [
    { icon: <FaUserTie size={30} />, label: "Số giáo viên", value: stats.totalTeachers, color: "bg-blue-500" },
    { icon: <FaCalendarAlt size={30} />, label: "Ngày giảng dạy", value: stats.totalDaysWorked, color: "bg-red-500" },
    { icon: <FaClock size={30} />, label: "Ngày nghỉ", value: stats.totalDaysOff, color: "bg-cyan-500" },
  ];

  return (
    <div>
      {/* Thống kê nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statCards.map((item, index) => (
          <div key={index} className={`p-6 rounded-xl shadow-lg flex items-center space-x-4 text-white ${item.color}`}>
            <div className="p-3 bg-white bg-opacity-20 rounded-full">{item.icon}</div>
            <div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-lg">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Biểu đồ trạng thái */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Biểu đồ thống kê trạng thái</h3>
          <PieChart width={350} height={300}>
            <Pie data={data} cx={175} cy={130} innerRadius={60} outerRadius={100} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Danh sách giáo viên */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Danh sách giáo viên</h3>
          <table className="w-full text-left border border-gray-300 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-blue-300 text-gray-700">
                <th className="p-3">Tên giáo viên</th>
                <th className="p-3">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {/* Giả lập dữ liệu giáo viên */}
              <tr className="border-t border-gray-300 hover:bg-blue-100 transition-all">
                <td className="p-3">Nguyễn Văn A</td>
                <td className="p-3 text-green-700 font-medium">Đã chấm công</td>
              </tr>
              <tr className="border-t border-gray-300 hover:bg-blue-100 transition-all">
                <td className="p-3">Trần Thị B</td>
                <td className="p-3 text-yellow-700 font-medium">Chưa chấm công</td>
              </tr>
              <tr className="border-t border-gray-300 hover:bg-blue-100 transition-all">
                <td className="p-3">Lê Văn C</td>
                <td className="p-3 text-red-700 font-medium">Nghỉ phép</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
