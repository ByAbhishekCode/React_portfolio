import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialIcons = () => {
  const iconClasses =
    "w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#b74b4b] text-[#b74b4b] transition duration-300 bg-transparent hover:bg-[#b74b4b] hover:text-black hover:shadow-[0_0_25px_#b74b4b] active:scale-95";

  return (
    <div className="flex gap-3 mt-4 lg:mt-6 lg:gap-5 justify-center lg:justify-start">
      <a
        href="https://www.linkedin.com/in/abhishek-kumarlink/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClasses}
      >
        <FaLinkedin className="text-lg lg:text-xl" />
      </a>
      <a
        href="https://github.com/abhishek"
        target="_blank"
        rel="noopener noreferrer"
        className={iconClasses}
      >
        <FaGithub className="text-lg lg:text-xl" />
      </a>
      <a href="mailto:abhishek@email.com" className={iconClasses}>
        <MdEmail className="text-lg lg:text-xl" />
      </a>
      <a href="tel:+919876543210" className={iconClasses}>
        <FaPhone className="text-lg lg:text-xl" />
      </a>
    </div>
  );
};

export default SocialIcons;
