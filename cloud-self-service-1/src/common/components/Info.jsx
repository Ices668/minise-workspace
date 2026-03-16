import PropTypes from 'prop-types';

export default function Info({ text }) {
    return <div className="text-sm rounded py-1 px-2 bg-blue-100 text-blue-600">{text}</div>
}

Info.propTypes = {
    text: PropTypes.string.isRequired
}