const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    snippet: String,
    imageUrl: String,
    organization: String,
    donor: String,
    fullStory: String,
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
