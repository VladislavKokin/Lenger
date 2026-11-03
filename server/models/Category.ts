import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const categorySchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: 'User', required: true },
    name: { type: String, required: true, trim: true, maxlength: 40 },
    icon: { type: String, required: true },
    type: { type: String, enum: ['expense', 'income'], required: true },
    color: { type: String, required: true },
  },
  { timestamps: true },
)

categorySchema.index({ userId: 1, type: 1 })

export const Category = mongoose.model('Category', categorySchema)