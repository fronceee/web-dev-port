import React from 'react';
import { motion } from "framer-motion";
import { variants , item as motionItem } from "../staggerAntimation";
import { v4 as id } from 'uuid';
const jobPlaces = [
  { 
    place: 'Skooldio',
    title: 'Course Development Associate  (Tech / Coding)',
    time: 'July 2022 - Present',
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium']
    },
  { 
    place: 'Samsenwittayalai School',
    title: 'Student Teacher',
    time: 'Oct 2022 - March 2023',
    desc: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium']
    },
    { 
      place: 'Chulalongkorn University Demonstration\nSecondary School',
      title: 'Student Teacher',
      time: 'May 2022 - Oct 2022',
      desc: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium']
      },
    { 
      place: 'Algorithmics Thailand',
      title: 'Part-Time Python Teacher',
      time: 'Dec 2020 - Present',
      desc: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus vestibulum risus vitae urna interdum, et vestibulum nisi pretium']
      }
]

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
    <div id='experience' className='min-h-screen mx-6 max-w-sm scroll-mt-8'>
      <h1 className='text-5xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900'>
        Work Experience
      </h1>
      <div className='w-full h-16 flex items-center overflow-y-scroll snap-x mb-4'>
        <ul className='tab flex flex-col'>
          {jobPlaces.map((item,index) => (
          // set back to inline-block due to the tab's 'inline-flex' display
            <li key={id()} onClick={() => setCurrentIndex(index)} 
            className={`transition-all tab tab-bordered ${isIndexMatch(index, currentIndex) && `tab-active text-white`} inline-block snap-start ${checkCUD(item.place) ? `text-xs leading-3 whitespace-pre-wrap`: `text-base`}`} >
              <a key={id()}>{item.place}</a></li>
          ))}
        </ul>
      </div>
      {renderSelectedJob(currentIndex)}
    </div>
  )
}

export default Experience