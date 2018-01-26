import mongoose from '../config/database';

const Schema = mongoose.Schema;

let ParkSchema = new Schema({
  name: {type: String, unique: true, required: true},
  description: {type: String, required: false},
  location: {
    city: String,
    state: String,
    country: String
  },
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date},
  deleted_at: {type: Date}
});

export default mongoose.model('Park', ParkSchema);