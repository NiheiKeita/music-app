
import Button from '@/Components/Button'
import { playFamimaMelody, playKaeruNoUta, playTulipSong } from '@/hooks/audio'
import React from 'react'

export const AudioView = React.memo(function AudioView() {
    return (
        <>
            <Button onClick={() => { playFamimaMelody() }}>ファミマ</Button>
            <Button onClick={() => { playTulipSong() }}>チューリップ</Button>
            <Button onClick={() => { playKaeruNoUta() }}>かえるのうた</Button>

        </>
    )
})

export default AudioView
