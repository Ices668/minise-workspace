function Toggle({
    checked, label, onChange, testId, ...props
}) {
    const changeHandler = (event) => {
        if (onChange) {
            onChange(event.target.checked);
        }
    };

    return (
        <div className="flex h-4">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={changeHandler} checked={checked} {...props} data-testid={testId} />
                <div className="w-[31px] h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary-color rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all peer-checked:bg-primary" />
                <span className="ml-2 text-[13px] text-gray-600 dark:text-gray-300">{label}</span>
            </label>
        </div>
    );
}

export default Toggle;
