import { useEffect } from "react";

type OutsideAlterterOptionsType = {
    onClickOutside: () => void;
} | undefined;

export default function useOutsideAlerter(refs: React.RefObject<HTMLDivElement>[], options: OutsideAlterterOptionsType) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
          const refIsClickedList = refs.map((ref) => {
              // returning false = you clicked outside.
            //   returning true = you clicked inside.
              if (ref.current && !ref.current.contains(event.target as Node)) return false;
              return true;
        })

        // If every element is false, then you clicked outside 
        if (refIsClickedList.every(element => element === false)) {
            options?.onClickOutside();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [refs]);
  }