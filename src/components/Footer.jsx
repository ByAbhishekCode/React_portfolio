const Footer = () => {
  return (
    <footer className="bg-[#161616] text-[#b74b4b] py-6 px-4 mt-10 border-t border-[#b74b4b]">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-3 text-center">
        {/* Main Text */}
        <div className="w-full px-3 py-1">
          <p className="text-base flex flex-wrap justify-center items-center gap-1 text-white">
            <span>{new Date().getFullYear()}</span> &nbsp; Created & Designed by{" "}
            <span className="font-bold text-[#e44d26] hover:underline cursor-pointer">
              Abhishek
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
