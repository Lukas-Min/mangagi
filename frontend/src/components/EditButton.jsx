import { Link } from "react-router-dom"


const EditButton = ({ id, onClick }) => {
    return (
        <Link to={`/edit-manga/${id}`} className="w-full">
            <button className="h-12 rounded-xl bg-amaranth w-[30%] me-3 hover:bg-blush transition-colors duration-200"
                onClick={onClick}>
                <h1 className="text-center font-bold">Edit</h1>
            </button>
        </Link>
    )
}

export default EditButton;