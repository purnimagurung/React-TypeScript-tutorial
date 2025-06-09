const OrderSteps = () => {
  const steps = [
    {
      title: "Order",
      desc: "We've Received your order!",
      sub: "Awaiting Restaurant acceptance",
    },
    {
      title: "Order",
      desc: "Order Accepted! ✅",
      sub: "Your order will be delivered shortly",
    },
    {
      title: "Order",
      desc: "Your rider’s nearby 🎉",
      sub: "They’re almost there – get ready!",
    },
  ];

  return (
    <div className="absolute top-4 right-6 space-y-6 z-20">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative bg-white rounded-lg p-4 shadow-md text-black pl-10 transition-all duration-300
            ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-8'}
          `}
        >
          {/* Optional step number (uncomment if needed) */}
          {/* <div className="absolute -left-6 top-1 text-5xl font-bold text-orange-200"> {index + 1} </div> */}
          <span className="text-orange-500 font-bold text-lg"> {step.title} </span>
          <p className="text-sm">
            {step.desc} <br />
            <span className="text-gray-500"> {step.sub} </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrderSteps;
