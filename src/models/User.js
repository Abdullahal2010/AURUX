import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, required: true }, // store a bcrypt hash, never a plain password
  },
  { timestamps: true }
);

// Prevents "OverwriteModelError" during Next.js hot-reload in development.
export default mongoose.models.User || mongoose.model("User", UserSchema);
