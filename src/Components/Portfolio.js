import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import PROJECTS from '../Data/projects';


class Portfolio extends Component {

  openInNewWindow = (link) => () => {
    window.open( link );
  }

  render() {
    const projects = PROJECTS.map((project) => {
      return(
        <Box boxShadow={10} key={project.id} className="zoom" style={{ maxWidth: 300, margin: 25}}>
          <Card>
              <CardMedia style={{ height: 200 }} image={project.image} title={project.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h4">
                  {project.title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p" style={{ fontSize: 15}}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions style={{ padding: 16 }}> 
              {
                project.github ? (
                  <Button  variant="contained" onClick={this.openInNewWindow(project.github)} style={{ fontSize: 12 }}>
                    GitHub
                  </Button>
                ) : ( null )
              }
                { 
                project.link ? (
                    <Button variant="contained" onClick={this.openInNewWindow(project.link)} style={{ fontSize: 12 }}>
                      Live Demo
                    </Button>
                ) : (null)
                }
              
              </CardActions>
          </Card>
        </Box>
      )
    });

    return (
      <section id="portfolio">
        <div className="row">
            <h1>Check Out Some of My Works.</h1>
              <Grid style={{ boxShadow: '10px' }}container direction="row" justify="center" alignItems="center">
                  {projects}
              </Grid>
        </div>
      </section>
    )
  } 
}



// class Portfolio extends Component {
//   render() {

//     if(this.props.data){
//       var projects = this.props.data.projects.map(function(projects){
//         var projectImage = 'images/portfolio/'+projects.image;
//         return <div key={projects.title} className="columns portfolio-item">
//            <div className="item-wrap">
//             <a href={projects.url} title={projects.title}>
//                <img alt={projects.title} src={projectImage} />
//                <div className="overlay">
//                   <div className="portfolio-item-meta">
//                  <h5>{projects.title}</h5>
//                      <p>{projects.category}</p>
//                   </div>
//                 </div>
//               <div className="link-icon"><i className="fa fa-link"></i></div>
//             </a>
//           </div>
//         </div>
//       })
//     }

//     return (
//       <section id="portfolio">
//       <div className="row">
//          <div className="twelve columns collapsed">
//             <h1>Check Out Some of My Works.</h1>
//             <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
//                 {projects}
//             </div>
//           </div>
//       </div>
//    </section>
//     );
//   }
// }


export default Portfolio;
