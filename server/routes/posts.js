import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/', createPosts);

// http://localhost:5000/posts

export default router;