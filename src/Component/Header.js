import React, { useState } from "react";
import Modal from "./Modal";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const navItems = [
    "Tickets",
    "Communication",
    "Negotiation",
    "Panel",
    "Client Approval Flow",
    "Work Bench"
  ];

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="fixed z-50 top-0 left-0 w-full bg-white md:p-4 p-1 border-b-2 border-[#B2B2B2] ">
        <div className="flex flex-col md:flex-row items-center justify-start gap-1 md:items-center overflow-x-scroll md:justify-start md:gap-x-[5rem]">
          <div className=" flex items-center justify-between w-auto space-x-2">
            <div className="md:w-24 w-16 mt-2 ">
              <img
                src="https://vector97.com/wp-content/uploads/2021/03/Vector97_logo.png"
                alt="vector-img"
              />
            </div>

            <div className="text-black w-auto text-sm font-normal  "></div>
          </div>
          <div className="flex justify-between items-center ml-3">
            <nav className="bg-white overflow-x-scroll h-full w-full flex items-center hover:text-black space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-[#B2B2B2] ${
                    activeNavItem === index ? "underline-offset-4" : ""
                  } hover:text-black `}
                  onMouseEnter={() => setActiveNavItem(index)}
                  onMouseLeave={() => setActiveNavItem(null)}
                  onClick={() => handleNavItemClick(index)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={handleOpenModal}
                className="text-white p-2 bg-[#00A89E] rounded-xl"
              >
                Negotation
              </button>
            </nav>
              <div>
                <CiSearch className="text-xl px-3 "/>
              </div>



          </div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </header>
    </>
  );
};

export default Header;
