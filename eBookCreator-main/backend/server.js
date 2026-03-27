require("dotenv").config();
const express=require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute")
const bookRoute = require("./routes/bookRoute")
const aiRoute = require("./routes/aiRoute")
const exportRoute = require("./routes/exportRoute")

const app=express();

app.use(cors({
    origin:"*",
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:["Content-Type","Authorization"],
}));

connectDB();
app.use(express.json());
app.use("/backend/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/api/auth",authRoute)
app.use("/api/books",bookRoute)
app.use("/api/ai",aiRoute)
app.use("/api/export",exportRoute)
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));