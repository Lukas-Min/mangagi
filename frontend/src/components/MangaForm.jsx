import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SingleOption, AnimatedMulti } from './Dropdown';
import SaveButton from './SaveButton';
import CancelButton from './CancelButton';
import PropTypes from 'prop-types';

const MangaForm = ({ onSubmit, mode, id, formData, setFormData, setImageFilename, setImageSrc }) => {
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDataForEdit = async () => {
            try {
                console.log(`Fetching data for manga with id: ${id}`);
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/mangas/find/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(`Fetched data: ${JSON.stringify(data)}`);

                // Ensure all fields are populated with either fetched data or default values
                setFormData({
                    title: data.data.title ?? '',
                    mangaId: data.data.manga_id ?? '',
                    yearPublished: data.data.year_published ?? '',
                    chapters: data.data.chapters ?? '',
                    author: data.data.author ?? [],
                    state: data.data.manga_state ?? '',
                    status: data.data.manga_status ?? '',
                    tags: data.data.genre ?? [],  
                    description: data.data.description ?? '',
                });

                setImageSrc(data.data.cover_art_src || '');
                setImageFilename(data.data.cover_art || '');
                
            } catch (error) {
                console.error(`Error fetching data: ${error.message}`);
            }
        };

        if (mode === 'edit') {
            fetchDataForEdit();
        }
    }, [mode, id, setFormData, setImageFilename, setImageSrc]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'author') {
            const authorsArray = value.split(',').map(author => author.trim());
            setFormData({
                ...formData,
                [name]: authorsArray,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleStateChange = (selectedOption) => {
        setFormData({
            ...formData,
            state: selectedOption?.value ?? '',
        });
    };

    const handleStatusChange = (selectedOption) => {
        setFormData({
            ...formData,
            status: selectedOption?.value ?? '',
        });
    };

    const handleTagsChange = (selectedOptions) => {
        const tags = selectedOptions.map(option => option.value);
        setFormData({
            ...formData,
            tags,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(formData)) {
            if (Array.isArray(value)) {
                value.forEach(val => params.append(key, val));
            } else {
                params.append(key, value);
            }
        }

        if (mode === 'add') {
            navigate(`/add-manga`);
        }
        onSubmit();
    };

    useEffect(() => {
        return () => {
            window.history.replaceState({}, document.title, window.location.pathname);
        };
    }, []);

    console.log(`Form data: ${JSON.stringify(formData)}`);

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-x-3 sm:gap-y-1">
                <div className="w-full lg:col-span-2">
                    <h3 className="italic">Title:</h3>
                    <input
                        type="text"
                        name="title"
                        value={formData.title ?? ''}
                        onChange={handleChange}
                        className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
                        placeholder="Solo Leveling"
                    />

                    <h3 className="italic">MangaDex ID (Optional):</h3>
                    <input
                        type="text"
                        name="mangaId"
                        value={formData.mangaId ?? ''}
                        onChange={handleChange}
                        className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
                        placeholder="6e52262f-bcd5-49c4-b93a-f4652d189844"
                    />

                    <h3 className="italic">Author:</h3>
                    <input
                        type="text"
                        name="author"
                        value={(formData.author ?? []).join(', ')}
                        onChange={handleChange}
                        className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
                        placeholder="H-Goon, Isayama Hajime, Okura"
                    />
                </div>
                <div className="w-full lg:col-span-1">
                    <h3 className="italic">Chapters:</h3>
                    <input
                        type="text"
                        name="chapters"
                        value={formData.chapters ?? ''}
                        onChange={handleChange}
                        className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
                        placeholder="24"
                    />
                </div>
                <div className="w-full lg:col-span-1">
                    <h3 className="italic">Year Published:</h3>
                    <input
                        type="text"
                        name="yearPublished"
                        value={formData.yearPublished ?? ''}
                        onChange={handleChange}
                        className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full"
                        placeholder="2018"
                    />
                </div>
                <div className="w-full lg:col-span-1">
                    <h3 className="italic">State:</h3>
                    <SingleOption isState={true} onChange={handleStateChange} value={formData.state} />
                </div>
                <div className="w-full lg:col-span-1">
                    <h3 className="italic">Status:</h3>
                    <SingleOption isState={false} onChange={handleStatusChange} value={formData.status} />
                </div>
                <div className="lg:col-span-2 w-full">
                    <h3 className="italic">Tags:</h3>
                    <AnimatedMulti onChange={handleTagsChange} tags={formData.tags}/>
                </div>
                <div className="lg:col-span-2 w-full">
                    <h3 className="italic">Description:</h3>
                    <textarea
                        name="description"
                        value={formData.description ?? ''}
                        onChange={handleChange}
                        className="p-2 rounded-md bg-white border-amaranth border text-licorice w-full h-32 resize-none"
                        placeholder="Enter Description.."
                    />
                </div>

                <div className="flex justify-center w-full lg:col-span-2 gap-2">
                    <SaveButton type="submit" onClick={handleSubmit} />
                    <CancelButton id={id} />
                </div>
            </div>
        </form>
    );
};

MangaForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['add', 'edit']).isRequired,
    id: PropTypes.string.isRequired,
    formData: PropTypes.shape({
        title: PropTypes.string,
        mangaId: PropTypes.string,
        yearPublished: PropTypes.string,
        chapters: PropTypes.string,
        author: PropTypes.arrayOf(PropTypes.string),
        state: PropTypes.string,
        status: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string
    }).isRequired,
    setFormData: PropTypes.func.isRequired,
    setImageFilename: PropTypes.func,
    setImageSrc: PropTypes.func
};

export default MangaForm;
