const TextInput = ({label,placeholder,className}) => {
    return (
        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className="font-semibold">
                    {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-2 border border-gray-400 rounded "
                id={label}
            />
        </div>
    )
};

export default TextInput;