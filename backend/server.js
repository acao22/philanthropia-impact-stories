const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const storiesRoutes = require('./routes/stories');

const app = express();
app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/impactStories'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(storiesRoutes);

app.get('/', (req, res) => {
    res.send('This is the Impact Stories API');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
