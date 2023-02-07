/**
 * This component prevents the consecutive client-side routing to trigger the entrance animation in the '/' route.
 */

import useHasMounted from "@/hooks/useHasMounted";
import { createContext, useContext, useEffect, useState } from "react";

type EntryAnimationContextValue = {
  hasLoaded: boolean;
  handleEntryAnimationComplete: () => void;
};

const EntryAnimationContext = createContext<EntryAnimationContextValue>({
  hasLoaded: false,
  handleEntryAnimationComplete: () => {},
});

export const useEntryAnimationContext = () => useContext(EntryAnimationContext);

export const EntryAnimationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  function handleEntryAnimationComplete() {
    setHasLoaded(true);
  }

  useEffect(() => {
    console.log({
      hasLoaded: hasLoaded,
    });
  }, [hasLoaded]);

  const value: EntryAnimationContextValue = {
    hasLoaded: hasLoaded,
    handleEntryAnimationComplete: handleEntryAnimationComplete,
  };

  return (
    <EntryAnimationContext.Provider value={value}>
      {children}
    </EntryAnimationContext.Provider>
  );
};
