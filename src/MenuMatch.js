import React, {useState,Component} from 'react';
import { withRouter } from 'react-router-dom';
import Member from './components/Members';
import Research from './components/Researchs';
import Publication from './components/Publications';
import Photo from './components/Photo';


class MenuMatch extends Component{
//    let urlSearchParams = new URLSearchParams(this.props.location.search.slice(1));
    render(){
        if(this.props.match.params.name === 'members'){
            return <Member />
        }
        if(this.props.match.params.name === 'researchs'){
            return <Research />
        }
        if(this.props.match.params.name === 'photos'){
            return <Photo />
        }
        if(this.props.match.params.name === 'publications'){
            return <Publication />
        }
    }
} 
export default MenuMatch;