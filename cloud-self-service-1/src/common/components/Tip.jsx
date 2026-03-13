import PropTypes from 'prop-types';

export default function Tip({ text }) {
    return <div className="text-xs rounded py-1 px-2 bg-green-100 text-green-600">{text}</div>
}

Tip.propTypes = {
    text: PropTypes.string.isRequired
}