const express = require('express');
const mongoose = require('mongoose');
const Story = require('./models/Story');


const cors = require('cors');
app.use(cors());

const app = express();
app.use(express.json());





const mongoURI = 'mongodb://localhost:27017/impactStories'; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json()); 

// Get all stories
app.get('/api/stories', async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/', (req, res) => {
    res.send('this is the impact stories api');
});

// Add a new story
app.post('/api/stories', async (req, res) => {
    try {
        const newStory = new Story(req.body);
        const savedStory = await newStory.save();
        console.log(savedStory);
        res.status(201).json(savedStory);
        console.log('Saved story:', savedStory);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

