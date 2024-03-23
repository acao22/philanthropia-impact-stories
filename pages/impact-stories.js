import { Container } from 'postcss';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import './styles/impact-stories-styles.css';

export default function ImpactStories() {
    const stories = [
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
            imageUrl: "...", // Replace with the actual image path
        }
    ];

    return (
        <div className="container">
            <h1 className="title">Impact Stories</h1>
            <p className="description">
                Every Donation Has a Story – Discover the Narratives of Change.
            </p>
            <div className="stories-container">
                {stories.map((story, index) => (
                    <div className="story-card box" key={`story-${index}`}>
                        <img className="story-image" src={story.imageUrl} alt={story.title} />
                        <h2 className="story-title">{story.title}</h2>
                        <p className="story-snippet">{story.snippet}</p>
                    </div>
                ))}
                {stories.map((story, index) => (
                    <div className="story-card box" key={`story-${index}`}>
                        <img className="story-image" src={story.imageUrl} alt={story.title} />
                        <h2 className="story-title">{story.title}</h2>
                        <p className="story-snippet">{story.snippet}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
