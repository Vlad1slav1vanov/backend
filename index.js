import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 9000;
const DB_URL = 'mongodb+srv://typlomi:<password>p@cluster0.3nz8cjz.mongodb.net/?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

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
