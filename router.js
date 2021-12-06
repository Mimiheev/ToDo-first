const Express = require('express')
const Controller = require('./Controller')

const router = Express.Router()

router.get('/todoItem', Controller.getAll)
router.post('/todoItem', Controller.create)
router.patch('/changeChecked',Controller.changeChecked)
router.patch('/changeImportant',Controller.changeImportant)
router.delete('/todoItem', Controller.delete)

module.exports = router