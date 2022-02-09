const mongoose = require("mongoose");
//require("dotenv").config({ path: "../config/config.env" });
const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
