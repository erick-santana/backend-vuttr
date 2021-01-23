import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGODB_URI || '';

export const connectToDatabase = async () => {
	mongoose.connect(mongoUrl, { useNewUrlParser: true })
		.then(() => {
			console.log('Mongo connected!');
		})
		.catch(err => {
			console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
		}
		);
};
