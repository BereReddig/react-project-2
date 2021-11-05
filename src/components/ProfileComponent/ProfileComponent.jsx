import UserProfile from "./UserProfile/UserProfile";
import ButtonsComponent from "./ButtonsComponent/ButtonsComponent";
import './profileComponent.css';

const ProfileComponent = ({ sendDataToParent }) => {
    return (
        <div className="profile-component-container">
            <UserProfile/>
            <ButtonsComponent sendDataToParent={sendDataToParent} />
        </div>
    )
}
export default ProfileComponent;