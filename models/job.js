import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobtitle: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },

    joblocation: {
      type: String,
      required: [true, "Job location is required"],
      trim: true,
    },

    jobtype: {
      type: String,
      required: [true, "Job type is required"],
        trim: true,
    },

    jobdescription: {
      type: String,
      required: [true, "Job description is required"],
    },

    // Optional (recommended)
    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
      required: true,        // ← add this
  trim: true,
    },

    postedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

// Prevent model overwrite error in Next.js
export default mongoose.models.Job || mongoose.model("Job", jobSchema);