import React from "react";

function Footer() {
  return (
    <>
      <div>
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/botImage.png"
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-2xl font-bold text-[#DFD0B8]">NEX.AI</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
