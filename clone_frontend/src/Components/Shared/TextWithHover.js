import {Icon} from "@iconify/react";

function TextWithHover({iconName,displayText,active}) {
    return (
        <div className="flex items-center justify-start cursor-pointer">
            <div 
            className={"text-gray-600 font-semibold hover:text-white "}>
            {displayText
            }</div>
        </div>
    );
}

export default TextWithHover;