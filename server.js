const express = require('express')
const dotenv = require('dotenv')
const { connectDB } = require('./src/db')
const path = require('path')
const setupRoutes = require('./src/routes')
const { User, Post, Submission } = require('./src/models')

dotenv.config()
connectDB()

const app = express()
setupRoutes(app)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/public/images', express.static('./public/images'))


app.set('view engine', 'ejs');
app.set('views', './src/templates/views')



// app.get("/", (req, res) => {
//     res.render('dashboard')
// })
// app.get("/login", (req, res) => {
//     res.render('login')
// })
// app.get("/profile", (req, res) => {
//     res.render('profile')
// })
// app.get("/register", (req, res) => {
//     res.render('register')
// })
// app.get("/user", (req, res) => {
//     res.render('user')
// })









app.listen(process.env.PORT, () => {
    console.log(`Express is running on port ${process.env.PORT}...`)
})