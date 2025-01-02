
import Button from '@/Components/Button'
import { playFamimaMelody } from '@/hooks/audio/music/famimaMelody'
import { playKaeruNoUta } from '@/hooks/audio/music/kaeruNoUta'
import { playTulipSong } from '@/hooks/audio/music/tulipSong'
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
