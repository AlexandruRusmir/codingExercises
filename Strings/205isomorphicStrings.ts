const isIsomorphic = (s: string, t: string): boolean => {
  const mapFromSToT = new Map<String, String>();
  for (let i = 0; i < s.length; i++) {
    if (mapFromSToT.has(s[i]) && mapFromSToT.get(s[i]) !== t[i]) {
      return false;
    } else if (
      !mapFromSToT.has(s[i]) &&
      Array.from(mapFromSToT.values()).includes(t[i])
    ) {
      return false;
    } else {
      mapFromSToT.set(s[i], t[i]);
    }
  }
  return true;
};
