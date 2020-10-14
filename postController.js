exports.getAllPost = (req, res)=>{
    // console.log(req.query);
    const {category, page, filter} = req.query;
    res.send('all posts here');
};

exports.singlePost = (req, res)=>{
    res.send('I am post = '+ req.params.postId);
};

exports.createPost = (req, res)=>{
    res.send('create post')
};

exports.updatePost = (req, res)=>{
    res.send('post update here = '+ req.params.postId)
};

exports.deletePost = (req, res)=>{
    res.send('post delete here = '+ req.params.postId)
};