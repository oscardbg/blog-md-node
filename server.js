const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/index', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => console.log('Listening on port ' + PORT));