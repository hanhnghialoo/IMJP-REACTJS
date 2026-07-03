import TTSSvg from '../svg/TTS.svg'

export default function TTSIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={TTSSvg}
            alt='TTS'
            width={width}
            height={height}
            className={className}
        />
    )
}