import PropTypes from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({option}) => {

    const {name,price,features} = option;


    return (
        <div className="border flex flex-col p-2 bg-purple-500 text-white rounded-lg space-y-5">
            <h2 className="text-center">
                <span className="text-4xl">Price: {price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h2 className="text-center">{name}</h2>
            <div className="flex-grow">
            {
                features.map((features, index) => <Features key={index} features={features}></Features>)
            }
            </div>
            <button className="mt-4 w-full bg-green-500 font-bold text-lg hover:bg-green-700 p-2 rounded-lg">Buy Now</button>
        </div>
    );
};

PriceOption.PropTypes = {
    option:PropTypes.object
}

export default PriceOption;
