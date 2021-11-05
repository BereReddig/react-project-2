import profilePicture from '../../../assets/images/image-jeremy.png'
import './userProfile.css'

const UserProfile = () => {
    return (
        <div className="user-container">
            <div>
                <img className="profile-picture" src={profilePicture} alt="profile image" />
            </div>
            <div>
                <h4>Report for</h4>
            </div>
            <div>
                <h2>Jeremy Robson</h2>
            </div>
        </div>
    )
}
export default UserProfile;