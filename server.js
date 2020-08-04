const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Article = require('./models/article');
const articleRouter = require('./routes/articles');
const router = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost/blogdb', { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/articles', articleRouter);

app.get('/', async (req, res) => {
    //Method 1
    /* Article.find({}, (err, data) => {
        if(err) throw err;
        res.render('articles/index', { articles: data });
    }); */
    
    //Method 2, needs await async to work
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articles/index', {articles});
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));