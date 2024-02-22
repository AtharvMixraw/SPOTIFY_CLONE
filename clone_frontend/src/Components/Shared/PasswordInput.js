const PasswordInput = ({label,placeholder}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold">
                    {label}
            </label>
            <input
                type="password"
                placeholder={placeholder}
                className="p-2 border border-gray-400 rounded "
                id={label}
            />
        </div>
    )
};

export default PasswordInput;