import React from 'react';
import Modal from 'react-modal';
import '../styles/add-story-modal-styles.css';

Modal.setAppElement('#__next');

function AddStoryModal({ modalIsOpen, setModalIsOpen, newStory, setNewStory, addNewStory }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStory({ ...newStory, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewStory(newStory);
    setModalIsOpen(false);
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
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={newStory.title} onChange={handleInputChange} placeholder="Title" />
        <input type="text" name="snippet" value={newStory.snippet} onChange={handleInputChange} placeholder="Snippet" />
        <input type="text" name="imageUrl" value={newStory.imageUrl} onChange={handleInputChange} placeholder="Image URL" />
        <input type="text" name="organization" value={newStory.organization} onChange={handleInputChange} placeholder="Organization" />
        <input type="text" name="donor" value={newStory.donor} onChange={handleInputChange} placeholder="Donor" />
        <textarea name="fullStory" value={newStory.fullStory} onChange={handleInputChange} placeholder="Full Story"></textarea>
        <button type="submit">Add Story</button>
      </form>
    </Modal>
  );
}

export default AddStoryModal;
