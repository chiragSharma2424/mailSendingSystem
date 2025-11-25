import express from 'express';
import dotnev from 'dotenv';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    return res.status(200).json({
        msg: "this is home route"
    })
});


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})