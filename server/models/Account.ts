import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const accountSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true, maxlength: 40 },
    type: { type: String, required: true, trim: true },
    initialBalance: { type: Number, default: 0, validate: Number.isInteger },
  },
  { timestamps: true },
)

accountSchema.index({ userId: 1 })

export const Account = mongoose.model('Account', accountSchema)