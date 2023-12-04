import React from 'react';
import { BiTask, BiCheck, BiError } from 'react-icons/bi';

const Stat = () => {
    return (
        <div className='m-4 pb-4 '> 
                    <div className="stats bg-gray-200 flex justify-around items-center	">
  
  <div className="stat">
      <div className="stat-figure text-secondary">
          <BiTask className="inline-block w-8 h-8 stroke-current" />
      </div>
      <div className="stat-title text-center my-5 text-black font-bold">Upcoming projects</div>
      <div className="stat-value text-center my-5 text-lime-500	">6</div>
  </div>

  <div className="stat">
      <div className="stat-figure text-secondary">
          <BiCheck className="inline-block w-8 h-8 stroke-current" />
      </div>
      <div className="stat-title text-center my-5 text-black font-bold">Complete projects </div>
      <div className="stat-value text-center my-5 text-lime-500	">32</div>
  </div>

  <div className="stat">
      <div className="stat-figure text-secondary">
          <BiError className="inline-block w-8 h-8 stroke-current" />
      </div>
      <div className="stat-title text-center my-5 text-black font-bold	">Unfinished projects </div>
      <div className="stat-value text-center my-5 text-lime-500">6</div>
  </div>

</div>
        </div>

    );
};

export default Stat;
