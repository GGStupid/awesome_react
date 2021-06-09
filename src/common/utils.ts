/**
 * 判断是否是对象
 * @param o
 * @returns
 */
export function isObject(o: unknown): boolean {
  return typeof o === "object" && o !== null;
}

/**
 * isDeepEqual：不考虑特殊情况：NaN,0,-0
 * @param o
 * @param v
 */
export function isDeepEqual(o: any, v: any): boolean {
  // 是否是基础类型
  if (!isObject(o) || !isObject(v)) {
    return o === v;
  }

  // 判断keys 长度是否相同
  let oKeys = Object.keys(o);
  let vkeys = Object.keys(v);
  if (oKeys.length !== vkeys.length) return false;

  // 判断keys string 是否相同
  let oKeysStr = oKeys.toString();
  let vkeysStr = vkeys.toString();
  if (oKeysStr !== vkeysStr) return false;

  // 递归判断
  for (let i in o) {
    let r = isDeepEqual(o[i], v[i]);
    if (!r) {
      return false;
    }
  }

  return true;
}
