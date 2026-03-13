import PropTypes from 'prop-types';

export default function Warning({ text }) {
    return <div className="text-sm rounded py-1 px-2 bg-yellow-100 text-yellow-600">{text}</div>
}

Warning.propTypes = {
    text: PropTypes.string.isRequired
}