"use client";
/**
 * This component prevents the consecutive client-side routing to trigger the entrance animation in the '/' route.
 */

import { createContext, useContext, useEffect, useState } from "react";

type EntryAnimationContextValue = {
  hasLoaded: boolean;
  handleEntryAnimationComplete: () => void;
};

const EntryAnimationContext = createContext<EntryAnimationContextValue>({
  hasLoaded: true,
  handleEntryAnimationComplete: () => {},
});

export const useEntryAnimationContext = () => useContext(EntryAnimationContext);

export const EntryAnimationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  console.log(`hasLoaded re-rendered '${hasLoaded}'`);

  useEffect(() => {
    console.log(`hasLoaded has changed: '${hasLoaded}'`);
  }, [hasLoaded]);

  function handleEntryAnimationComplete() {
    setHasLoaded(true);
  }

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
