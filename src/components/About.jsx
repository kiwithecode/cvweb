import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>¿Quién soy yo?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Soy un apasionado desarrollador de software especializado en TypeScript y JavaScript, con una sólida experiencia en frameworks de vanguardia como React.js, Node.js, Three.js, Angular y ViteJS. Mi enfoque se centra en el desarrollo de soluciones innovadoras y escalables, siempre con la mira puesta en la eficiencia y la facilidad de uso.<br/> Mi habilidad para aprender rápidamente y mi dedicación a trabajar en estrecha colaboración con los clientes me permite transformar desafíos complejos en aplicaciones impactantes y funcionales.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Mi compromiso no solo radica en la programación, sino también en comprender y resolver problemas del mundo real a través de la tecnología. Estoy constantemente buscando superar los límites de lo posible, aportando creatividad y perspectiva fresca a cada proyecto. Si buscas un profesional que pueda convertir tus ideas en realidades tecnológicas innovadoras y efectivas, estaré encantado de colaborar contigo y llevar tus proyectos al siguiente nivel. ¡Contacta conmigo para explorar cómo podemos dar forma al futuro juntos!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");