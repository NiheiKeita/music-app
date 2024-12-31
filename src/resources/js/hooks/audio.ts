import { musicalScaleToFrequency } from "./audio/musicalScaleToFrequency"
import { restToFrequency } from "./audio/restToFrequency"
import { MusicalScale, RestScale } from "./audio/type"

const context = new (window.AudioContext || window.AudioContext)()
const Rhythm = 1000

function playTone(frequency: number, duration: number) {
    // Web Audio API コンテキストを作成する
    // const context = new (window.AudioContext || window.webkitAudioContext)()
    // 音を生成するためのオシレーターノードを作成
    const oscillator = context.createOscillator()
    // 音量を制御するためのゲインノードを作成
    const gainNode = context.createGain()

    // オシレーターの周波数を引数で渡された値に設定
    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    // オシレーターノードをゲインノードに接続し、ゲインノードを出力に接続
    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    // 音の再生を開始
    oscillator.start()

    // 音量を徐々に下げていく
    gainNode.gain.setValueAtTime(1, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration / 1000)

    // 音の再生の終了
    oscillator.stop(context.currentTime + duration / 1000)

    return new Promise(resolve => setTimeout(resolve, duration))
}

export const playMusicalScale = async (musicalScale: MusicalScale) => {
    await playTone(musicalScaleToFrequency(musicalScale), Rhythm / 4)
}
export const playRest = async (z: RestScale) => {
    await new Promise(resolve => setTimeout(resolve, Rhythm / restToFrequency(z)))
}

export async function playFamimaMelody() {
    await playMusicalScale("B4")
    await playMusicalScale("G4")
    await playMusicalScale("D4")
    await playMusicalScale("G4")
    await playMusicalScale("A4")
    await playMusicalScale("D5")
    await playRest("Z4")
    await playMusicalScale("D5")
    await playMusicalScale("A4")
    await playMusicalScale("B4")
    await playMusicalScale("A4")
    await playMusicalScale("D4")
    await playMusicalScale("G4")
}

export async function playTulipSong() {
    // ドラクエ序曲の冒頭部分
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playRest("Z4") // 休符
    await playMusicalScale("G4") // ソ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("D4") // レ
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("D4") // レ
    await playRest("Z4") // 休符

    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playRest("Z4") // 休符
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playRest("Z4") // 休符
    await playMusicalScale("G4") // ソ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("D4") // レ
    await playMusicalScale("C4") // ド
    await playMusicalScale("D4") // レ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符

    await playMusicalScale("G4") // ソ
    await playMusicalScale("G4") // ソ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("G4") // ソ
    await playMusicalScale("A4") // ラ
    await playMusicalScale("A4") // ラ
    await playMusicalScale("G4") // ソ
    await playRest("Z4") // 休符
    await playMusicalScale("E4") // ミ
    await playMusicalScale("E4") // ミ
    await playMusicalScale("D4") // レ
    await playMusicalScale("D4") // レ
    await playMusicalScale("C4") // ド
    await playRest("Z4") // 休符
}
