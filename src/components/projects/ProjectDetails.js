import React from 'react'

const ProjectDetails = (props) => { 
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus expedita vero alias facilis ipsa numquam error! Similique explicabo voluptatibus necessitatibus incidunt quis, hic soluta accusantium vero a doloribus? Praesentium, rem?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The One Nedum</div>
                    <div>12th October, 4:00pm</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails;
