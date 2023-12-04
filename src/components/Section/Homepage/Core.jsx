
import React from 'react';

const Core = () => {
  return (
    <section className="bg-gray-100 py-12 border-y-4 border-green-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className='text-center'>PHILOSOPHY AND CULTURE</p>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">CORE STRENGTH</h2>
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-4">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center space-y-4"
            >
             <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={value.imageurl} />
    </div></div>
              <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
              <p className="text-gray-600 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const coreValues = [
  {
    id: '15316326996Pb5J',
    title: 'INNOVATORS',
    imageurl: 'https://i.ibb.co/kxGg56G/1550.jpg',
    description:
      'Progressive, enlightening forward-thinkers who engage in new ideas for better solutions and streamlining processes.',
  },
  {
    id: '1530005213C9ARK',
    title: 'COMMITMENT',
    imageurl: 'https://i.ibb.co/2MdFV7w/1551.jpg',
    description:
      'Commitment in all we do for our internal and external clients. First-rate and superior service. Ownership of the outcome.',
  },
  {
    id: '1530005213C9AK',
    title: 'INTEGRITY',
    imageurl: 'https://i.ibb.co/Y0Q0QxN/1552.jpg',
    description:
      'High standards of honesty and strong moral principles. Doing the right thing all the time without any exemptions.',
  },
  {
    id: '153000523C9ARK',
    title: 'DAUNTLESS',
    imageurl: 'https://i.ibb.co/yBNWFpG/1553.jpg',
    description:
      'Taking on challenges, difficult situations, demanding clients & tight deadlines without being reckless.',
  },
  {
    id: '1530005213C9AR',
    title: 'TEAMWORK',
    imageurl: 'https://i.ibb.co/tPF60vR/1554.jpg',
    description:
      'Teamwork is eminent in performing under any circumstances. We always cooperate & provide constructive feedback.',
  },
  
  
  
  
  
];

export default Core;

