const { Router } = require('express');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  }
];

const router = new Router();

router.get('/', (req, res) => {
  res.render('index', { messages });
});

module.exports = router;