import mongoose from "mongoose";

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(process.env.uri || db, { useNewUrlParser: true })
      .then(() => {
        return console.log("\x1b[32m", "Successfully connected to Database", "\x1b[0m");
      })
      .catch(error => {
        console.log("Error connecting to database: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};