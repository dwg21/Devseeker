import React from "react";

import { Waveform } from "@uiball/loaders";

const Loader = () => {
  return (
    <div className="p-8 flex items-center justify-center flex-col gap-4">
      <p className="font-bold">Scrapping Jobs</p>
      <Waveform size={60} lineWeight={3.5} speed={1} color="#001eb3" />
    </div>
  );
};

export default Loader;
