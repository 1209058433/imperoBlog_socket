import express from 'express'
import https from 'https'
import http from 'http'
import cors from "cors";
import fs from "fs";
import path from "path";
import { socketFunc } from './socket/chatServer.js';
const __dirname = path.resolve()
const app = express()
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname,'/ssl/impero.top.key'), 'utf-8'),
    cert: fs.readFileSync(path.join(__dirname,'/ssl//impero.top_bundle.pem'), 'utf-8')
}
const httpServer = http.createServer(app)
const httpsServer = https.createServer(sslOptions, app)

socketFunc(httpsServer) //socket函数
app.use(cors()) //跨域
app.use(express.urlencoded({ extended: true }))

// http服务器
httpServer.listen(3032, () => {
    console.log('http success')

})

//https服务器
httpsServer.listen(3031, () => {
    console.log('https success')
})