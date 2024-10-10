"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (showAllSkills, toggleShowAll) => (
      <div>
        <ul className='list-disc pl-2'>
          {showAllSkills ? (
            <>
              <li>Copywriting</li>
              <li>SEO</li>
              <li>Facebook Ads</li>
              <li>Google Ads</li>
              <li>Email Marketing</li>
              <li>Social Media</li>
              <li>Grafica per Social Media</li>
              <li>Video Editing</li>
              <li>Funnel Marketing</li>
              <li>Analisi Dati</li>
              <li>GA4/GTM</li>
              <li>Jotform</li>
              <li>ClickUp</li>
              <li>Excel</li>
              <li>Wordpress/Wix/Shopify</li>
            </>
          ) : (
            <>
              <li>Copywriting</li>
              <li>SEO</li>
              <li>Facebook Ads</li>
              <li>Google Ads</li>
            </>
          )}
        </ul>
        <button
          onClick={toggleShowAll}
          className="mt-2 text-blue-500 underline"
        >
          {showAllSkills ? "Chiudi" : "Leggi tutto"}
        </button>
      </div>
    ),
  },
  {
    title: "certifications",
    id: "certifications",
    content: () => (
      <ul className='list-disc pl-2'>
        <li>Master in Digital Marketing: start2impact University</li>
        <li>Diploma Superiore: Liceo Socio-psicopedagogico</li>
      </ul>
    ),
  },
  {
    title: "languages",
    id: "languages",
    content: () => (
      <ul className='list-disc pl-2'>
        <li>Italiano</li>
        <li>Inglese</li>
        <li>Spagnolo</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState('skills');
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const toggleShowAll = () => {
    setShowAllSkills((prev) => !prev);
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image className="hidden md:block" src="/images/about-image.png" alt="About" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Chi sono</h2>
          <p className='text-sm sm:text-base'>
            Ciao! Mi chiamo <strong>Miriam</strong>, l&apos;interesse per il Digital Marketing nasce dalla
            passione per il mondo online, dalla possibilità di essere libera di gestire il mio tempo.
            <br /> 
            Desidero <strong>lavorare per passione e non per riflesso</strong>, raggiungendo grandi obiettivi.
            Amo viaggiare, ed uscire dalla zona di comfort per mettermi costantemente alla prova.
            <br />  
            La cura della mente e del copro sono una costante. 
            Mi appassiona la creatività in ogni sua forma. 
            <br /> 
            Negli anni ho imparato a <strong>lavorare come singolo</strong>, ma anche in <strong>Team</strong> e ad assumermi la piena <strong>responsabilità</strong> del mio lavoro.
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
              Certificazioni{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange('languages')} 
              active={tab === 'languages'}
            >
              {" "}
              Lingue{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((data) => data.id === tab)?.content(showAllSkills, toggleShowAll)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
