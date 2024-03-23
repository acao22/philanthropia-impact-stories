// import { Container } from 'postcss';
// import styled from 'styled-components';
// import { keyframes } from 'styled-components';
import React, { useState } from 'react';
import AddStoryModal from './add-story-modal';
import './styles/impact-stories-styles.css';

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

    const [newStory, setNewStory] = useState({
        title: '',
        snippet: '',
        imageUrl: '',
        organization: '',
        donor: '',
        fullStory: ''
    });

    const addNewStory = (story) => {
        setStories([...stories, story]);
        setNewStory({
            title: '',
            snippet: '',
            imageUrl: '',
            organization: '',
            donor: '',
            fullStory: ''
        });
    };

    return (
        <div className="container">
            <h1 className="title">Impact Stories</h1>
            <p className="description">
                Every donation has a story -– Discover the narratives of change!
            </p>
            <div className="button-container">
                <button className="custom-btn btn-12" onClick={() => setModalIsOpen(true)}>
                    <span>click here!</span>
                    <span>tell your story</span>
                </button>
            </div>
            <div className="stories-container">
                {stories.map((story, index) => (
                    <div className="story-card box" key={`story-${index}`}>
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
