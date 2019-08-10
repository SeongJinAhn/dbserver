import React, {useState, Component} from 'react';
import types from 'prop-types';

class Member extends Compoent {
    constructor(){
        super();
        this.state = {
            professor:[
                {
                    id:0,
                    name:'MyeongHo Kim'
                }
            ]
            students:[
                {
                    id:0,
                    name:'HyunJi Jung'
                },
                {
                    id:1,
                    name:'JungHyeok Suh'
                },
                {
                    id:2,
                    name:'KwangHee Lee'
                },
                {
                    id:3,
                    name:'TaeWook Ha'
                },
                {
                    id:4,
                    name:'HeeSoo Yoon'
                },
                {
                    id:5,
                    name:'GukWon Ahn'
                }
                ,
                {
                    id:6,
                    name:'SeongJin Ahn'
                }
            ]
        }
    }
    render(){
        return (
            <div className="Members">
                {this._renderMembers(this.state.professor)}
                {this._renderMembers(this.state.students)}
            </div>
        )
    }
}