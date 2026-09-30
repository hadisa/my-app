import React from "react";

const ServiceCard1 = ({ service }) => {
    const Icon = service.icon;

    return (
        <div
            className="
                flex
                min-h-[236px]
                flex-col
                rounded-[4px]
                border
                border-gray-300
                bg-white
                p-4
                transition
                duration-200
                hover:-translate-y-0.5
                hover:border-[#c97943]
                hover:shadow-sm
            "
        >
            {/* Icon */}
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#fff3c9]">
                <Icon
                    size={15}
                    strokeWidth={1.7}
                    className="text-[#a84a0d]"
                />
            </div>

            {/* Title */}
            <h3 className="text-[13px] font-semibold leading-tight text-black">
                {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-[9px] leading-[1.45] text-gray-600">
                {service.description}
            </p>

            {/* Features */}
            <ul className="mt-3 space-y-[3px]">
                {service.features.map((feature, featureIndex) => (
                    <li
                        key={featureIndex}
                        className="flex items-center gap-1 text-[8px] leading-tight text-gray-500"
                    >
                        <span className="text-[#a84a0d]">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button
                type="button"
                className="
                    mt-auto
                    w-full
                    rounded-[3px]
                    border
                    border-[#b84b0b]
                    bg-white
                    py-[5px]
                    text-[8px]
                    font-medium
                    text-[#a83f08]
                    transition
                    hover:bg-[#a83f08]
                    hover:text-white
                "
            >
                Learn More
            </button>
        </div>
    );
};

export default ServiceCard1;
