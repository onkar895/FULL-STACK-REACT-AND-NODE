/* eslint-disable react/prop-types */


const IconWithTooltip = ({ children, tooltip }) => {
  return (
    <div className="relative group">
      <div className="text-slate-500 hover:text-black cursor-pointer">
        {children}
      </div>
      {/* Tooltip */}
      <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bottom-full left-1/2 -translate-x-1/2 mb-1 px-3 py-1 bg-gray-900 text-white tracking-widest text-sm rounded-md whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  )
}

export default IconWithTooltip
