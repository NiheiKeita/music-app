import React, { useState } from "react"
import { PianoKey } from "./components/PianoKey"
const musicalSequences = [
    "C3", "D3", "E3", "F3", "G3", "A3", "B3",
    "C4", "D4", "E4", "F4", "G4", "A4", "B4",
    "C5", "D5", "E5", "F5", "G5", "A5", "B5",
]
const sharp = [
    "C3", "D3", "F3", "G3", "A3",
    "C4", "D4", "F4", "G4", "A4",
    "C5", "D5", "F5", "G5", "A5",
]

type Props = {
    onClickKey: (key: string) => void
}

export const Piano = React.memo<Props>(function Piano({
    onClickKey
}) {
    const [pressedKeys, setPressedKeys] = useState<{ [key: string]: boolean }>({})

    const handleKeyPress = (key: string) => {
        setPressedKeys((prev) => ({ ...prev, [key]: !prev[key] }))
        if (!pressedKeys[key]) {
            onClickKey(key)
        }
    }

    return (
        <div className="relative mx-auto mt-10 flex w-full max-w-4xl">
            {/* Render white keys */}
            {musicalSequences.map((musicalSequence, i) => (
                <div key={musicalSequence} className="relative">
                    <PianoKey
                        type="white"
                        onClick={() => handleKeyPress(musicalSequence)}
                        isPressed={!!pressedKeys[musicalSequence]}
                    />
                    {/* Add black keys except for E and B */}
                    {sharp.includes(musicalSequence) && (
                        <PianoKey
                            type="black"
                            onClick={() => handleKeyPress("#" + musicalSequence)}
                            isPressed={!!pressedKeys["#" + musicalSequence]}
                            position="left-12 top-0"
                        />
                    )}
                </div>
            ))}
        </div>
    )
})

export default Piano
