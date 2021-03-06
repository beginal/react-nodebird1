const express = require('express');
const db = require('../models');
const path = require('path')
const { isLoggedIn } = require('./middleware');
const multer = require('multer')

const router = express.Router();

const upload = multer({
  storage:  multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'uploads');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname)
      const basename = path.basename(file.originalname, ext);
      cb(null, basename + new Date().valueOf() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024},
})

router.post('/', isLoggedIn, upload.none(), async (req, res, next) => { // POST /api/post
  try {
    const hashtags = req.body.content.match(/#[^\s]+/g);
    const newPost = await db.Post.create({
      content: req.body.content, // ex) '제로초 파이팅 #구독 #좋아요 눌러주세요'
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where: { name: tag.slice(1).toLowerCase() },
      })));
      console.log(result);
      await newPost.addHashtags(result.map(r => r[0]));
    }
    // const User = await newPost.getUser();
    // newPost.User = User;
    // res.json(newPost);
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
      }],
    });
    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});


router.post('/images', upload.array('image'),(req, res) => {
  console.log(req.filse);
  res.json(req.files.map(v => v.filename))
});

router.get('/:id/comments', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
    if(!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    const comments = await db.Comment.findAll({
      where: {
        PostId: req.params.id,
      },
      order: [['createdAt', 'ASC']],
      include: [{
        model : db.User,
        attributes: [ 'id', 'nickname'],
      }],
    })
    return res.json(comments)
  } catch (e) {
    console.error(e);
    return next(e);
  }
})

router.post('/:id/comment', isLoggedIn, async (req, res, next) => { // POST /api/post/100/comment
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
if (!post) {
  return res.status(404).send('포스트가 존재하지 않습니다.')
}
  const newComment = await db.Comment.create({
    PostId: post.id,
    UserId: req.user.id,
    content: req.body.content,
  })
  await post.addComment(newComment.id);
  const comment = await db.Comment.findOne({
    where: {
      id: newComment.id,
    },
    include: [{
      model: db.User,
      attributes: ['id', 'nickname'],
    }],
  });
  return res.json(comment);
  } catch (e) {
  console.error(e);
  return next(e);
}
})

module.exports = router;