const express = require('express');
const fetch = require('node-fetch');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.get("/fetch", async function(req,res){
  res.json({
      message: await fetch('https://github.com/').then(res => {
          return res.ok
      })
  });
});

app.listen(8081, () => {
  console.log('app listening on port 8081');
});
