// Router (điều hướng URL kết nối với controller)

const express = require('express');
const userRouter = express.Router();


userRouter.get('/', async (req, res) => {
    return 'Chức năng controller'(req, res);
});


module.exports = userRouter;