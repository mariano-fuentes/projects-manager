const dataLoader = {
  loadData: () => {
    let projects = [];

    if (localStorage.length > 0) {
      Object.keys(localStorage).forEach((key) => {
        const project = localStorage.getItem(key);
        projects.push(JSON.parse(project));
      });
    }

    return projects;
  },
};

export default dataLoader;
