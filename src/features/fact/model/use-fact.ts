import { useFactQuery } from "entities/fact";
import { useEffect, useRef, useState } from "react";
import { findIndexAfterFirstWord } from "shared/utils";

export function useFact() {
  const [fact, setFact] = useState("");
  const { refetch, isFetching, data } = useFactQuery();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    refetch();
  };

  useEffect(() => {
    if (!data) return;

    const { fact } = data;
    setFact(fact);

    const firstNonAlphanumericIndex = findIndexAfterFirstWord(fact);
    const inputElement = inputRef.current;

    if (firstNonAlphanumericIndex === -1) return;
    if (!inputElement) return;

    const timer = setTimeout(() => {
      inputElement.focus();
      inputElement.setSelectionRange(
        firstNonAlphanumericIndex,
        firstNonAlphanumericIndex
      );
    }, 0);

    return () => clearTimeout(timer);
  }, [data]);

  return { fact, inputRef, handleClick, isFetching, setFact };
}
