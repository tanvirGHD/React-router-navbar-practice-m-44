import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

const PriceOptions = [
    {
      "id": 1,
      "name": "Basic",
      "price": 30,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 personal training session per month",
        "Free parking",
        "Wi-Fi access",
        "Daily workout plan access",
        "Basic health assessment"
      ]
    },
    {
      "id": 2,
      "name": "Standard",
      "price": 50,
      "currency": "USD",
      "features": [
        "Access to gym equipment",
        "Locker room and shower access",
        "3 personal training sessions per month",
        "Access to group fitness classes",
        "Free parking",
        "Wi-Fi access",
        "Monthly progress tracking",
        "Access to virtual training sessions",
        "10% discount on supplements"
      ]
    },
    {
      "id": 3,
      "name": "Premium",
      "price": 80,
      "currency": "USD",
      "features": [
        "Unlimited gym equipment access",
        "Priority locker and shower access",
        "5 personal training sessions per month",
        "Access to group fitness and yoga classes",
        "Free nutrition consultation",
        "VIP parking",
        "Customized workout plan",
        "Free guest pass twice a month"
      ]
    }
  ]

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-4xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4">
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
