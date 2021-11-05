import profilePicture from '../../../assets/images/image-jeremy.png'
import './userProfile.css'

const UserProfile = () => {
    return (
        <div className="user-container">
            <img className="profile-picture" src={profilePicture} alt="profile image" />
            <h4 className='report-text'>Report for</h4>
            <h2 className='profile-name'>Jeremy Robson</h2>
        </div>
    )
}
export default UserProfile;