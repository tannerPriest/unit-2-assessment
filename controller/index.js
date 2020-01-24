const todo = require('../todo')

const index = (req, res) => {
        res.render('index', { title: 'To-Do List', todo });
}
const post = (req, res) => {
    todo.push({todo: `${req.body.todo}`, done: false})
    res.redirect('/')
}
module.exports = {
    index,
    post
}