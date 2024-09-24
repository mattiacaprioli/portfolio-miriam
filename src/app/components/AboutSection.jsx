"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    )
  },
  {
    title: "certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Bachelor in Computer Science</li>
        <li>University of Toronto</li>
      </ul>
    )
  },
  {
    title: "languages",
    id: "languages",
    content: (
      <ul className='list-disc pl-2'>
        <li>Full Stack Web Development</li>
        <li>Udemy</li>
      </ul>
    )
  }
]

function AboutSection() {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/about-image.png" alt="About" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with a passion for creating interactive and responsive web applications.
            I have experience working with JavaScript, React, Node.js, and other web technologies. I am always looking
            to learn new things and improve my skills. I am currently looking for new opportunities to work on exciting
            projects and collaborate with other developers.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton 
              selectTab={() => handleTabChange('skills')} 
              active={tab === 'skills'}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange('certifications')} 
              active={tab === 'certifications'}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange('languages')} 
              active={tab === 'languages'}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
