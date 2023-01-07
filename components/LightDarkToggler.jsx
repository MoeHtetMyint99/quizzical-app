import { FaSun, FaMoon } from 'react-icons/fa';
import styles from '../styles';

export default function LightDarkToggler({ toggleDark, isDark }) {
  return (
    <button
      type="button"
      aria-hidden="true"
      className=" toggleSlider absolute top-8 right-[30px] lg:right-[80px] w-[50px] h-[24px] border-[4px] hover:cursor-pointer hocus:outline-blue-100 hocus:outline hocus:outline-4"
      onClick={toggleDark}
      // preventing default behavior of selecting text
      onMouseDown={(event) => event.preventDefault()}
    >
      <div
        className={`${styles.flexCenter} toggleSphere absolute w-[26px] h-[26px] -top-[5px] bg-red-600 rounded-full transition-all ${isDark ? '-right-[5px]' : 'right-[calc(100%-21px)]'}`}
      >
        {
          isDark
            ? <FaMoon className="transition-all duration-1000 text-[#ffffff]" />
            : <FaSun className="transition-all duration-1000 text-[#ffff00]" />
        }
      </div>
    </button>
  );
}
