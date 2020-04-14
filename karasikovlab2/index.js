/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
*/

const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todosRoutes = require('./routes/todos')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views','views');


app.use(todosRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://santro:war3menu@cluster0-sovxk.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(3000, () => {
            console.log("server is listening");
        });
    } catch (e) {
        console.log(e)
    }
}

start();
app.use("/api", require("./api"));



/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/