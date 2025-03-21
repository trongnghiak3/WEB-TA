import mysql from 'mysql2/promise';

// Tạo pool kết nối
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'chamconggv',
    waitForConnections: true,
    connectionLimit: 10,  // Giới hạn tối đa 10 kết nối đồng thời
    queueLimit: 0
});

// Kiểm tra kết nối
const connectDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Database Connected:', process.env.MYSQL_HOST);
        connection.release(); // Giải phóng kết nối sau khi kiểm tra thành công
    } catch (error) {
        console.error('❌ Database Connection Failed:', error);
    }
};

export { pool, connectDB };

