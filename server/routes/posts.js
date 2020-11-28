import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("THIS WORKS!");
});

// http://localhost:5000/posts

export default router;