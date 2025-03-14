import React, { useState } from 'react';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // 1) Function to send file to the Azure API
  const handleAnalyze = async () => {
    if (!selectedFile) {
      console.log("No file selected.");
      return;
    }

    try {
      // We'll send a POST request with the file
      const formData = new FormData();
      formData.append('file', selectedFile);

      // TODO: Replace this with your actual API endpoint
      const response = await fetch('https://YOUR-AZURE-API-ENDPOINT/api/parseResume', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response from server:', data);

      // We'll do something with 'data' in the next step,
      // like storing it in state or passing it to another component.
      
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Upload a Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <p>File selected: {selectedFile.name}</p>
      )}

      {/* 2) Tie the Analyze button to handleAnalyze */}
      <button onClick={handleAnalyze}>
        Analyze
      </button>
    </div>
  );
}

export default FileUploader;

