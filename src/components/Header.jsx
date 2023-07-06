import Logo from "../assets/logo-dark.svg";

const Header = () => {
  return (
    <div>
      <header className="p-6">
        <img src={Logo} alt="kanban_logo" />
      </header>
    </div>
  );
};

export default Header;
