import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import ChamCong from "./pages/Chamcong"; // Thêm trang Chấm công
import Giaovien from "./pages/Giaovien";
import Nguoidung from "./pages/Nguoidung";
// import ThemNguoiDung from "./pages/Themnguoidung";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cham-cong" element={<ChamCong />} />
          <Route path="/danh-sach-giao-vien" element={<Giaovien />} />
          <Route path="/quan-ly-tai-khoan" element={<Nguoidung />} />
          {/* <Route path="/Them-nguoi-dung" element={<ThemNguoiDung />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
