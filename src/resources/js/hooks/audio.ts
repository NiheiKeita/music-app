import { musicalScaleToFrequency } from "./audio/musicalScaleToFrequency"
import { restToFrequency } from "./audio/restToFrequency"
import { MusicalScale, RestScale } from "./audio/type"

export const playMusicalScale = async (musicalScale: MusicalScale) => {
    await playTone(musicalScaleToFrequency(musicalScale), Rhythm / 4)
}
export const playRest = async (z: RestScale) => {
    await new Promise(resolve => setTimeout(resolve, Rhythm / restToFrequency(z)))
}
