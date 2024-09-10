import React, { useState } from 'react';
import './Dreams.css';

const Dreams = () => {
    const [dreams, setDreams] = useState(Array(10).fill().map((_, index) => ({
        id: index + 1,
        imageUrl: '',
        title: '',
    })));

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newDreams = [...dreams];
                newDreams[index].imageUrl = e.target.result;
                setDreams(newDreams);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleTitleChange = (index, event) => {
        const newDreams = [...dreams];
        newDreams[index].title = event.target.value;
        setDreams(newDreams);
    };

    return (
        <div className="featured-project dreams-container" style={{ paddingTop: '60px' }}>
            <h1 className="section-title dreams-title" style={{ marginBottom: '20px', textAlign: 'center', position: 'relative', top: '-10px' }}>Dreams</h1>
            <div className="project-grid">
                {dreams.map((dream, index) => (
                    <div key={dream.id} className="project-card dream-item">
                        <div className="image-placeholder">
                            {dream.imageUrl ? (
                                <img src={dream.imageUrl} alt={dream.title} className="featured-image" />
                            ) : (
                                <label htmlFor={`file-upload-${dream.id}`} className="cta-button" style={{ color: 'white' }}>
                                    Upload Image
                                </label>
                            )}
                            <input
                                id={`file-upload-${dream.id}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(index, e)}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <input
                            type="text"
                            value={dream.title}
                            onChange={(e) => handleTitleChange(index, e)}
                            placeholder="Write Your Dreams"
                            className="dream-title-input"
                            style={{ color: 'white' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dreams;