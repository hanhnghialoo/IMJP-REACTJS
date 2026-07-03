import TiktokSvg from '../svg/Tiktok.svg'

export default function TiktokIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={TiktokSvg}
            alt='Tiktok'
            width={width}
            height={height}
            className={className}
        />
    )
}