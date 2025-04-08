// const express = require("express");
// const app = express();
// const cors = require("cors");

// const mongoose = require("mongoose");
// const port = process.env.PORT || 5000;
// require('dotenv').config()

// // middleware
// app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:5173','https://book-app-frontend-tau.vercel.app'],
//     credentials: true
// }))
// // 'https://book-app-frontend-tau.vercel.app'
// // routes
// const bookRoutes = require('./src/books/book.route');
// const orderRoutes = require("./src/orders/order.route")
// const userRoutes =  require("./src/users/user.route")
// const adminRoutes = require("./src/stats/admin.stats")

// app.use("/api/books", bookRoutes)
// app.use("/api/orders", orderRoutes)
// app.use("/api/auth", userRoutes)
// app.use("/api/admin", adminRoutes)

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   app.use("/", (req, res) => {
//     res.send("Book Store Server is running!");
//   });
// }

// main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());

// ✅ CORS Configuration
const corsOptions = {
    origin: [
        "http://localhost:5173", 
        "http://127.0.0.1:5173",
        "https://book-app-frontend-tau.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// ✅ Routes Import
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

// ✅ API Routes
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// ✅ MongoDB Connection
async function main() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ MongoDB Connection Failed:", err);
    }
}

main();

// ✅ Root Route
app.get("/", (req, res) => {
    res.send("🚀 Book Store Server is Running!");
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});
