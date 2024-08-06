import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <div className="flex bg-[#0F0F0F] text-white py-4 px-8 justify-between">
      <div>
        <h3>
          <span className="text-[#309F77]">&lt;</span>EdwinP
          <span className="text-[#309F77]">/&gt;</span>
        </h3>
      </div>
      <div className="flex gap-6 ">
        <a
          href="https://www.linkedin.com/in/edwin-padilla-151792219"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>

        <a
          href="https://github.com/edwin24p"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
