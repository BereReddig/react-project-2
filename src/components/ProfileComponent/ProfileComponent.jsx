import UserProfile from "./UserProfile/UserProfile";
import ButtonsComponent from "./ButtonsComponent/ButtonsComponent";
import './profileComponent.css';

const ProfileComponent = () => {
    return (
        <div className="profile-component-container">
            <UserProfile/>
            <ButtonsComponent />
        </div>
    )
}
export default ProfileComponent;