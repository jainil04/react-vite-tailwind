import React from 'react';
import ProjectItem from './ProjectItem';
import javascriptImg from '../assets/javascript.jpeg';
import nodejsImg from '../assets/nodejs.png';
import reactImg from '../assets/react.png';
import threejsImg from '../assets/threejs.png';
import vuejsImg from '../assets/vuejs.webp';
import vitejsImg from '../assets/vitejs.webp';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Technologies</h1>
      <p className="text-center py-8">Some of the Technologies I know</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={javascriptImg} title="JavaScript" />
        <ProjectItem img={nodejsImg} title="Node JS" />
        <ProjectItem img={reactImg} title="React JS" />
        <ProjectItem img={threejsImg} title="Three JS" />
        <ProjectItem img={vuejsImg} title="Vue JS" />
        <ProjectItem img={vitejsImg} title="Vite JS" />
      </div>
    </div>
  )
}

export default Projects
