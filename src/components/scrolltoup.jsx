import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide the button
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 bg-gradient-to-r from-blue-700 to-blue-800 text-theme_4 z-[999] rounded-sm shadow-lg transition-opacity transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-500`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={16} className="text-white" />
    </button>
  );
};

export default ScrollToTopButton;
