import React, { useState } from "react";
import { toUpperCase, isObjectId } from '../../utils';
import { useNavigate, useParams } from 'react-router-dom';
import { useViewMangaData } from '../hooks/useMangaData';
import DeleteButton from '../components/DeleteButton';
import EditButton from '../components/EditButton';
import SaveButton from '../components/SaveButton';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ViewManga = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: mangaInfo, isLoading, error } = useViewMangaData(id);
    const [saveMessage, setSaveMessage] = useState(null);
    const [open, setOpen] = useState(false);

    const saveMangaDetails = async () => {
        try {
            const saveResponse = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mangaInfo.data),
            });

            if (!saveResponse.ok) {
                throw new Error('Failed to save manga details');
            }

            setSaveMessage({ content: 'Manga saved successfully!', severity: 'success' });
        } catch (err) {
            setSaveMessage({ content: `Error saving manga: ${err.message}`, severity: 'error' });
        }
    };

    const deleteManga = async () => {
        try {
            const deleteResponse = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!deleteResponse.ok) {
                const errorData = await deleteResponse.json();
                throw new Error(`Failed to delete manga: ${errorData.message}`);
            }

            alert('Manga deleted successfully!');
            navigate('/');
        } catch (err) {
            alert(`Error deleting manga: ${err.message}`);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {isLoading && (
                <div className="flex justify-center items-center h-screen">
                    <h1>Loading...</h1>
                </div>
            )}

            {error && (
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 px-[10vw] lg:px-[15vw] pb-16">
                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start p-5">
                        <div className="w-full">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left py-2">Error</h1>
                            <p className="text-xl font-bold text-red-600 text-center lg:text-left py-2">{error.message}</p>
                        </div>
                    </div>
                </section>
            )}

            {!isLoading && !error && (
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-8  px-[10vw] lg:px-[15vw] pb-16">
                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start p-5">
                        {saveMessage && (
                            <div className="w-full">
                                <Alert severity={saveMessage.severity} onClose={() => setSaveMessage(null)}>{saveMessage.content}</Alert>
                            </div>
                        )}
                        <div className="w-full">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left py-2">{mangaInfo.data.title}</h1>
                            <div className="grid grid-cols-1 xs:grid-cols-3 gap-x-3 gap-y-2 xs:gap-y-0 text-center text-nowrap">
                                <div className="text-baseline sm:text-lg py-2 lg:py-3 lg:xl text-start col-span-1 xs:col-span-3">
                                    <h1 className="p-2">
                                        Author: {mangaInfo.data.author.length === 1
                                            ? mangaInfo.data.author[0]
                                            : mangaInfo.data.author.length === 2
                                                ? mangaInfo.data.author.join(' and ')
                                                : mangaInfo.data.author.slice(0, -1).join(', ') + ', and ' + mangaInfo.data.author[mangaInfo.data.author.length - 1]}
                                    </h1>
                                </div>
                                <div className="bg-raisin rounded-lg">
                                    <h1 className="p-2">Published: {mangaInfo.data.year_published != null ? mangaInfo.data.year_published : "Unknown"}</h1>
                                </div>
                                <div className="bg-raisin rounded-lg">
                                    <h1 className="p-2">Status: {toUpperCase(mangaInfo.data.manga_status)}</h1>
                                </div>
                                <div className="bg-raisin rounded-lg">
                                    <h1 className="p-2">State: {toUpperCase(mangaInfo.data.manga_state)}</h1>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold py-1 md:py-2 text-left">Tags</h1>
                            <div className="flex flex-wrap lg:justify-start gap-2 py-2">
                                {mangaInfo.data.genre.map((tag, index) => (
                                    <div key={index} className="py-2 px-3 rounded-xl bg-blush text-licorice">
                                        <h1 className="text-center font-bold">{tag}</h1>
                                    </div>
                                ))}
                            </div>
                            <div className="text-justify py-5">
                                {mangaInfo.data.description ? (
                                    mangaInfo.data.description.split('\n').map((paragraph, index) => (
                                        <React.Fragment key={index}>
                                            {paragraph}
                                            <p> </p>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    "No available description."
                                )}
                            </div>
                            <div className="flex justify-between my-2 items-center">
                                {isObjectId(id) ? (
                                    <>
                                        <EditButton id={mangaInfo.data._id}/>
                                        <DeleteButton onClick={handleClickOpen} />
                                    </>
                                ) : (
                                    <SaveButton onClick={saveMangaDetails} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:mt-5">
                        <div className="max-h-full">
                            <img
                                src={`https://uploads.mangadex.org/covers/${mangaInfo.data.manga_id}/${mangaInfo.data.cover_art}`}
                                alt="Cover Image"
                                className="border-4 border-red-300 w-full h-auto rounded-lg max-h-[30vh] md:max-h-[40vh]  lg:max-h-full"
                            />
                        </div>
                    </div>
                </section>
            )}

            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: '#FFD9DA',
                        padding: '15px',
                    },
                }}>
                <DialogTitle sx={{ color: '#191516', fontSize: '1.5rem' }}>Confirm Delete</DialogTitle>
                <DialogContent sx={{ padding: '0px', margin: '1rem 2rem' }} >
                    <DialogContentText sx={{ color: '#191516' }}>
                        Are you sure you want to delete this manga? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{
                        backgroundColor: '#AC274F',
                        color: '#FFD9DA',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#EB638B',
                            color: '#FFFFFF',
                        },
                    }}>
                        Cancel
                    </Button>
                    <Button
                        onClick={deleteManga}
                        sx={{
                            backgroundColor: '#AC274F',
                            color: '#FFD9DA',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#EB638B',
                                color: '#FFFFFF',
                            },
                        }}
                        autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ViewManga;
