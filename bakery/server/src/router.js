const router = require('express').Router();

const auth = require('./router/userRouter');
const catalog = require('./router/catalogRouter');
const comment = require('./router/commentRouter');
const searchParams = require('./router/searchRouter');

router.use('/user', auth);
router.use('/catalog', catalog);
router.use('/comment', comment);
router.use('/search', searchParams)

router.get('/', (req, res) => {
    res.send(`<h3>You Shall Not Pass!!!</h3>
    <br>
    <div><h3>Welcome to the API. This is the server.</h3></div>
    <div><h3>Please use the front-end application at http://localhost:4200</h3></div>`
    );
 });
 
 router.get('*', (req, res) => {
    res.status(404).send(`
    <div><h3>The requested resource could not be found on this server.</h3></div>
    <div><h3>Please use the front-end application at http://localhost:4200</h3></div>`);
 });




module.exports = router;