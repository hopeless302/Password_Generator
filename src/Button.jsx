import { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="relative inline-block w-[95px] h-[50px] bg-gray-800 rounded-full cursor-pointer"
      onClick={handleChange}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="opacity-0 w-0 h-0"
      />
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 h-[40px] w-[40px] rounded-full bg-white transition-transform duration-300 ${
          isChecked ? 'left-[74%]' : 'left-[26%]'
        }`}
      >
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] bg-yellow-400 rounded-full shadow-inner">
            <div className="absolute top-1/2 left-[-22px] transform -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] bg-gray-300 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-[16px] h-[16px] border-l-[6px] border-white clip-circle"></div>
          </div>
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 h-[40px] w-[40px] rounded-full bg-gray-300 transition-transform duration-300 ${
            isChecked ? 'left-1/2' : '-left-1/2'
          }`}
        >
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[25px] h-[25px] bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
