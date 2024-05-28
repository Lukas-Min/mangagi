const SaveButton = ({ onClick }) => {
    return (
        <button 
            className="h-12 rounded-3xl bg-amaranth w-60 me-3" 
            onClick={onClick}
        >
            <h1 className="text-sm text-center font-bold">Save</h1>
        </button>
    );
};

export default SaveButton;
