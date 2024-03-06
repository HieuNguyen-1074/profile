import React from 'react';
import Image from 'next/image';

const ProjectDescription = ({
  company,
  level,
  projectName,
  role,
  tabs,
  technical,
  tool,
  timeJoin,
}) => {
  const colorsForSkill = {
    Javascript: '#e49756',
    Vue2: '#5b305a',
    Vuetify: '#9a4c68',
    Git: '#7fcbd7',
    Gitlab: '#857ebb',
    Jira: '#ca9dd7',
    Fabricjs: '#facbd3',
    Paperjs: '#f96d6d',
    Jquery: '#b84d69',
    Sourcetree: '#8fb1e9',
    ReactJS: '#714433',
    Antd: '#c46352',
  };
  return (
    <div className='ml-10'>
      <div className='flex justify-between'>
        <p className=''>{projectName}</p>
        <p className=''> {role}</p>
      </div>
      <div className='ml-5 mt-4'>
        <div className='flex gap-3 flex-wrap'>
          {technical.map((te) => {
            return (
              <p
                key={te}
                style={{
                  background: `${colorsForSkill[te]}`,
                }}
                className='rounded-xl px-5  text-white'>
                {te}
              </p>
            );
          })}
        </div>
        <div className='flex gap-3 flex-wrap mt-2'>
          {tool.map((to) => {
            return (
              <p
                key={to}
                style={{
                  background: `${colorsForSkill[to]}`,
                }}
                className='rounded-xl px-5 text-white'>
                {to}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
