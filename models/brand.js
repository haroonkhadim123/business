import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brandname: {
      type: String,
      required: [true, "Brand name is required"],
      trim: true,
      minlength: [2, "Brand name must be at least 2 characters"],
    },

    website: {
      type: String,
      required: [true, "Website URL is required"],
      trim: true,
      match: [
        /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/,
        "Please enter a valid URL",
      ],
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters"],
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.models.Brand ||
  mongoose.model("Brand", brandSchema);