const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then((courses) => {

                res.render('home', {
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch((error) => {
                next(error);
            })
    }
    search(req, res) {
        res.render('search');
    }
};

module.exports = new SiteController;