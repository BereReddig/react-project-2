import UserProfile from "./UserProfile/UserProfile";
import ButtonComponent from "./ButtonsComponent/ButtonComponent/ButtonComponent";
import './profileComponent.css';

const ProfileComponent = () => {
    return (
        <div className="profile-component-container">
            <UserProfile/>
            <ButtonComponent />
            <ButtonComponent />
            <ButtonComponent />
        </div>
    )
}
export default ProfileComponent;