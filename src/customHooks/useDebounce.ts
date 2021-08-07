import { useRef } from "react";

function debounce(fn: Function, _time: number = 300) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  let _this = this;
  return (...args: any[]) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn.apply(_this, args);
      timer.current = null;
    }, _time);
  };
}

export function useDebounce(fn: Function, time: number) {
  return debounce(fn, time);
}
