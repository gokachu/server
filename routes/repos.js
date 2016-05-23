var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var ReposSchema = require('../models/ResposSchema');
var Repos = mongoose.model('Repos', ReposSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
    Repos.count(function(err, count) {
        res.json({
            total_repos: count
        });
    });
});
router.get('/list/:page?', function(req, res, next) {
    var page_limit = 10;
    var page = (!req.params.page) ? 0 : parseInt(req.params.page) - 1;
    var skip = page * page_limit;
    console.log(skip);
    Repos.find({}).select('title').skip(skip).limit(page_limit).exec(function(err, repos) {
        if (err) return next(err);
        res.json(repos);
    });
});
router.post('/', function(req, res, next) {
    console.log(req.body);
    var repo = new Repos(req.body);
    repo.save(function(err) {
        if (err) return res.json(err.errors);
        return res.json(repo);
    });
});

router.get('/:name', function(req, res, next) {
    Repos.findOne({
        title: req.params.name
    }, 'title author git version', function(err, repo) {
        if (err) return res.json(err.errors);
        return res.json(repo);
    });
});
module.exports = router;
