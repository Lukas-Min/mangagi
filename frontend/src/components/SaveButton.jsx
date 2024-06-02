import PropTypes from 'prop-types';

const SaveButton = ({ onClick }) => {
    return (
        <button
            className="h-12 rounded-xl bg-amaranth w-full my-2 hover:bg-blush transition-colors duration-200"
            onClick={onClick}>
            <h1 className="text-center font-bold">Save</h1>
        </button>
    );
};

SaveButton.propTypes = {
    onClick: PropTypes.func,
};

export default SaveButton;
