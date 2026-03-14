import mongoose from "mongoose";

const applySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    position: {
      type: String,
      required: true,
    },

    coverLetter: {
      type: String,
      required: true,
    },

    cv: {
      type: String, // store CV file URL (Cloudinary or upload path)
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model("Application", applySchema);