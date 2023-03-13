function Header(){
    const appTitle= "Stardew Valley Singles!";
    return (
        <header className="header">
            <div className= "logo"> 
            <img src= "flowers.png" height="100" width="100" alt= "Marrige flowers" />
            <h1> {appTitle}</h1>
            </div>
        </header>
    );
}
export default Header;