import PropTypes from "prop-types";

const Navbar = ({ logo, title }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top me-3" />
                    {title}
                </a>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    logo: PropTypes.any.isRequired,
    title: PropTypes.string,
};

export default Navbar;