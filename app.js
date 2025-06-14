import express from "express";
import userRouter from "./routes/emplyoee.js"
import { connectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import userRouterr from "./routes/report.js"
import cors from "cors"

 const app = express();
 connectDB();
 app.use(express.json());
 app.use(cookieParser())
// ✅ Set up CORS for local and deployed frontend
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://empinvbackend.onrender.com", // backend (optional)
  "https://emp-inv-frontend1.vercel.app" ,
  "https://emp-inv-frontend2.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman) or from allowed list
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
 app.use(userRouter);
 app.use(userRouterr);


app.get("/",(req,res)=>{
    res.send("working")
})


app.listen(5000,()=>{
    console.log(`server is working on port : 5000 `)
})