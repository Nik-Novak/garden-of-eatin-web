export function flattenObject<T extends object>(ob:T|undefined|null, stringify:boolean = false) {
  if(!ob) return {};
  let toReturn = {} as Record<string, any>;

  for (let i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (ob[i] instanceof Date) {
        toReturn[i] = stringify ? String(ob[i]) : ob[i];
      } else if ((typeof ob[i]) == 'object' && ob[i] !== null) {
          let flatObject = flattenObject(ob[i] as T);
          for (let x in flatObject) {
              if (!flatObject.hasOwnProperty(x)) continue;

              toReturn[i + '.' + x] = flatObject[x];
          }
      } else {
          toReturn[i] = stringify ? String(ob[i]) : ob[i];
      }
  }
  return toReturn;
}