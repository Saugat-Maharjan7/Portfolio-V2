import {projects} from "../Datas/projects"

const menuItems = [
    {
      id: 1,
      label: '//About',
      url:"/about",
      
    },
    {
      id: 2,
      label: '//Projects',
      children: projects.map((project) => ({
        id: project.id,
        label: project.title,
        url: project.link,
      })),
    },
    {
        id: 3,
        label: 'Contact',
        url:"/contact",

      },
    
  ];
  
  export default menuItems;
  