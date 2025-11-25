import express from 'express';
import dotnev from 'dotenv';
dotnev.config();
import cors from 'cors';
import router from './routes/send-mail-route.js';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

// route
app.use('/api/v2', router)

app.get('/', (req, res) => {
    return res.status(200).json({
        msg: "this is home route"
    })
});


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})