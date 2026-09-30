import { Check } from "lucide-react";

const ServiceCard = ({ item }) => {

  const Icon = item.icon;

  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
      {/* Icon */}
      <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
        <Icon
          size={32}
          strokeWidth={2}
          className="text-orange-700"
        />
      </div>

      {/* Title */}
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">
        {item.title}
      </h2>

      {/* Description */}
      <p className="mb-6 text-base leading-[1.6] text-gray-600">
        {item.description}
      </p>

      {/* Features */}
      <ul className="mb-6 space-y-2">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <Check
              size={18}
              strokeWidth={2}
              className="shrink-0 text-orange-700"
            />
            <span>{feature}</span>
            </li>
        ))}
      </ul>

      {/* Button */}
      <button
        type="button"
        className="w-full rounded-md border border-orange-700 px-5 py-2.5 text-sm font-medium text-orange-700 transition-colors duration-200 hover:bg-orange-700 hover:text-white"
      >
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;