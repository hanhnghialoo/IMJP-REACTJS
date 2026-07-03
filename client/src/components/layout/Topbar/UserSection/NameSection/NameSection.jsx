import './NameSection.css'

function NameSection({user}){
    return(
        <>
            <span className='name-section'>{user.fullName}</span>
        </>
    )
}

export default NameSection;