import mongoose from "mongoose";
const { Schema } = mongoose;

const grapeSchema = new Schema(
  {
    name: { type: String, required: true },
    origin: { type: String, required: true },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Grape = mongoose.model(`grape`, grapeSchema);
export default Grape;
