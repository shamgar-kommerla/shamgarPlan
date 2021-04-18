import React from 'react'

export default function ProjectDetails(props) {
    // console.log(props);
    // console.log(props.match.params.id);
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title text-darken-4">Project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Eget mi proin sed libero enim sed faucibus turpis. Et molestie ac feugiat sed lectus vestibulum. 
                     Facilisis volutpat est velit egestas dui id ornare arcu odio. Mattis rhoncus urna neque viverra justo. 
                     Purus ut faucibus pulvinar elementum integer enim neque volutpat. Senectus et netus et malesuada fames.
                     Aliquam sem et tortor consequat id porta. Convallis a cras semper auctor neque vitae tempus quam. 
                     Vestibulum sed arcu non odio euismod lacinia at quis. Aliquet nibh praesent tristique magna sit amet. 
                     Nec ullamcorper sit amet risus nullam eget. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. 
                     Amet volutpat consequat mauris nunc congue.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>posted by Shamgar Kommerla</div>
                    <div>2nd Sept,2021</div>
                </div>
            </div>
        </div>
    )
}
