const CancelButton = ({ onClick }) => {
  return (
    <button
      className="h-12 rounded-xl bg-amaranth w-full my-2 hover:bg-blush transition-colors duration-200"
      onClick={onClick}>
      <h1 className="text-center font-bold">Cancel</h1>
    </button>
  );
};

export default CancelButton;
