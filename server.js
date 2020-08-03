const express = require('express');
const articleRouter = require('./routes/articles');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));