const express = require('express');
const path = require('path');
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const app = express();

app.use(express.json());

//routes

//static asset
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))