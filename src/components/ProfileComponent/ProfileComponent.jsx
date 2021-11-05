import UserProfile from "./UserProfile/UserProfile";
import ButtonsComponent from "./ButtonsComponent/ButtonsComponent";
import './profileComponent.css';

const ProfileComponent = ({ sendDataToParent }) => {
    return (
        <div className="card profile">
            <div className='profile-container'>
                <UserProfile/>
                <ButtonsComponent sendDataToParent={sendDataToParent} />
            </div>
        </div>
    )
}
export default ProfileComponent;