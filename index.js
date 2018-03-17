const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-ouath20').Strategy;

passport.use(new GoogleStrategy());

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
