import express from 'express'
import testController from "../controllers/testController"

let router = express.Router();

const initTestRoute = (app) => {
    router.get('/', testController.test)

    return app.use('/', router)
}

export default initTestRoute