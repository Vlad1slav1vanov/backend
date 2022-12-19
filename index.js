import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 9000;
const DB_URL = 'mongodb+srv://typlomi:72ipinip@cluster0.3nz8cjz.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use('/api', router)
app.use(fileUpload({}))

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
  }

  catch (err) {
    console.log(err)
  }
}

startApp()