import { pool } from '../config/db.js';

class LopHoc {
    // Lấy danh sách tất cả lớp học
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM lophoc');
        return rows;
    }

    // Lấy lớp học theo MALOPHOC
    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM lophoc WHERE MALOPHOC = ?', [id]);
        return rows[0];
    }

    // Thêm lớp học mới
    static async create({ TENLOP, MONHOC, SOLUONGHOCVIEN }) {
        const [result] = await pool.query(
            'INSERT INTO lophoc (TENLOP, MONHOC, SOLUONGHOCVIEN) VALUES (?, ?, ?)',
            [TENLOP, MONHOC, SOLUONGHOCVIEN]
        );
        return result.insertId;
    }

    // Cập nhật thông tin lớp học
    static async update(id, { TENLOP, MONHOC, SOLUONGHOCVIEN }) {
        const [result] = await pool.query(
            'UPDATE lophoc SET TENLOP = ?, MONHOC = ?, SOLUONGHOCVIEN = ? WHERE MALOPHOC = ?',
            [TENLOP, MONHOC, SOLUONGHOCVIEN, id]
        );
        return result.affectedRows;
    }

    // Xóa lớp học theo MALOPHOC
    static async delete(id) {
        const [result] = await pool.query('DELETE FROM lophoc WHERE MALOPHOC = ?', [id]);
        return result.affectedRows;
    }
}
export default LopHoc;
