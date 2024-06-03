// HOOKS
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// COMPONENTS
import MangaCover from '../components/MangaCover';
import Alert from '@mui/material/Alert';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [savedMessage, setSavedMessage] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const savedMessage = params.get('saveMessage');
        if (savedMessage) {
            setSavedMessage(JSON.parse(decodeURIComponent(savedMessage)));

            params.delete('saveMessage');
            navigate({ search: params.toString() }, { replace: true });
        }
    }, [location.search, navigate]);

    const handleAlertClose = () => {
        setSavedMessage(null);
    };


    return (
        <div className="container mx-auto px-[5vw]">
            <h1 className='text-3xl font-bold mb-5'>Your Manga List</h1>
            {savedMessage && (
                <div className="w-full mb-5">
                    <Alert severity={savedMessage.severity} onClose={handleAlertClose}>{savedMessage.content}</Alert>
                </div>
            )}
            <MangaCover />
        </div>
    );
}

export default Home;
