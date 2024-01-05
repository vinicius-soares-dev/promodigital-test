import NotificationIcon from "../../img/icons8-notificação-32.png";

import "../../styles/header/style.css";

export const Header = () => {
    return (
        <header className="header">
            <span className="profile-header"></span>
            <p className="title-profile">Hello, <strong>Jessica</strong></p>
            <img className="image-notification" src={NotificationIcon} />
        </header>
    )
}