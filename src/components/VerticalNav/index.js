import PropTypes from "prop-types";

import "./VerticalNav.scss";

const VerticalNav = ({ data }) => {

    const handleTab = (e) => {
        e.preventDefault();
        
        const button = document.querySelector(".active");
        const tab = document.querySelector(".show.active");
        if (button && tab) {
            button.classList.remove("active");
            tab.classList.remove("show","active");
        }

        const buttonActive = document.querySelector(`button#${e.target.id}`);
        const tabActive = document.querySelector(`div #${e.target.id.replace("-tab","")}`);
        if (buttonActive && tabActive) {
            buttonActive.classList.add("active");
            tabActive.classList.add("show", "active");
        }
    }

    return (
        <div className="d-flex">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h5 className="text-center p-2 fw-bold">Menu</h5>
                {
                    data.map((item, key) => 
                        <button 
                            key={key}
                            className={`nav-link ${key === 0 ? "active": ""}`} 
                            id={item.button+"-tab"} 
                            data-bs-toggle="pill" 
                            data-bs-target={"#"+item.button} 
                            type="button" 
                            role="tab" 
                            aria-controls={item.button}
                            aria-selected="true"
                            onClick={(e) => handleTab(e)}
                        >
                            {item.button}
                        </button>    
                    )
                }
            </div>
            <div className="tab-content d-flex justify-content-center p-2 w-100" id="v-pills-tabContent">
               {
                    data.map((item, key) => 
                        <div 
                            key={key}
                            className={`tab-pane fade ${key === 0 ? "show active": ""}`} 
                            id={item.button}
                            role="tabpanel" 
                            aria-labelledby={item.button+"-tab"}
                        >
                            <h3>{item.title}</h3>
                            {item.section}
                        </div>
                    )
               }
            </div>
        </div>
    );
}

VerticalNav.propTypes = {
    data: PropTypes.array.isRequired,
};

export default VerticalNav;