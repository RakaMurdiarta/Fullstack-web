import Title from "./Title";
import Description from "./Description";

function Header() {
    return (
        <>
            <header>
                <Title appTitle='Koding Akademi' />
                <Description>
                    <h3>Description</h3>
                    <p>Technology</p>
                </Description>
            </header>
        </>
    );
}

export default Header;