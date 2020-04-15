var express = require('express');
var router = express.Router();
var Models = require('./../models/mongoModels');
/* GET users listing. */
router.post('/', function(req, res, next) {
  let state = req.body.state;
  Models.User.findOneAndUpdate({_id: state._id ? state._id : new mongoose.Types.ObjectId() },
      {
        ...state
      }, {upsert: true}, function(err, doc) {
      console.log(err)
      if (err){
        console.log(err)
        return res.send(500, {error: err});
      }
      return res.send('Succesfully saved.');
    } )
});
router.post('/list', function(req, res, next) {
  var query = Models.User.find({});
    query.lean(true);
    query.exec(function (err, persons) {
      if (err){
        console.log(err)
        return res.send(500, {error: err});
      }
      console.log(persons, 'person, line 10');
      res.send({'Clients':person})
    });
});

module.exports = router;
