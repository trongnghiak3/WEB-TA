import { useState } from "react";
import Modal from "react-modal";

const Nguoidung = () => {
  const [users, setUsers] = useState([
    { id: 1, hoten: "Nguyễn Văn A", tendangnhap: "nva",matkhau:"111111", vaitro: "Admin", trangthai: "1", ngaytao: "2024-03-01" },
    { id: 2, hoten: "Trần Thị B", tendangnhap: "ttb",matkhau:"111111", vaitro: "Giảng viên", trangthai: "0", ngaytao: "2024-02-15" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    id: null,
    hoten: "",
    tendangnhap: "",
    matkhau: "",
    vaitro: "",
    trangthai: "1",
    ngaytao: new Date().toISOString().split("T")[0],
  });

  const openAddModal = () => {
    setNewUser({
      id: null,
      hoten: "",
      tendangnhap: "",
      matkhau: "",
      vaitro: "",
      trangthai: "1",
      ngaytao: new Date().toISOString().split("T")[0],
    });
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setNewUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSaveUser = () => {
    if (newUser.id) {
      setUsers(users.map(user => user.id === newUser.id ? newUser : user));
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
    }
    closeModal();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-700">Quản lý người dùng</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition" onClick={openAddModal}>
          + Thêm Người Dùng
        </button>
      </div>

      {/* Bảng người dùng */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse rounded-lg">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3 text-left">Mã</th>
              <th className="p-3 text-left">Họ Tên</th>
              <th className="p-3 text-left">Tên Đăng Nhập</th>
              <th className="p-3 text-left">Mật Khẩu</th> {/* Thêm cột mật khẩu */}
              <th className="p-3 text-left">Vai Trò</th>
              <th className="p-3 text-left">Ngày Tạo</th>
              <th className="p-3 text-left">Trạng Thái</th>
              <th className="p-3 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100 transition-all">
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.hoten}</td>
                <td className="p-3">{user.tendangnhap}</td>
                <td className="p-3">{user.matkhau}</td>
                <td className="p-3">{user.vaitro}</td>
                <td className="p-3">{user.ngaytao}</td>
                <td className={`p-3 ${user.trangthai === "1" ? "text-green-600" : "text-red-600"}`}>
                  {user.trangthai === "1" ? "Hoạt động" : "Khoá"}
                </td>
                <td className="p-3 text-center">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg shadow-md transition mr-2" onClick={() => openEditModal(user)}>
                    Sửa
                  </button>
                  <button className="bg-red-700 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg shadow-md transition mr-2" onClick={() => openEditModal(user)}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal thêm/sửa người dùng */}
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
>
  <div className="bg-white p-12 rounded-2xl shadow-2xl w-[600px] animate-fadeIn">
    {/* Tiêu đề */}
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
      {newUser.id ? "Chỉnh sửa Người Dùng" : "Thêm Người Dùng"}
    </h2>

    {/* Nội dung form */}
    <div className="space-y-5">
      <input 
        type="text" 
        name="hoten" 
        placeholder="Họ tên" 
        value={newUser.hoten} 
        onChange={handleChange} 
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input 
        type="text" 
        name="tendangnhap" 
        placeholder="Tên đăng nhập" 
        value={newUser.tendangnhap} 
        onChange={handleChange} 
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <input 
        type="password" 
        name="matkhau" 
        placeholder="Mật khẩu" 
        value={newUser.matkhau} 
        onChange={handleChange} 
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      />

      {/* Vai trò */}
      <select 
        name="vaitro" 
        value={newUser.vaitro} 
        onChange={handleChange} 
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      >
        <option value="">Chọn vai trò</option>
        <option value="Giảng viên">Giảng viên</option>
        <option value="Sinh viên">Quản lý</option>
      </select>

      {/* Trạng thái */}
      <select
        name="trangthai"
        value={newUser.trangthai}
        onChange={handleChange}
        disabled={newUser.id === null} 
        className={`w-full border border-gray-300 p-3 rounded-lg outline-none ${newUser.id === null ? "bg-gray-200 cursor-not-allowed" : "focus:ring-2 focus:ring-blue-400"}`}
      >
        <option value="1">Hoạt động</option>
        <option value="0">Khoá</option>
      </select>
    </div>

    {/* Nút hành động */}
    <div className="mt-6 flex justify-between">
      <button 
        onClick={closeModal} 
        className="px-5 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-200"
      >
        Hủy
      </button>
      <button 
        onClick={handleSaveUser} 
        className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        {newUser.id ? "Cập nhật" : "Lưu"}
      </button>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default Nguoidung;
