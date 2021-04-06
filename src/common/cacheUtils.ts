export function setLocalItem<T>(item: string, value: T): void {
  let stringT = JSON.stringify(value);
  localStorage.setItem(item, stringT);
}

export function getLocalItem<T>(item: string): T | null {
  let result = localStorage.getItem(item);
  if (result) {
    return JSON.parse(result);
  }
  return null;
}
