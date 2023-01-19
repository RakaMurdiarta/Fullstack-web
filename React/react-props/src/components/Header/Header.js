import Title from "./Title";
import Description from "./Description";
import UserPofile from "./UserProfile";

function Header() {
    return (
        <header>
            <Title appTitle='Koding Akademi' />
            <Description desc='Pusat Belajar Koding dan Robotic' />
            <Description desc='Tecnology' />
            <UserPofile />
        </header>

    );
}

export default Header;