import express from 'express'
import dotenv from 'dotenv';
import { router } from './routes/routes.js';
dotenv.config()

const app = express();
const PORT = process.env.PORT | 3003;

app.use(express.json())
app.use("/", router);

app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
});
