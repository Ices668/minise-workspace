import PropTypes from 'prop-types';

export default function Select({ id, name, value, items, placeholder, onChange, ...props }) {
    return (
        <select
            id={name || id}
            className="input text-sm block w-full px-1 py-1.5"
            value={value || ''}
            {...props}
            onChange={(e) => onChange(e.target.value)}>
            <option value="">{placeholder}</option>
            {items.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
    )
}

Select.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func.isRequired
}