


import { useState } from 'react';

// Fake data for demonstration
const fakeProjects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    imageUrl: 'https://shelterhousingltd.com/wp-content/uploads/2022/02/01.-NN-Pinnacle-8d-thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    imageUrl: 'https://shelterhousingltd.com/wp-content/uploads/2021/11/shelter-VALENCIA-night-2-thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3',
    imageUrl: 'https://shelterhousingltd.com/wp-content/uploads/2019/09/b13.jpg',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for Project 4',
    imageUrl: 'https://shelterhousingltd.com/wp-content/uploads/2019/09/b14.jpg',
  },
];

const Upcoming = () => {
  const [projects] = useState(fakeProjects);

  return (
    <div
      className="py-10 bg-cover bg-center border-y-4 border-green-400"
      style={{
        backgroundImage: 'url("https://shantaholdings.com/themes/real_estate/assets/img/cy-sketch.jpg")',
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
