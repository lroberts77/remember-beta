import express from 'express';
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);

// http://localhost:5000/posts

export default router;