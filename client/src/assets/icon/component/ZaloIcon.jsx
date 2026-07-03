import ZaloSvg from '../svg/Zalo.svg'

export default function ZaloIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={ZaloSvg}
            alt='Zalo OA'
            width={width}
            height={height}
            className={className}
        />
    )
}