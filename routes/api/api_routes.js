const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//BodyParser basics.
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//Get Models.
const db = require('../../models/main');

//Handle /search request.
router.get('/search', (req, res) => {
  res.send('Are you getting me??');
});

const op = db.Sequelize.Op;

//handle Signup Events.
router.post('/signup', (req, res) => {
  db.user
    .create({
      userId:req.body.userName + req.body.password,
      gender: req.body.gender,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      Date_of_birth: req.body.date_of_birth
    })
  .then((resdata) => {
     db.login
         .create({
           userId:req.body.userName + req.body.password,
           userName:req.body.userName,
           password:req.body.password
         })
         .then((response) => {
           res.send('completed');
         });
  });
});

//Handle Login Events.
router.post('/login', (req, res) => {
  db.login.findOne({
    where: {
      [op.and]: [
        { userName: req.body.username },
        { password: req.body.password }
      ]
    }
  })
    .then((data) => {
      if (data !== null){
        res.send(data);
      }else {
        res.send(false);
      }
    });
});

//Supply User Details to Component.
router.get('/getUser', (req, res) => {
  db.user
   .findOne({
     where:{
       userId:req.query.id
     },
     include:[
      {
        model:db.login,
      }
      ,
      {
        model:db.blog
      }
    ]
  })
   .then((resdata)=>{
      const response = resdata.dataValues;
      console.log(response.blogs);
      const resObj = {
        userId:response.login.userId,
        userName:response.login.userName,
        blogs:response.blogs,
        first_name:response.first_name,
        last_name:response.last_name,
        gender:response.gender,
        createdAt:response.createdAt,
        date_of_birth:response.Date_of_birth
      }
      res.send(resObj);
   });
});

//Handle New Blogs.
router.post('/newblog', (req, res) => {
  db.blog
    .create({
      likes:0,
      views:0,
      title:req.body.title,
      body:req.body.body,
      userId:req.body.userId
    })
    .then(response => res.send(response.dataValues))
    .catch(err => console.log(err));
});

//handle Likes.
router.put('/addlikes', (req, res) => {
  if (req.body.true === true) {
    db.blog
       .update({
         likes:db.Sequelize.literal('likes + 1')
       },
      {
        where:{
          id:req.body.blogId
        }
      })
       .then( response => {
         res.send('response');
       });
  }
});

// //Return Blogs.
// router.get('/getPost', (req, res) => {
  
//   db.user
//     .findOne({
//       where:{
//         userId:req.query.userId
//       },
//       include:{
//         model:db.blog
//       }
//   })
//     .then( response => res.send(response.dataValues))
//     .catch( error => console.log(error));
// });

module.exports = router;
