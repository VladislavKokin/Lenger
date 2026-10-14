import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const operationSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: 'User', required: true },
    accountId: { type: ObjectId, ref: 'Account', required: true },
    categoryId: { type: ObjectId, ref: 'Category', required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    amount: { type: Number, required: true, min: 1, validate: Number.isInteger },
    date: { type: Date, required: true },
    comment: { type: String, trim: true, maxlength: 200, default: '' },
  }, { timestamps: true }
);

operationSchema.index({ userId: 1, date: -1, _id: -1 });
operationSchema.index({ userId: 1, accountId: 1, date: -1 });
operationSchema.index({ userId: 1, categoryId: 1, date: -1 });

export const Operation = mongoose.model('Operation', operationSchema);