export default path => {
  const firstBackSlashRemoved = path.slice(1);
  const pathParts = firstBackSlashRemoved.split('/');
  const [pageName, subPageName] = pathParts;
  if (pathParts.length > 1) {
    return subPageName;
  }
  return pageName;
};
