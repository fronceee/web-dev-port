import React from 'react';
import Card from '../components/Card';
import { v4 as id } from 'uuid';
import { projectsData } from '../data/projectsData';

function Projects() {
  return (
    <div id='projects' className='mx-6 scroll-mt-20 md:mb-20'>
      <div>
        <h1 className={`text-5xl pb-1 mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900`}>Projects</h1>
      </div>
      <div className='h-fit flex flex-col md:flex-row justify-center md:gap-10 items-center'>
        {projectsData.map(item => <Card key={id()} item={item} />)}
      </div>
    </div>
  )
}

export default Projects