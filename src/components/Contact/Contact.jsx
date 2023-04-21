import PropTypes from 'prop-types';
export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <p>
        {name} : {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
