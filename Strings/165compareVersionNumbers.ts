const compareVersion = (version1: string, version2: string): number => {
  const version1Revisions = version1.split(".");
  const version2Revisions = version2.split(".");

  const maxRevisionsLength = Math.max(
    version1Revisions.length,
    version2Revisions.length
  );
  for (let i = 0; i < maxRevisionsLength; i++) {
    const version1Revision = Number(version1Revisions[i] ?? "0");
    const version2Revision = Number(version2Revisions[i] ?? "0");
    if (version1Revision < version2Revision) {
      return -1;
    }
    if (version1Revision > version2Revision) {
      return 1;
    }
  }
  return 0;
};

/**
optimal variant would be to have one pointer in each array and construct the numbers manually
for(int i=0, j=0; i<n1 || j<n2; i++, j++){
    while(i<n1 && v1[i]!='.'){
        x1=10*x1+(v1[i++]-'0');
    }
    while(j<n2 && v2[j]!='.'){
        x2=10*x2+(v2[j++]-'0');
    }
    if (x1<x2) return -1;
    else if (x1>x2) return 1;
    x1=0;
    x2=0;
}
return 0;
*/
