import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    // Basic Information
    jobtitle: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
    },
    
 

    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      default: "Our Company",
    },

    department: {
      type: String,
      trim: true,
      enum: ["Engineering", "Sales", "Marketing", "HR", "Finance", "Operations", "Design", "Product", "Other"],
    },

    location: {
      type: String,
      required: [true, "Job location is required"],
      trim: true,
    },
    
    joblocation: {
      type: String,
      trim: true,
    },

    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Temporary", "Freelance"],
      required: [true, "Employment type is required"],
    },

    jobtype: {
      type: String,
      trim: true,
    },

    workplaceType: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
      required: [true, "Workplace type is required"],
    },

    salary: {
      type: {
        min: Number,
        max: Number,
        currency: {
          type: String,
          default: "USD",
        },
        period: {
          type: String,
          enum: ["hour", "day", "week", "month", "year"],
          default: "year",
        },
      },
    },

    experience: {
      type: String,
    },

    postedDate: {
      type: Date,
      default: Date.now,
    },
    
    postedAt: {
      type: Date,
      default: Date.now,
    },

    applicationDeadline: {
      type: Date,
      required: [true, "Application deadline is required"],
    },

    aboutCompany: {
      type: String,
      trim: true,
    },

    jobSummary: {
      type: String,
      required: [true, "Job summary is required"],
      trim: true,
    },

    jobdescription: {
      type: String,
      trim: true,
    },

    aboutRole: {
      type: String,
      trim: true,
    },

    keyResponsibilities: {
      type: [String],
    },

    requiredQualifications: {
      type: [String],
      required: [true, "At least one required qualification is needed"],
    },

    preferredQualifications: {
      type: [String],
    },


    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

jobSchema.methods.checkAndUpdateStatus = function() {
  if (this.applicationDeadline && new Date() > this.applicationDeadline && this.status === "Open") {
    this.status = "Closed";
    return true;
  }
  return false;
};


export default mongoose.models.Job || mongoose.model("Job", jobSchema);