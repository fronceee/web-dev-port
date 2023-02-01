import React from 'react';
import { motion } from "framer-motion";
import { variants , item as motionItem } from "../staggerAntimation";
import { v4 as id } from 'uuid';
import { jobPlaces } from '../data/jobPlaces'

variants.show.transition = {
  ...variants.show.transition, 
  staggerChildren: 0.2,
  ease: "circIn"
}


function Experience() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  function isIndexMatch(indexOne, indexTwo) {
    return indexOne === indexTwo
  }
  
  function checkCUD(place) {
    return place === 'Chulalongkorn University Demonstration\nSecondary School'
  }
  
  function renderSelectedJob(index) {
    const data = jobPlaces.at(index)
    return (
      <motion.div 
        variants={variants} 
        initial="hidden"
        animate="show"
        exit="hidden"
        key={id()}>
          {/* add key to let motion.div to track */}
        <motion.div variants={motionItem}>
          <h1 className='font-semibold text-2xl leading-8 whitespace-pre-wrap'>{data.title}</h1>
          <h3 className={`${checkCUD(data.place) ? `leading-3 text-xs` : `leading-4 text-sm`} mb-2 font-thin`}>{data.place}</h3>
          <h2 className='text-sm font-light mb-4'>{data.time}</h2>
        </motion.div >
        <motion.div variants={motionItem}>
          <ul className='list-disc pl-4'>
            {data.desc.map(duty => <li className='mb-4' key={id()}>{duty}</li>)}
          </ul>
        </motion.div >
      </motion.div >
      )
  }
  return (
    <div id='experience' className='mx-6 scroll-mt-20 mb-20 max-h-fit flex flex-col justify-center items-center'>
      <h1 className='self-start text-5xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900'>
        Work Experience
      </h1>
      <div className='w-full flex flex-col md:flex-row md:max-w-screen-md md:h-96 md:mt-20'>
        <div className='w-full h-16 md:h-fit md:w-fit flex scrollbar-thin scrollbar-thumb-white scrollbar-thumb-rounded-full overflow-y-scroll md:overflow-hidden snap-x pb-4 mb-4'>
          <ul className='tabs flex flex-col md:flex-row md:h-full md:justify-end md:w-[34em] md:mr-4'>
            {jobPlaces.map((item,index) => (
            // set back to inline-block due to the tab's 'inline-flex' display
              <li key={id()} onClick={() => setCurrentIndex(index)} 
              className={`tab tab-bordered ${isIndexMatch(index, currentIndex) && `tab-active text-white`} inline-block snap-start ${checkCUD(item.place) ? `text-xs leading-3 whitespace-pre-wrap`: `text-base`} md:h-12 md:flex`} >
                <a key={id()}>{item.place}</a></li>
            ))}
          </ul>
          {/* <div className='border relative right-[1.06em]'></div> */}
        </div>
        <div className='grow'>
          {renderSelectedJob(currentIndex)}
        </div>
      </div>
    </div>
  )
}

export default Experience