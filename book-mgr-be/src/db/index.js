require('./Schemas/User')
const mongoose = require('mongoose')

//1. 给哪个数据库的
//哪个集合
//添加什么格式的文档

//Schema 映射了MongoDB下的一个集合，并且他的内容就是集合下文档的构成
//Model 可以理解成根据Schema生成的一套方法集合，这套方法用来操作MongoDB下的集合和集合下的文档

const connect = () => {
  //去链接数据库
  return new Promise((resolve) => {
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr')
    //当数据库被打开的时候做一些事情
    mongoose.connection.on('open', () => {
      console.log(`链接数据库成功`)
      resolve()
    })
  })
}

module.exports = {
  connect,
}
