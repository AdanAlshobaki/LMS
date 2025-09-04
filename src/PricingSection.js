import "./App.css";
import { TbBook2 } from "react-icons/tb";



const pricingPlans = [
  {
    title: "Free",
    monthly: "$0",
    period: "/Month",
    upgrade: "Upgrade as you need",
    features: [
      "Learn at your own pace",
      "Access to limited courses",
      "Community support",
        " Learn at your own pace",
          " Learn at your own pace",
            " Learn at your own pace",
    ],
  },
  {
    title: "Saver plan",
    monthly: "$29",
    period: "/Month",
    upgrade: "$348 Per Year",
    features: [
      "Learn at your own pace",
      "Full course access",
      "Priority support",
        " Learn at your own pace",
          " Learn at your own pace",
            " Learn at your own pace",
    ],
  },
  {
    title: "Unlimited plan",
    monthly: "$49",
    period: "/Month",
    upgrade: "$588 Per Year",
    features: [
      "All courses included",
      "1-on-1 mentorship",
      "Certificate of completion",
      " Learn at your own pace",
        " Learn at your own pace",
          " Learn at your own pace",
      
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="single-pricing">
            <div className="price-head">
                 <h2>{plan.title}</h2>
              <h1>{plan.monthly}</h1>
             
              <span>{plan.period}</span>
              <span className="upgrade_price">{plan.upgrade}</span>
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="checkmark"><TbBook2 /></span> {feature}
                </li>
              ))}
            </ul>
            <a href="price#" className="price_btn">Start Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}
