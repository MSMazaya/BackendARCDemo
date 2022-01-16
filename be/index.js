var express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
var app = express()

const user = []

app.use(bodyParser.json());
app.use(cors())
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
})

app.get('/', function(req, res) {
  res.json(user);
})

app.get('/:id', function(req, res) {
  const { id } = req.params;
  res.json(user[id - 1]);
})

app.post('/', (req, res) => {
  const { body } = req;

  if (body?.name && body?.jurusan) {
    user.push({
      name: body.name,
      jurusan: body.jurusan
    })
    res.status(200).send()
  }
  res.status(400).send()

})

app.put('/:index', (req, res) => {
  const { index } = req.params;
  const { body } = req;

  if (body?.name && body?.jurusan) {
    const { name, jurusan } = body;
    user[index - 1] = {
      name,
      jurusan
    }
    res.status(200).send()
  }

  res.status(400).send()
})

app.delete('/:index', (req, res) => {
  const { index } = req.params;

  // masih salah
  user.filter((_, id) => id !== Number(index) - 1)

  res.status(200).send()
})


app.listen(8080, () => {
  console.log("Berhasil bikin backend app di 8080");
})
