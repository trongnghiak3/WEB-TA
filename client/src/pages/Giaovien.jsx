export default function Giaovien() {
  const teachers = [
    { id: 1, name: "Nguyễn Văn A", gender: "Nam", birthYear: 1985, hometown: "Hà Nội", phone: "0123456789", email: "a@gmail.com", status: "Đã chấm công" },
    { id: 2, name: "Trần Thị B", gender: "Nữ", birthYear: 1990, hometown: "Hải Phòng", phone: "0987654321", email: "b@gmail.com", status: "Chưa chấm công" },
    { id: 3, name: "Lê Văn C", gender: "Nam", birthYear: 1982, hometown: "Đà Nẵng", phone: "0934567890", email: "c@gmail.com", status: "Nghỉ phép" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Danh sách giáo viên</h3>
      <table className="w-full text-left border border-gray-300 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-blue-300 text-gray-700">
            <th className="p-3">STT</th>
            <th className="p-3">Họ tên</th>
            <th className="p-3">Giới tính</th>
            <th className="p-3">Năm sinh</th>
            <th className="p-3">Quê quán</th>
            <th className="p-3">SĐT</th>
            <th className="p-3">Email</th>
            <th className="p-3">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={teacher.id} className="border-t border-gray-300 hover:bg-blue-100 transition-all">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{teacher.name}</td>
              <td className="p-3">{teacher.gender}</td>
              <td className="p-3">{teacher.birthYear}</td>
              <td className="p-3">{teacher.hometown}</td>
              <td className="p-3">{teacher.phone}</td>
              <td className="p-3">{teacher.email}</td>
              <td className={`p-3 font-medium ${
                teacher.status === "Đã chấm công" ? "text-green-700" :
                teacher.status === "Chưa chấm công" ? "text-yellow-700" : "text-red-700"
              }`}>
                {teacher.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
