import { ActiveSectionContext } from "@/context/active-section.context";
import { useContext } from "react";

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSection hook must be used inside an ActiveSectionProvider",
    );
  } else {
    return context;
  }
}
