const express = require("express");
const router = express.Router();

const session = require("express-session");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session")

router.get("/cookie", function (req, res, next) {
  req.session.views = (req.session.views || 0) + 1;
  res.end(req.session.views + " views");
});
router.get("/session", function (req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  } else {
    req.session.views = 1;
    res.end("welcome to the session demo. refresh!");
  }
});
router.get("/setcookie", function (req, res) {
  res.cookie("username", "john doe", { maxAge: 900000, httpOnly: true });
  return res.send("Cookie has been set");
});
router.get("/getcookie", function (req, res) {
  var username = req.cookies;
  if (username) {
    return res.send(username);
  }
  return res.send("No cookie found");
});

module.exports = router;
