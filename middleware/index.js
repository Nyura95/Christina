const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function private(req, res, next) {
  if (!req.headers.authorization) {
    return res.send({ error: 'security!' });
  }
  next();
}

app.get('/public', (req, res) => {
  res.send({ hello: 'world!' });
});

app.get('/private', private, (req, res) => {
  res.send({ hello: 'world!' });
});

app.listen(3000, () => {
  console.info(`API Listening on *:3000`);
});
