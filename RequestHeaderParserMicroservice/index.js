const express = require("express");
const app = express();
const cors = require("cors")();

app.use(cors)
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendfile("/public/index.html");
})

app.get('/api/whoami', (req, res) => {
  const requesterData = req.rawHeaders;
  res.json({
    "ipaddress": requesterData[27],
    "language": requesterData[9],
    "software": requesterData[3]
  });
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
