import mongoose from "mongoose";

const connectDB = async (MONGODB_URI) => {
  try {
    mongoose.connection.on("connected", () =>
      console.log(`✅ Database connected successfully`)
    );
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
