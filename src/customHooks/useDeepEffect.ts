import { isDeepEqual } from "@src/common/utils";
import { useEffect, useRef } from "react";

export function useDeepEffect(fn: Function, deps: any[]) {
  const first = useRef(true);
  const preDeps = useRef(deps);

  useEffect(() => {
    let isEqual = preDeps.current.every((v, i) => isDeepEqual(v, deps[i]));
    if (first.current || !isEqual) {
      fn();
    }
    first.current = false;
    preDeps.current = deps;
  }, deps);
}
