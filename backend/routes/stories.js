const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

// Get all stories
router.get('/stories', async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add a new story
router.post('/stories', async (req, res) => {
    try {
        const newStory = new Story(req.body);
        const savedStory = await newStory.save();
        res.status(201).json(savedStory);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
