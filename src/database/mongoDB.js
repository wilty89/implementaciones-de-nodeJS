const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbMongo =
  process.env.MONGODB_URI ||
  `mongodb://localhost:27017/users`;
mongoose
  .connect(dbMongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connect to db ");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports={
  mongoose
}