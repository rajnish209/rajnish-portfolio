import { useState, useRef } from 'react';
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'Letter-F-icon.png',
            linkSite: 'https://project-frontend-clone.herokuapp.com/',
            linkGithub: 'https://github.com/Niket1-1/Frontene-masters',
            linkBlog:
                '',
            title: 'Frontend-Masters',
            desc: ' Frontend-Masters provides various type of courses to users. Courses are JAVA , JAVASCRIPT , PYTHON , MONGODB , CSS , REACT , NODE-JS etc.',
            img: 'https://user-images.githubusercontent.com/86410005/128599447-b512053a-41ff-49fa-96c6-ac807bc835cd.png',
        },
        {
            id: '2',
            icon: 'img2.png',
            linkSite: ' https://ecommerce-three-bice.vercel.app ',
            linkGithub: 'https://github.com/rajnish209/preventvenue',
            linkBlog:
                '',
            title: 'Preventvenue.com',
            desc: 'Printvenue.com is a one stop shop for all your personalized corporate and individual needs.',
            img: 'img1.png',
        },
       
      {
            id: '1',
            icon: 'Letter-F-icon.png',
            linkSite: 'https://project-frontend-clone.herokuapp.com/',
            linkGithub: 'https://github.com/Niket1-1/Frontene-masters',
            linkBlog:
                '',
            title: 'Frontend-Masters',
            desc: ' Frontend-Masters provides various type of courses to users. Courses are JAVA , JAVASCRIPT , PYTHON , MONGODB , CSS , REACT , NODE-JS etc.',
            img: 'https://user-images.githubusercontent.com/86410005/128599447-b512053a-41ff-49fa-96c6-ac807bc835cd.png',
        },
        {
            id: '2',
            icon: 'img2.png',
            linkSite: ' https://ecommerce-three-bice.vercel.app ',
            linkGithub: 'https://github.com/rajnish209/preventvenue',
            linkBlog:
                '',
            title: 'Preventvenue.com',
            desc: 'Printvenue.com is a one stop shop for all your personalized corporate and individual needs.',
            img: 'img1.png',
        },
        
        ,
        {
            id: '1',
            icon: 'Letter-F-icon.png',
            linkSite: 'https://project-frontend-clone.herokuapp.com/',
            linkGithub: 'https://github.com/Niket1-1/Frontene-masters',
            linkBlog:
                '',
            title: 'Frontend-Masters',
            desc: ' Frontend-Masters provides various type of courses to users. Courses are JAVA , JAVASCRIPT , PYTHON , MONGODB , CSS , REACT , NODE-JS etc.',
            img: 'https://user-images.githubusercontent.com/86410005/128599447-b512053a-41ff-49fa-96c6-ac807bc835cd.png',
        },
        {
            id: '2',
            icon: 'img2.png',
            linkSite: ' https://ecommerce-three-bice.vercel.app',
            linkGithub: 'https://github.com/rajnish209/preventvenue',
            linkBlog:
                '',
            title: 'Preventvenue.com',
            desc: 'Printvenue.com is a one stop shop for all your personalized corporate and individual needs.',
            img: 'img1.png',
        },
        
    ];

    return (
        <div className="Project" id="Project">
            <br />

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Blog</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
