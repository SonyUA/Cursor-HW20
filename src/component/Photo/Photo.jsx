import ph1 from "../img/2.webp";
import ph2 from "../img/3.jpg";
import ph3 from "../img/4.jpg";
import ph4 from "../img/5.jpg";
import ph5 from "../img/6.jpg";
import ph6 from "../img/7.jpg";
const Photo = () => {
    return (
        <>
            <img className="photo__img" src={ph1} alt=""/>
            <img className="photo__img" src={ph2} alt="" />
            <img className="photo__img" src={ph3} alt="" />
            <img className="photo__img" src={ph4} alt="" />
            <img className="photo__img" src={ph5} alt="" />
            <img className="photo__img" src={ph6} alt="" />
        </>
    );
}
export default Photo