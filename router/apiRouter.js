const express = require('express');
const userRouter = require('./user');
const productRouter = require('./product');
const testRouter = require('./test');
const emailRouter = require('./email');
const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/product", productRouter);
apiRouter.use("/test", testRouter)

module.exports = apiRouter;