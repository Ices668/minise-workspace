import PropTypes from 'prop-types';

export default function Checkbox({ id, name, label, checked, disabled, onChange, ...props }) {
    return (
        <div className="flex items-center">
            <input checked={checked}
                id={id || name}
                type="checkbox"
                value=""
                disabled={disabled}
                {...props}
                onChange={(e) => onChange(e.target.checked)}
                className="w-4 h-4 input" />
            <label
                htmlFor={name}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
}