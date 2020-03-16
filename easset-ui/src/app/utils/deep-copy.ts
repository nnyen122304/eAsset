/**
 * オブジェクトクローン
 * @param obj コピーするオブジェクト
 */
export function DeepCopy(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || 'object' !== typeof obj) {
    return obj;
  }

  // Handle Date
  if (typeof obj.getMonth === 'function') {
    copy = new Date(obj);
    return copy;
  } else if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
          copy[i] = DeepCopy(obj[i]);
      }
      return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = DeepCopy(obj[attr]);
          }
      }
      return copy;
  }

  throw new Error('Copy failed');
}
