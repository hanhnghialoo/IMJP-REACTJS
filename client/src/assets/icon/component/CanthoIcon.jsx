import CanthoSvg from '../svg/Cantho.svg'

export default function CanthoIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={CanthoSvg}
            alt='TTDVVL Can Tho'
            width={width}
            height={height}
            className={className}
        />
    )
}