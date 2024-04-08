const express = require('express');
const app = express();
const db = require('./db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Correct import for LocalStrategy

const bodyParser = require('body-parser');
const person = require('./models/Person'); // Adjust the path accordingly


// Middleware Function
// const logRequest = (req, res, next) => {
//   console.log(`[${new Date().toLocaleString()}] Request made to: ${req.originalUrl}`); // Correct syntax for template literals
//   next();
// }

// Configure passport to use local strategy for authentication
passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    console.log('Received credentials:', username, password);
    const user = await person.findOne({ username: username }); // Correct method name: findOne instead of finOne
    if (!user)
      return done(null, false, { message: 'Incorrect username' });

    const isPasswordMatch = user.password === password; // Correct property name: password instead of passport
    if (isPasswordMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect password' });
    }
  } catch (err) {
    return done(err);
  }
}));






// Middleware to parse JSON bodies
// app.use(bodyParser.json());



// Initialize passport middleware
app.use(passport.initialize());

// Routes
app.get('/', passport.authenticate('local',{session:false}), function (req, res) {
  res.send('Welcome to my first backend page');
});

app.get('/chicken', (req, res) => {
  res.send('Yes, I love chicken');
});

// Import routers
const personRouter = require('./router/personRouter');
const menuItemRouters = require('./router/menuItemRoutes');

app.use('/menu', menuItemRouters);
app.use('/person', personRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
