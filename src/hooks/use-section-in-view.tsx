import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useActiveSection } from "./use-active-section";
import type { SectionName } from "@/utils/types/section-name";

export default function useSectionInView(
  sectionName: SectionName,
  amount = 0.5,
) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [setActiveSection, isInView, timeOfLastClick, sectionName]);

  return { ref };
}
