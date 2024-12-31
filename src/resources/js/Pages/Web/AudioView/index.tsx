
import Button from '@/Components/Button'
import { playFamimaMelody } from '@/hooks/audio'
import React from 'react'

export const AudioView = React.memo(function AudioView() {
    return (
        <>
            <Button onClick={() => { playFamimaMelody() }}>再生</Button>
        </>
    )
})

export default AudioView
