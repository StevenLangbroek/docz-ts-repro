module.exports = {
  title: "Docz Typescript Repro",
  typescript: true,
  filterComponents: files => {
    const result = files.filter(
      filepath =>
        /\/[A-Z]\w*\.(js|jsx|ts|tsx)$/.test(filepath) ||
        filepath.includes(".tsx") ||
        filepath.includes(".jsx")
    );
    return result;
  }
};
