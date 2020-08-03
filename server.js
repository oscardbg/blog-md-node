const express = require('express');
const articleRouter = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [
        {
            title: 'Mern tutorial without the r of React',
            date: Date.now(),
            description: 'Webdev Simplyfied node and mongo tutorial'
        }
    ];
    res.render('index', {articles});
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));