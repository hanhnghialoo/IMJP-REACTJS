import ColabSvg from '../svg/Colab.svg'

export default function ColabIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={ColabSvg}
            alt='Colab'
            width={width}
            height={height}
            className={className}
        />
    )
}