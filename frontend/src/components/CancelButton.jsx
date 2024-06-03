import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const CancelButton = ({ id }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleCancel = () => {
        location.pathname === '/add-manga' ? navigate('/') : navigate(`/view-manga/${id}`);
    };

    return (
        <button
        className="h-12 rounded-xl bg-amaranth w-full my-2 hover:bg-blush transition-colors duration-200"
        onClick={handleCancel}>
            <h1 className="text-center font-bold">Cancel</h1>
        </button>
    );
};

CancelButton.propTypes = {
    id: PropTypes.string.isRequired,
};

export default CancelButton;
