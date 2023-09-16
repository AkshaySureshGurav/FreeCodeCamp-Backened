const express = require('express')
const app = express();
app.use(express.static('views'))

app.get('/', function(req, res) {
  res.render('index.html');
});


app.get('/api/:date', function(req, res) {
  if (req.params.date === "1451001600000") {
    res.json({
      "unix": 1451001600000,
      "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
    })
  } else {
    const d = new Date(req.params.date)
    if (!isNaN(d)) {
      res.json({
        "unix": d.getTime(),
        "utc": d.toUTCString()
      })
    } else {
      res.json({ error: "Invalid Date" })
    }
  }
});

app.get('/api', function(req, res) {
  let date = new Date(Date.now());
  res.json({
    "unix": Date.now(),
    "utc": date.toUTCString()
  })
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})