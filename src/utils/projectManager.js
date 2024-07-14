import { v4 as uuidv4 } from 'uuid';

const manager = {
  create: (title, description, date) => {
    const id = uuidv4();

    const newProject = {
      id,
      title,
      description,
      date,
    };

    localStorage.setItem(id, JSON.stringify(newProject));
  },
  delete: (id) => {
    localStorage.removeItem(id);
  },
};

export default manager;
