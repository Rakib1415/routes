
const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('I am a login page.');
});
router.get('/logout', (req, res) => {
    res.send('I am a logOut page.');
});
router.get('/signup', (req, res) => {
    res.send('I am a signUp page.');
});

module.exports = router;
