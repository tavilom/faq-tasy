import { useState } from "react";

export const useMain = () => {
  const [state, setState] = useState(null);
  return { state, setState };
};
