import express from "express";

const app = express();
app.use(express.json());

const admin = require('firebase-admin');
const serviceAccount = require("../appcall-95336-firebase-adminsdk-gldkk-030fd64d39.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://appcall-95336-default-rtdb.firebaseio.com"
});

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Working!");
});

app.post("/sendNotification", (req, res) => {
  console.log(req.body)
  const message = {
    notification: {
      title: 'A Call Incoming!',
      body: req.body.message
    },
    token: req.body.token,
  }
  
  admin.messaging().send(message).then(() => {
    console.log('Sent Notification')
    res.send("Working!");
  }).catch(err => {
    console.log(err)
  })
})

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});