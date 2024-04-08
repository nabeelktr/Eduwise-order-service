import mongoose, { Model, Schema } from "mongoose";
import "dotenv/config";
import { Course } from "../course.entities";

const CourseSchema: Schema<Course> = new Schema(
  {
    instructorId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    estimatedPrice: { type: String, required: true },
    tags: { type: String, required: true },
    level: { type: String, required: true },
    demoUrl: { type: String, required: true },
    subtitleUrl: { type: String },
    totalVideos: { type: String, required: true },
    benefits: [{ title: String }],
    prerequisites: [{ title: String }],
    courseContentData: [
      {
        videoUrl: String,
        subtitleUrl: String,
        title: String,
        description: String,
        videoSection: String,
        links: [{ title: String, url: String }],
        suggestion: String,
      },
    ],
    thumbnail: {
      type: String,
    },
    reviews: [
      {
        user: String,
        rating: Number,
        comment: String,
      },
    ],
    ratings: {
      type: Number,
      default: 0,
    },
    purchased: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CourseModel: Model<Course> = mongoose.model("Course", CourseSchema);
export default CourseModel;
