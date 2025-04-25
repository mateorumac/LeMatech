import { useNavigate, useLocation } from "react-router-dom";

const LanguageSwitcher = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = (langCode) => {
        const pathSegments = location.pathname.split("/").filter(segment => segment !== "");
        pathSegments[0] = langCode;
        const newPath = "/" + pathSegments.join("/");
        navigate(newPath, { replace: true });
    };

    return (
        <div className="language-switcher">
            <select onChange={(e) => changeLanguage(e.target.value)}>
                <option value="en">🇬🇧 EN</option>
                <option value="hr">🇭🇷 HR</option>
                <option value="it">🇮🇹 IT</option>
                <option value="de">🇩🇪 DE</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;