import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },

    contactPerson: {
      type: String,
      required: [true, "Contact person is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please enter a valid email"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
      enum: ["Zylliq"],
    },

    businessType: {
      type: String,
      required: [true, "Business type is required"],
      enum: [
        "distributor",
        "wholesaler",
        "retail",
        "supermarket",
        "electronics",
        "chain",
        "dealer",
        "other",
      ],
    },

    branches: {
      type: Number,
      required: [true, "Number of branches is required"],
      min: 0,
    },

    website: {
      type: String,
      required: [true, "Website or social link is required"],
      trim: true,
    },

    partnershipType: {
      type: String,
      required: [true, "Partnership type is required"],
      enum: ["Wholesale", "Dealership", "Offline Store Shelves"],
    },

    introduction: {
      type: String,
      required: [true, "Business introduction is required"],
      trim: true,
    },

    isConfirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Partner ||
  mongoose.model("Partner", partnerSchema);