export default function Footer({dark}:{dark:boolean}){
  const year = new Date().getFullYear();

  return (
    <footer
      className={`d-flex justify-content-center w-full border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
      aria-label="Site footer"
    >
        <div className="flex flex-col md:flex-row items-center justify-between text-center" style={{color:`${dark ? "var(--color-6)" : "var(--color-1)"}`,fontSize : "0.8rem"}}>
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
