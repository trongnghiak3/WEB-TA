import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import lophocRoutes from './routes/lophocRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use('/lophoc', lophocRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
