import React from 'react';
import { motion } from 'framer-motion';
import { item } from "../staggerAntimation";
function Card(props) {
    const {name,desc,linktoProj,img,skills} = props.item
    return (
        <motion.div 
            initial={item.hidden}
            whileInView={item.show}
            key={props.id}>
            <div className="card w-[320px] bg-base-300 shadow mb-10">
                <figure className='w-full h-60 object-cover'><img className='w-full object-cover' src={img} alt="website project" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                    <div className='card-action'>
                        <a href={linktoProj} target="_blank"><button className="btn btn-primary">Try It!</button></a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card