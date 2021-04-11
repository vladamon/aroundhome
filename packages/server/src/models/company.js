import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const CompanySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    time_slots: [Object]
  },
  {
      collection: 'companies',
  }
)

CompanySchema.plugin(timestamps);

CompanySchema.index({ createdAt: 1, updatedAt: 1 });

export const Company = mongoose.model('Company', CompanySchema);
export const CompanyTC = composeWithMongoose(Company);
