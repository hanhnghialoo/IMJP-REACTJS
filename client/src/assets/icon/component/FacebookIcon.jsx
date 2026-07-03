import FacebookSvg from '../svg/Facebook.svg'

export default function FacebookIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={FacebookSvg}
            alt='Facebook'
            width={width}
            height={height}
            className={className}
        />
    )
}