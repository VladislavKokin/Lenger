import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
        unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: 'Invalid email',
        }
	},
	password: {
		type: String,
		required: true
	},
	settings: {
      theme: { type: String, enum: ['dark', 'light'], default: 'dark' },
    },
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);