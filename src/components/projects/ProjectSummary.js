import React from 'react';

const ProjectSummary = ({project}) =>{
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Nedum</p>
                <p className="grey-text">11th October, 3:44pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;