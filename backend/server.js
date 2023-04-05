require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//import routs
const statisticsRouts = require("./routes/statistics");
const servicesRouts = require("./routes/services");
const reserveRouts = require("./routes/reserve");
const contactRouts = require("./routes/contact");
const faqsRouts = require("./routes/faqs");
const blogsRouts = require("./routes/blogs");
const adminRouts = require("./routes/admin");

const PORT = process.env.PORT || 4001;
const app = express();

//middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/statistics", statisticsRouts);
app.use("/allservices", servicesRouts);
app.use("/reserve", reserveRouts);
app.use("/contact", contactRouts);
app.use("/blogs", blogsRouts);
app.use("/faqs", faqsRouts);
app.use("/admin", adminRouts);

//connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "Connected with database & The server was up in PORT : " + PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
