import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connecting to Mongodb Database: ${connect.connection.host}`);

  } catch (error) {
    console.log(`Error in Mongodb: ${error}`)
  }
}


export default connectDB;
