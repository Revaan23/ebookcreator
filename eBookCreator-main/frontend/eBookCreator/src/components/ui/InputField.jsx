import React from "react";

const InputField = ({
  icon: Icon,
  label,
  name,

  ...props
}) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label htmlFor={name} className="block text-sm font-medium text-slate-700">
        {label}
      </label>

      {/* Input wrapper */}
      <div className="relative">
        {/* Icon */}
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className=" w-4 h-4 text-slate-400" />
          </div>

        )}

        {/* Input */}
        <input
          id={name}
          name={name}
          {...props}
          className={`w-full h-12 rounded-xl border border-slate-200
    pl-12 pr-4 text-sm placeholder-slate-400
    focus:outline-none focus:ring-2 focus:ring-violet-500
    ${props.className || ""}`}

        />
      </div>
    </div>
  );
};

export default InputField;
