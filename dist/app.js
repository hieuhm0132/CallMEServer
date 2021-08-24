"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const admin = require('firebase-admin');
const serviceAccount = require("../appcall-95336-firebase-adminsdk-gldkk-030fd64d39.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://appcall-95336-default-rtdb.firebaseio.com"
});
const port = 3000;
const message = {
    notification: {
        title: 'Call Incoming!',
        body: 'An User calling you'
    },
    token: 'dy0WgDcYQSmmLFDneQ52WB:APA91bFzsyWcA8ece6eRfeiTuegJyleFri9lS91F2wakS4SgMzFhpbw3RMu1wE0_1G4QBPJStbqEX1BOdA_7dicH5_C2MMwxqNL1f7OONOkgBRob0PrHqrdR2AVJD6nFXsCfq2x2VIiS'
};
admin.messaging().send(message).then(res => {
    console.log('Sended Noti', res);
}).catch(err => {
    console.log(err);
});
app.get("/", (req, res) => {
    res.send("The sedulous hyena ate the antelope!");
});
app.post("/sendNotification", (req, res) => {
    res.send("Working!");
});
app.listen(port => {
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map