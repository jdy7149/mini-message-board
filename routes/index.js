const { Router } = require("express");

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
  },
];

const router = new Router();

router.get("/", (req, res) => {
  res.render("index", { messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  const { user, text } = req.body;

  messages.push({ user, text, added: new Date() });

  res.redirect("/");
});

router.get("/detail/:id", (req, res) => {
  const { id } = req.params;

  res.render("detail", { ...messages[id] });
});

module.exports = router;
