import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddStoryModal from './add-story-modal';
import '../styles/impact-stories-styles.css';

export default function ImpactStories() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [stories, setStories] = useState([
        {
            title: "i love dave ramsey",
            snippet: "he is the best podcaster ever",
            imageUrl: "...",
        },
        {
            title: "local high school donation",
            snippet: "this local high school was revamped thanks to",
            imageUrl: "...",
        },
        {
            title: "Third Example Story",
            snippet: "The third example story snippet.",
            imageUrl: "...",
        }
    ]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get('/api/stories');
                setStories(response.data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };
        fetchStories();
    }, []);

    const [newStory, setNewStory] = useState({
        title: '',
        snippet: '',
        imageUrl: '',
        organization: '',
        donor: '',
        fullStory: ''
    });

    const addNewStory = (story) => {
        setStories((prevStories) => [...prevStories, story]);
        setModalIsOpen(false);
        setRenderKey((prevKey) => prevKey + 1); // Force re-render
    };

    return (
        <div className="container">
            <h1 className="title">Impact Stories</h1>
            <p className="description">
                Every donation has a story -– Discover the narratives of change!
            </p>
            <div className="button-container">
                <button className="cube-button" onClick={() => setModalIsOpen(true)}>
                    <span>click here!</span>
                    <span>tell your story</span>
                </button>
            </div>
            <div className="stories-container">
                {stories.map((story) => (
                    <div className="story-card box" key={story._id}>
                        <img className="story-image" src={story.imageUrl} alt={story.title} />
                        <h2 className="story-title">{story.title}</h2>
                        <p className="story-snippet">{story.snippet}</p>
                    </div>
                ))}
            </div>

            <AddStoryModal
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                newStory={newStory}
                setNewStory={setNewStory}
                addNewStory={addNewStory}
            />
        </div>
    );
}
