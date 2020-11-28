import monogoose, { Mongoose } from 'mongoose';

const postSchema = monogoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;