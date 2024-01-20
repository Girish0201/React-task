import React, { useState } from "react";
import Modal from "./Modal";

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
      <header className="fixed z-50 top-0 left-0 w-full bg-white p-4 border-b-2 border-[#B2B2B2] ">
        <div className="flex items-center justify-start gap-x-28">
          <div className=" flex overflow-x-auto items-center justify-between w-auto space-x-2">
            <div className="w-24 ">
              <img
                src="https://vector97.com/wp-content/uploads/2021/03/Vector97_logo.png"
                alt="vector-img"
              />
            </div>

            <div className="text-black w-auto text-sm font-normal  "></div>
          </div>
          <nav className="bg-white h-full w-full flex items-center hover:text-black space-x-4">
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
          <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </header>
    </>
  );
};

export default Header;
