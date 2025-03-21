import LopHoc from '../models/lophocModel.js';

export const homepage = async (req, res) => {
  res.send("Server is running...");
};

export const getAllLopHoc = async (req, res) => {
  try {
    const lophocs = await LopHoc.getAll();
    res.json(lophocs);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const getLopHocById = async (req, res) => {
  try {
    const lophoc = await LopHoc.getById(req.params.id);
    if (!lophoc) return res.status(404).json({ message: "Không tìm thấy lớp học" });
    res.json(lophoc);
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const createLopHoc = async (req, res) => {
  try {
    const { TENLOP, MONHOC, SOLUONGHOCVIEN } = req.body;
    const id = await LopHoc.create({ TENLOP, MONHOC, SOLUONGHOCVIEN });
    res.status(201).json({ message: "Thêm lớp học thành công", id });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const updateLopHoc = async (req, res) => {
  try {
    const { TENLOP, MONHOC, SOLUONGHOCVIEN } = req.body;
    const affectedRows = await LopHoc.update(req.params.id, { TENLOP, MONHOC, SOLUONGHOCVIEN });
    if (affectedRows === 0) return res.status(404).json({ message: "Không tìm thấy lớp học" });
    res.json({ message: "Cập nhật thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};

export const deleteLopHoc = async (req, res) => {
  try {
    const affectedRows = await LopHoc.delete(req.params.id);
    if (affectedRows === 0) return res.status(404).json({ message: "Không tìm thấy lớp học" });
    res.json({ message: "Xóa thành công" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
};
