import mongoose, { mongo } from "mongoose";

async function connectDB(mongouri) {
    try{
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(mongouri, {
        timeoutMS: 5000,
    });

        console.log(`MongoDB connected: ${connection.connection.host}`);
        console.log(`base de donnees: ${connection.connection.name}`);
    }catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);   


    }
}

mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB deconnecter');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});