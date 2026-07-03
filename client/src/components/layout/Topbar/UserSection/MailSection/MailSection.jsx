import './MailSection.css'

function MailSection({user}){
    return(
        <>
            <span className='mail-section'>{user.mail}</span>
        </>
    )
}

export default MailSection;