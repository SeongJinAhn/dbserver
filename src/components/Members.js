import React, {useState, Component} from 'react';
import PropTypes from 'prop-types';

const professor = [
    {
        id : 0,
        name : 'MyeongHo Kim'
    }
];
const students = [
    {
        id : 0,
        name : 'HyunJi Jeong'
    },
    {
        id : 1,
        name : 'JeongHyuk Seo'
    },
    {
        id : 2,
        name : 'KwangHee Lee'
    },
    {
        id : 3,
        name : 'TaeWook Ha'
    },
    {
        id : 4,
        name : 'HeeSoo Yoon'
    },
    {
        id : 5,
        name : 'GukWon Ahn'
    },
    {
        id : 6,
        name : 'SeongJin Ahn'
    }
];

const ShowMember = ({name}) =>
{
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}

const Member = () => {
    return (        
        <section>
            <div className = "professor">
                {professor.map(person=>(
                    <ShowMember
                        name={person.name}
                    />
                ))}
            </div>
            <div className = "student">
                {students.map(person =>(
                    <ShowMember 
                        name={person.name}
                    />
                ))}      
            </div>
        </section>
    );
}
export default Member;