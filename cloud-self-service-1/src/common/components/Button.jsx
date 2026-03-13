import PropTypes from 'prop-types';

export default function Button({ children, onClick, primary, mini, ...props }) {
    return <button
        type="button"
        onClick={onClick}
        {...props}
        className={`pointer-events-auto rounded-md ${mini ? 'px-3 py-1' : 'px-4 py-2'} text-[0.8125rem] font-semibold leading-5 ${primary ? 'bg-primary hover:bg-primary/80 text-white' : 'border'}`}>
        {children}
    </button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool,
    mini: PropTypes.bool
}