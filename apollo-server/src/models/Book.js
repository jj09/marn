import mongoose from 'mongoose';

export const Book = mongoose.model('Book', {title: String, year: Number});