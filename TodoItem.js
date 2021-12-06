const mongoose = require('mongoose')

const todoItem = new mongoose.Schema({
    todo: {type: String, required: true},
    checked: {type: Boolean},
    important: {type: Boolean},
})

module.exports = mongoose.model('todoItems', todoItem)