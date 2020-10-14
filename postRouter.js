
const router = require('express').Router();

const {
    getAllPost,
    singlePost,
    createPost,
    updatePost,
    deletePost

} = require('./postController');

// get all posts POST
router.get('/', getAllPost);

router.get('/:postId', singlePost);

router.post('/', createPost);
router.put('/:postId', updatePost);

router.delete('/:postId', deletePost);

module.exports = router;