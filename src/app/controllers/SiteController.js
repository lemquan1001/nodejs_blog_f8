// controller : function handler
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');




class SiteController {
  //GET /
  home(req, res, next) {

    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses)
        });
        // res.status('Thanhcong');
      })
      // .catch((err) => {
      //   res.status(400).json({ error: 'ERROR!!!!' })
      // });
      .catch(next);
    //res.render('home');
  }

  //GET /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
