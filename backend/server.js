// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

const cors = require('cors')

// Setup our Express app
const app = express()

const PORT = 8080 

// Load the connectDB function
const connectDB = require('./config/db')

// Connect to database
connectDB()

const postRoutes = require('./routes/postRoutes')
// const commentRoutes = require('./routes/commentRoutes')
// const authRoutes = require('./routes/authRoutes')
// const userRoutes = require('./routes/userRoutes')


//middleware not set up yet
// const { authorize } = require('./middleware/authMiddleware')

app.use(express.json())
app.use(cors())


//POST ROUTES SET UP
app.use('/posts', postRoutes)

//NEXT ROUTE TO SET UP 30032023 - USERS
// app.use('/users', userRoutes)


// app.use('/auth', authRoutes)

/*
create/post
read/get
update/put
delete/delete
*/


app.get('/posts', (req, res) => {
    res.send('app.get /posts working')
})

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})