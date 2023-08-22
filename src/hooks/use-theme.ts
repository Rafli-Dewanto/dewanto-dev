import { ThemeContext } from "@/context/theme.context";
import { useContext } from "react";

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error(
      "useTheme hook must be used inside an ThemeContextProvider",
    );
  } else {
    return context;
  }
}
