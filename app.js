const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const gamesRoutes = require('./routes/gamesRoutes');
const newsRoutes = require('./routes/newsRoutes');
const adminRoutes = require('./routes/adminRoutes');
const homeRoutes = require('./routes/homeRoutes.js')
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { requireAuth, checkUser, requireRole} = require('./middleware/authMiddleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get('*', checkUser);
app.get('/', homeRoutes);
app.use('/games', requireAuth, gamesRoutes);
app.use('/news', requireAuth, newsRoutes);
app.use('/admin', requireAuth, requireRole('admin'), adminRoutes);
app.use(authRoutes);