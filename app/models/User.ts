import mongoose from "mongoose";

interface User {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      match: /^[\w\.-]+@([\w-]+\.)+[\w-]{2,}$/,
    },
    password: {
      type: String,
      require: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
