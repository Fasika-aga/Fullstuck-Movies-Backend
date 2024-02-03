import './loadEnv.js';
import express from 'express';
import cors from 'cors';
import morgan from'morgan';
import moviesRouter from './routes/movies.js';
import usersRouter from './routes/users.js'

// console.log(process.env.ATLAS_URI);
const app = express()
const PORT = process.env.PORT || 4000;



// middlewares
app.use(cors());
app.use(morgan('dev')); // logger
app.use(express.json()); // for data in req.body
app.use(express.urlencoded({extended: true})); // allow data in url starting

//Routes
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
    res.send('backend...')
});


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});