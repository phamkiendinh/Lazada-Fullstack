import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'

// configure env
dotenv.config()


//database config
connectDB();


// rest object
const app = express()


// middlewares
app.use(express.json())
app.use(morgan('dev'))                      // tham số 'dev' cho biết cho morgan sử dụng định dạng ghi log "development" (phát triển). Trong định dạng này, các thông tin về yêu cầu sẽ được hiển thị dưới dạng một chuỗi dễ đọc và tương đối ngắn.


// rest api
app.get('/api', (req, res) => {
  res.send('<h1>Welcome to HTML</h1>')
})

// PORT
const port = process.env.PORT || 3500

app.listen(port, () => {
  console.log(`Server listening on ${process.env.DEV_MODE} port ${port}`)
})
