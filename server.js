//////////////////////////// Edit Here /////////////////////////////////////////
api_token = 'YOUR_API_TOKEN' // Your API Token
canary_url = 'https://app.mightycanary.com/api/v1/canaries/CANARY_UID/show' // Your Canary URL
sentry_url = 'https://app.mightycanary.com/api/v1/sentries/SENTRY_UID' // Your Sentry URL
////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const superagent = require('superagent');
const app = express();
const path = require('path');

const server = app.listen(3000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});


app.engine('html', require('ejs').renderFile);

function update_sentry(sentry, token, params) {
  console.log(`Sending data ← ${JSON.stringify(params)}`);
  return new Promise((resolve,reject) => {
    superagent.put(sentry)
    .set('Authorization', 'Bearer ' + token)
    .query(params)
    .end((err, res) => {
      if (err) { reject(err); }
      resolve(res.body);
    })});
}

app.get('/', (req, res) => {
  res.render(__dirname+'/views/index.html', { canary_url: canary_url });
});

app.get('/happy', (req, res) => {
  // set the Sentry state to happy
  update_sentry(sentry_url, api_token, { state: 'happy' }).then(function(rv) {
    console.log(`Received response → ${rv["name"]} → ${rv["state"]}`);
  });
  res.status(200);
});

app.get('/sick', (req, res) => {
  // set the Sentry state to sick
  update_sentry(sentry_url, api_token, { state: 'sick' }).then(function(rv) {
    console.log(`Received response → ${rv["name"]} → ${rv["state"]}`);
  });
  res.status(200);
});
