const express = require('express');
const articleRouter = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Mern tutorial without the r of React',
            createdAt: new Date(),
            description: 'Webdev Simplyfied node and mongo tutorial'
        },
        {
            title: 'Angular Js',
            createdAt: new Date(),
            description: 'Webdev Simplyfied angular tutorial'
        }
    ];
    res.render('articles/index', {articles});
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));