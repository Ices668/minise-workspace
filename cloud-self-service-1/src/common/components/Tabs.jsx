import PropTypes from 'prop-types';

function Tab({ label, children }) {
    return (
        <div label={label}>
            {children}
        </div>
    )
}

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export { Tab };

export default function Tabs({ selectedIndex = 0, children, onChange }) {
    if (!Array.isArray(children)) {
        return (<div>{children}</div>);
    }
    const labels = children.map((child) => child.props.label);
    const contents = children.map((child) => child.props.children);
    return (
        <div className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-t-md">
            <div className="flex gap-x-2 border-b">
                {labels.map((label, index) => (
                    <button
                        key={label}
                        className={`py-2 px-4 text-sm border-b ${index === selectedIndex ? 'border-b-[3px] border-b-primary text-primary' : 'text-gray-600 dark:text-gray-400'}`}
                        onClick={() => onChange(index)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="pt-2 px-4 pb-6">
                {contents[selectedIndex]}
            </div>
        </div>
    )
};

Tabs.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    selectedIndex: PropTypes.number,
    onChange: PropTypes.func.isRequired
};
