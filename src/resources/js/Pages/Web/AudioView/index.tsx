
import Button from '@/Components/Button'
import { playFamimaMelody, playTulipSong } from '@/hooks/audio'
import React from 'react'

export const AudioView = React.memo(function AudioView() {
    return (
        <>
            <Button onClick={() => { playFamimaMelody() }}>ファミマ</Button>
            <Button onClick={() => { playTulipSong() }}>チューリップ</Button>
        </>
    )
})

export default AudioView
