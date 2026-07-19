import Unknown from '../svg/question-mark.svg'

export default function UnknownIcon({
    width = 20,
    height = 20,
    className ='',
}){
    return(
        <img 
            src={Unknown}
            alt='Unknown'
            width={width}
            height={height}
            className={className}
            style={{
                opacity: 0.3,
            }}
        />
    )
}