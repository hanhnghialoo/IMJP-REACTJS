import './AvatarUser.css'

function AvatarUser({user}){
    return (
        <>
            <img src={user.avatar} alt='AvatarUser' className='avatar-section'></img>
        </>
    )
}

export default AvatarUser;