var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET Questions. */
router.get('/quizes/question', quizController.question);

/* GET Answers. */
router.get('/quizes/answer', quizController.answer);

/*GET Author*/
router.get('/author', quizController.author);

module.exports = router;
