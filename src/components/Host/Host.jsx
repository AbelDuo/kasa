import starActive from "../../assets/images/star-active.png";
import starInactive from "../../assets/images/star-inactive.png";
import "../Host/Host.scss";

const Host =  ({rating, firstName, lastName, picture}) => {
    const starArray = Array(5).fill(null); //initialisation d'un array de 5 elements nuls
    const ActiveStar = () => <img src={starActive} className="rating-icon" alt="activeStar" />;
    const InactiveStar = () => <img src = {starInactive} className="rating-icon" alt="inactiveStar"/>;


    return (
        <div className="ownerInfo">
            <div className="hostInfo">
                <div className="hostName">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                <img className="hostPicture" src={picture} alt="hostName"/>
            </div>
            <div className="rating">
            {starArray.map((_, index) => (index < rating ? <ActiveStar key={index} /> : <InactiveStar key={index} />))}
            </div>
        </div>
    );
};

export default Host;