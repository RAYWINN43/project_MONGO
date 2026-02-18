// Imports
import express from 'express';
import mongoose, { version } from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 64,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 128,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    versionKey: false,
});

const UserModel = mongoose.model('User', userSchema) ;

// Export
export default UserModel ;