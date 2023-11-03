import mongoose from "@/lib/mongodb";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    telNo: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);
