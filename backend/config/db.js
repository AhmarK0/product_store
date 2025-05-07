import mongoose from "mongoose";

// we use async to not let the program freez
// becuase it is fetching data from the internet
// it is an asynchronous func
// so it will wait until it is done
// while the other functions will run as follows

// why export becuase You're making this function available to other files.
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // await means to wait until the function is either successful or fails and the result is stored in the conn
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error: " + error.message);
    process.exit(1);
  }
};
