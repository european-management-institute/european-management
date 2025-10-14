import React from "react";
import { useNavigate } from "react-router-dom";

const Tree = () => {
  return (
    <main className="">
      <nav className="w-full mx-auto px-4">
        <TreeList>
          <TreeItem label="OUTSOURCED MANAGEMENT" link="/management" children={null} />
          <TreeItem label="PUBLIC POLICY" link="/digital" children={null} />
          <TreeItem label="INSTITUTE" link="/e-learning" children={null} />
        </TreeList>
      </nav>
    </main>
  );
};

const TreeList = ({ children }) => {
  return (
    <ul className="relative pt-5 flex justify-center w-full">{children}</ul>
  );
};

const TreeItem = ({ label, children, className = "", link }) => {
  const navigate = useNavigate();
  return (
    <li
      className={`
      relative max-w-[200px] pt-12 text-center list-none ${className}
      ${children ? "w-full" : ""}
      ${
        children
          ? ""
          : "last:before:border-r-2 last:before:rounded-tr-md first:after:rounded-tl-md"
      }
      before:content-[''] before:absolute before:top-0 before:right-1/2 before:w-1/2 
      before:h-24 before:border-t-2 before:border-gray-300
      after:content-[''] after:absolute after:top-0 after:left-1/2 after:w-1/2 
      after:h-24 after:border-t-2 after:border-l-2 after:border-gray-300
      [&:only-child]:pt-0 [&:only-child]:before:hidden [&:only-child]:after:hidden
      first:before:border-0 last:after:border-0
    `}
    >
      <a
        href="#"
        className={`
          inline-block px-6 py-3  my-12 rounded-md
          text-white no-underline uppercase text-xl font-medium font-MN
          transition-all duration-400 min-w-[200px]
          hover:bg-[#002952] hover:border-[primary-900] hover:text-gray-50
          group  
        `}
        onClick={() => navigate(link)}
      >
        {label}
      </a>
      {children && (
        <div
          className="w-full group-hover:[&>ul>li>a]:bg-[#c8e4f8] 
                         group-hover:[&>ul>li>a]:border-[#94a0b4] 
                         group-hover:[&>ul>li>a]:text-black
                         group-hover:[&>ul]:before:border-[#94a0b4]
                         group-hover:[&>ul>li]:before:border-[#94a0b4]
                         group-hover:[&>ul>li]:after:border-[#94a0b4]"
        >
          {children}
        </div>
      )}
    </li>
  );
};

export default Tree;
