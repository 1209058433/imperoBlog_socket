# imperoBlog_socket
博客的socket聊天室依旧使用了node
仓库没有上传ssl证书，拉取代码记得下载ssl证书并放入项目目录
修改index.js的ssl配置
```
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname,'/ssl/impero.top.key'), 'utf-8'),  // 修改为证书目录
    cert: fs.readFileSync(path.join(__dirname,'/ssl//impero.top_bundle.pem'), 'utf-8')  // 修改为证书目录
}
```
执行`yarn`命令下载node_modules
