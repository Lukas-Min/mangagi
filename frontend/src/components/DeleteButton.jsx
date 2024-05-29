

const DeleteButton = ({ onClick }) => {
    return (
        <button 
            className="h-12 rounded-xl bg-amaranth w-[30%] hover:bg-blush transition-colors duration-200"
            onClick={onClick}
        >

            <h1 className="text-center font-bold">Delete</h1>
        </button>
    )
}

export default DeleteButton;