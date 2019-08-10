import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ShowResearch = ({name}) =>
{
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}
const research = [  
    {
        name : 'Samsung',
        description : 'Samsung',
        image : 'Samsung'
    },
    {
        name : 'Bio',
        description : 'Bio',
        image : 'Bio'

    }
]
const Research = () => {
    return (
        <section>
            <div className = "research">
                {research.map(task=>(
                    <ShowResearch
                        name={task.name}
                        description={task.description}
                        image={task.image}
                    />
                ))}
            </div>
        </section>
    )
}
export default Research;