import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Features = ({features}) => {
    return (
        <div>
            <p className="flex items-center gap-1"><IoIosCheckmarkCircle className="text-xl text-green-400"></IoIosCheckmarkCircle>{features}</p>
        </div>
    );
};

Features.PropTypes = {
    features:PropTypes.string
}


export default Features;