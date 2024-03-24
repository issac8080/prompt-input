import React, { useState } from 'react';
import './PromptInput.css';

const PromptInput = () => {
  const [postType, setPostType] = useState('');
  const [platform, setPlatform] = useState('');
  const [promptText, setPromptText] = useState('');
  const [file, setFile] = useState(null);
  const [toneOfVoice, setToneOfVoice] = useState('');
  const [generateHashtags, setGenerateHashtags] = useState(false);
  const [includeEmoji, setIncludeEmoji] = useState(false);

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handlePromptTextChange = (e) => {
    setPromptText(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files);
  };

  const handleToneOfVoiceChange = (e) => {
    setToneOfVoice(e.target.value);
  };

  const handleGenerateHashtagsChange = () => {
    setGenerateHashtags(!generateHashtags);
  };

  const handleIncludeEmojiChange = () => {
    setIncludeEmoji(!includeEmoji);
  };

  const handleGetPost = async () => {
    // Handle getting the post data
  };
  const handleUpload = () => {
    // Handle file upload logic here
    console.log('File uploaded:', file);
    // You can use fetch or any library to upload the file
  };

  return (
    <div className="prompt-input-container">
      <h1>PROMPT INPUT</h1>

      <div>
        <label></label>
        <select value={postType} onChange={handlePostTypeChange} required>
          <option value="">Type of Post</option>
          <option value="video">Video</option>
          <option value="image">Image</option>
        </select>
      </div>

      <div>
        <label></label>
        <select value={platform} onChange={handlePlatformChange} required>
          <option value="">Platform</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="reddit">Reddit</option>
          <option value="X">X</option>
          <option value="youtube">Youtube</option>
        </select>
      </div>

      <div>
  <textarea
    value={promptText}
    onChange={handlePromptTextChange}
    maxLength={250}
    required
    placeholder="Prompt (Max 250 characters)"
  />
</div>

<div>
<div className="file-input-container">
        <input type="file" onChange={handleFileChange} accept="image/*, video/*" multiple />
      </div>

      <section>
        <div id="dropzone" className="dropzone needsclick" onClick={handleUpload}>
          <form id="demo-upload" action="/upload">
            <div className="dz-message needsclick">
              {file ? `File selected: ${file.name}` : 'Drop files here or click to upload.'}<br />
              <span className="note needsclick">
                
              </span>
            </div>
          </form>
        </div>
      </section>

      <br />
    </div>



      <div>
        <label></label>
        <select value={toneOfVoice} onChange={handleToneOfVoiceChange}>
          <option value="">Select Tone of Voice</option>
          <option value="happy">Happy</option>
          <option value="enthusiastic">Enthusiastic</option>
          <option value="joyful">Joyful</option>
          <option value="optimistic">Optimistic</option>
          <option value="calm">Calm</option>
          <option value="playful">Playful</option>
          <option value="determined">Determined</option>
          <option value="focused">Focused</option>
          <option value="curious">Curious</option>
          <option value="content">Content</option>
          <option value="graceful">Graceful</option>
          <option value="hopeful">Hopeful</option>
          <option value="humble">Humble</option>
          <option value="charming">Charming</option>
          <option value="patient">Patient</option>
          <option value="kind">Kind</option>
          <option value="adventurous">Adventurous</option>
          <option value="ambitious">Ambitious</option>
          <option value="thoughtful">Thoughtful</option>
          <option value="authentic">Authentic</option>
          <option value="spontaneous">Spontaneous</option>
          <option value="resilient">Resilient</option>
        </select>
      </div>


      <div className="button-container">
        <button onClick={handleGetPost}>Get Post</button>
      </div>
    </div>
  );
};

export default PromptInput;
