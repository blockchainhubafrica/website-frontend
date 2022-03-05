import { useEffect, useState } from "react";

const largeCutText = (text: string) =>
  `${text.substring(0, 8)}...${text.substring(text.length - 6)}`;

const smallCutText = (text: string) =>
  `${text.substring(0, 3)}...${text.substring(text.length - 2)}`;

function useShortAddress(address: string) {
  if (!address) address = "********";

  largeCutText(address);
}

export { useShortAddress };
