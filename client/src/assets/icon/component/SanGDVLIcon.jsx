import SanGDVLSvg from '../svg/SanGDVL.svg'

export default function SanGDVLIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={SanGDVLSvg}
            alt='SGDVL'
            width={width}
            height={height}
            className={className}
        />
    )
}