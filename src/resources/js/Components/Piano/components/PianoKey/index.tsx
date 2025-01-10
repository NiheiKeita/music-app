import React, { useState } from "react"

export const PianoKey: React.FC<{
    type: "white" | "black";
    onClick: () => void;
    isPressed: boolean;
    position?: string;
}> = ({ type, onClick, isPressed, position = "" }) => {
    const baseStyle =
        type === "white"
            ? "w-16 h-48 border border-black"
            : "w-10 h-32 absolute"

    const pressedStyle =
        type === "white" ? "bg-gray-300" : "bg-gray-700"
    const notPressedStyle =
        type === "white" ? "bg-white" : "bg-black"

    return (
        <div
            className={`${baseStyle} ${position} ${isPressed ? pressedStyle : notPressedStyle} ${type === "black" ? "z-10" : ""}`}
            onMouseDown={onClick}
            onMouseUp={onClick}
        />
    )
}
