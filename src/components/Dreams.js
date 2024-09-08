import React, { useState, useEffect } from 'react';
import './Dreams.css'; // We'll create this CSS file next

const Dreams = () => {
    const [dreams, setDreams] = useState([]);

    useEffect(() => {
        // In a real application, you would fetch dream data from an API
        // For this example, we'll use dummy data
        const dummyDreams = [
            { id: 1, imageUrl: 'https://example.com/dream1.jpg', title: 'Flying over mountains' },
            { id: 2, imageUrl: 'https://example.com/dream2.jpg', title: 'Underwater city' },
            { id: 3, imageUrl: 'https://example.com/dream3.jpg', title: 'Space exploration' },
            // Add more dummy dreams as needed
        ];
        setDreams(dummyDreams);
    }, []);

    return (
        <div className="dreams-container">
            <h1>Dream Collage</h1>
            <div className="dream-collage">
                {dreams.map((dream) => (
                    <div key={dream.id} className="dream-item">
                        <img src={dream.imageUrl} alt={dream.title} />
                        <p>{dream.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dreams;