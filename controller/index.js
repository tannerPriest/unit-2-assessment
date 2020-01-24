const todo = require('../todo')

const index = (req, res) => {
        res.render('index', { title: 'To-Do List', todo });
}
const post = (req, res) => {
    todo.push({todo: `${req.body.todo}`, done: false})
    res.redirect('/')
}
const deleteTodo = async (req, res) => {
    todo.splice(req.params.id, 1)
    res.redirect('/')
}
module.exports = {
    index,
    post,
    deleteTodo
}