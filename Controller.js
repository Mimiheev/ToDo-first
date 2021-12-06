const todoItem = require("./TodoItem");

class Controller {
    static create = async (req, res) => {
        try {
            const {todo, checked, important} = req.body
            const todoItems = await todoItem.create({todo, checked, important})
            res.status(200).json(todoItems)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static getAll = async (req, res) => {
        try {
            const todoGet = await todoItem.find()
            return res.status(200).json(todoGet)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static changeChecked = async (req, res) => {
        try {
            const checked = req.body.checked
            const id = req.body.id
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            await todoItem.findByIdAndUpdate(id, {checked: false})
            const todo = await todoItem.findById(id)
            return res.status(200).json(todo);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static changeImportant = async (req, res) => {
        try {
            const { important, id} = req.body
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            console.log( important)
            await todoItem.findByIdAndUpdate(id, {important: important})
            const todo = await todoItem.findById(id)
            return res.status(200).json(todo);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    static delete = async (req, res) => {
        try {
            const {id} = req.body
            if (!id) {
                res.status(400).json({message: 'Id не указан'})
            }
            const todoDelete = await todoItem.findByIdAndDelete(id);
            return res.status(200).json(todoDelete)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = Controller