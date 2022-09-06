const customersupport = require("../../assets/Images/home/customersupport.png");
const endlessoptions = require("../../assets/Images/home/endlessoptions.png");
const driveinconfidence = require("../../assets/Images/home/driveinconfidence.png");

const homeboxapi = [
  {
    id: 1,
    title: "24/7 Customer Support",
    description:
      "Roadside Assistance Live Email Support 24/7 Hotline for Emergencies After hour pick up and drop off.",
    iconPath: customersupport,
  },
  {
    id: 2,
    title: "Endless Options",
    description:
      `Coose from a wide variety of cars, trucks, vans and SUVs.${"\n"}Customize your own short-term rental for discounted daily or weekly rates.${"\n"}Select from out third-party insurance plans for your rental coveerage to limit any out-of-pocket expenses to you for any damages to your rental car.`,
    iconPath: endlessoptions,
  },
  {
    id: 3,
    title: "Drive in Confidence",
    description:
      "All rental vehicles receive regular maintenance and routine inspections.",
    iconPath: driveinconfidence,
  },
];
export default homeboxapi;
