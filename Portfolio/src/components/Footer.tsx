import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`d-flex justify-content-center w-full border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${className}`}
      aria-label="Site footer"
    >
        <div className="flex flex-col md:flex-row items-center justify-between text-center" style={{color:"var(--color-6)",fontSize : "0.8rem"}}>
          <p className=" m-0 mb-1"> 
            Built and designed by <span className="font-medium">Niusha Ebrahimi</span>
          </p>

          <p className="m-0 mb-2"> 
            All rights reserved- © {year} 
          </p>
        </div>
    </footer>
  );
};

export default Footer;
