const Router = require('@koa/router')
const mongoose = require('mongoose')
const config = require('../../project.config')
const { getBody } = require('../../helpers/utils')
const { loadExcel, getFirstSheet } = require('../../helpers/excel')

const BOOK_CONST = {
  IN: 'IN_COUNT',
  OUT: 'OUT_COUNT',
}

const Book = mongoose.model('Book')
const InventoryLog = mongoose.model('InventoryLog')
const BookClassify = mongoose.model('BookClassify')
const findBookOne = async (id) => {
  const one = await Book.findOne({
    _id: id,
  }).exec()
  return one
}

const router = new Router({
  prefix: '/book',
})

router.post('/add', async (ctx) => {
  const { name, price, author, publishDate, classify, count } = getBody(ctx)

  const book = new Book({
    name,
    price,
    author,
    publishDate,
    classify,
    count,
  })

  const res = await book.save()

  ctx.body = {
    data: res,
    code: 1,
    msg: '添加成功',
  }
})

router.get('/list', async (ctx) => {
  //https://aa.cc.com/user/page=2&size=20&keyword=书名#fdsafd
  const { page = 1, keyword = '' } = ctx.query
  let { size = 10 } = ctx.query
  size = Number(size)
  //2 20
  //20 20
  // (page-1) * size
  const query = {}
  if (keyword) {
    query.name = keyword
  }
  const list = await Book.find(query)
    .sort({
      _id: -1,
    })
    .skip((page - 1) * size)
    .limit(size)
    .exec()
  const total = await Book.countDocuments()
  ctx.body = {
    data: {
      total,
      list,
      page,
      size,
    },
    code: 1,
    msg: '获取列表成功',
  }
})

router.delete('/:id', async (ctx) => {
  const { id } = ctx.params
  const delMsg = await Book.deleteOne({
    _id: id,
  })

  ctx.body = {
    data: delMsg,
    msg: '删除成功',
    code: 1,
  }
})
router.post('/update/count', async (ctx) => {
  const { id, type } = ctx.request.body
  let { num } = ctx.request.body
  num = Number(num)
  const book = await findBookOne(id)

  if (!book) {
    ctx.body = {
      code: 0,
      msg: '没有找到书籍',
    }
  }
  // 如果找到了书
  if (type === BOOK_CONST.IN) {
    // 入库
    num = Math.abs(num)
  } else {
    // 出库
    num = -Math.abs(num)
  }

  book.count = book.count + num
  if (book.count < 0) {
    ctx.body = {
      code: 0,
      msg: '剩下的量不足以出库',
    }
    return
  }

  const res = await book.save()
  const log = new InventoryLog({
    num: Math.abs(num),
    type,
  })
  log.save()
  ctx.body = {
    data: res,
    code: 1,
    msg: '操作成功',
  }
})
router.post('/update', async (ctx) => {
  const {
    id,
    // name,
    // price,
    // author,
    // publishDate,
    // classify
    ...others
  } = ctx.request.body

  const one = await findBookOne(id)

  if (!one) {
    ctx.body = {
      msg: '没有找到书籍',
      code: 0,
    }
    return
  }
  //找到了书
  const newQuery = {}
  Object.entries(others).forEach(([key, value]) => {
    if (value) {
      newQuery[key] = value
    }
  })
  Object.assign(one, newQuery)

  const res = await one.save()

  ctx.body = {
    data: res,
    code: 1,
    msg: '保存成功',
  }
})

router.get('/detail/:id', async (ctx) => {
  const { id } = ctx.params

  const one = await findBookOne(id)

  if (!one) {
    ctx.body = {
      msg: '没有找到书籍',
      code: 0,
    }

    return
  }
  ctx.body = {
    msg: '查询成功',
    data: one,
    code: 1,
  }
})

router.post('/addmany', async (ctx) => {
  const { key = '' } = ctx.request.body

  const path = `${config.UPLOAD_DIR}/${key}`
  console.log(key)
  if (!key) {
    ctx.body = {
      msg: '上传失败',
      code: 0,
    }
    return
  }
  const excel = loadExcel(path)

  const sheet = getFirstSheet(excel)
  // loadExcel, getFirstSheet
  const arr = []

  for (let i = 0; i < sheet.length; i++) {
    let record = sheet[i]
    const [name, price, author, publishDate, classify, count] = record
    let classifyId = classify
    const one = await BookClassify.findOne({ title: classify })
    if (one) {
      classifyId = one._id
    }
      arr.push({
        name,
        price,
        author,
        publishDate,
        classify: classifyId,
        count,
      })
    }
  await Book.insertMany(arr)

  ctx.body = {
    code: 1,
    msg: '添加成功',
    data: {
      addCount:arr.length
    }
  }
})
module.exports = router
