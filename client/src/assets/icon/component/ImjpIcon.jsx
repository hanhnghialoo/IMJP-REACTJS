import ImjpSvg from '../svg/IMJP.svg'

export default function ImjpIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={ImjpSvg}
            alt='IMJP'
            width={width}
            height={height}
            className={className}
        />
    )
}