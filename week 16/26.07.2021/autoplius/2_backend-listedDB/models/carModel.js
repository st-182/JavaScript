import mongoose from 'mongoose';
const { Schema } = mongoose;

const carSchema = new Schema({
  user_Id: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Car = mongoose.model('car', carSchema);
export default Car;
