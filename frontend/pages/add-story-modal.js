import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../styles/add-story-modal-styles.css';

Modal.setAppElement('#__next');

function AddStoryModal({ modalIsOpen, setModalIsOpen, newStory, setNewStory, addNewStory }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStory({ ...newStory, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('http://localhost:3001/stories', newStory);
      console.log('Response data:', response.data);
    addNewStory(response.data);
    setNewStory({
      title: '',
      snippet: '',
      imageUrl: '',
      organization: '',
      donor: '',
      fullStory: '',
    });
      setModalIsOpen(false); // Close the modal
    } catch (error) {
      console.error('Error adding new story:', error);
    }
    setModalIsOpen(false); // Close the modal
  };
  
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewStory({ ...newStory, imageUrl: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal-wrapper custom-modal-content">
    <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={newStory.title} onChange={handleInputChange} placeholder="Title" />
          <input type="text" name="snippet" value={newStory.snippet} onChange={handleInputChange} placeholder="Snippet" />
          <div className="file-input-container">
            <input type="file" id="imageFile" name="imageFile" onChange={handleFileChange} />
            <label htmlFor="imageFile" className="custom-file-upload">Upload Image</label>
          </div>
          <input type="text" name="organization" value={newStory.organization} onChange={handleInputChange} placeholder="Organization" />
          <input type="text" name="donor" value={newStory.donor} onChange={handleInputChange} placeholder="Donor" />
          <textarea name="fullStory" value={newStory.fullStory} onChange={handleInputChange} placeholder="Full Story"></textarea>
          <button className="cube-button" type="submit">
            <span>click here!</span>
            <span>add story</span>
          </button>
        </form>
    </Modal>
  );
}

export default AddStoryModal;

