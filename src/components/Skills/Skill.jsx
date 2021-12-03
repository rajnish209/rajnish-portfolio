import './skill.scss';
import { v4 as uuidv4 } from 'uuid';

export default function Skill() {
    const data = [
        {
            id: 1,
            title: 'Front-end',
            img: [
                {
                    url: 'https://www.freeiconspng.com/thumbs/html5-icon/html5-icon-1.png',
                    title1: 'HTML5',
                },
                {
                    url: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png',
                    title1: 'CSS',
                },
                {
                    url: 'https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png',
                    title1: 'Javascript',
                },
                {
                    url: 'https://e7.pngegg.com/pngimages/235/872/png-clipart-react-computer-icons-redux-javascript-others-logo-symmetry.png',
                    title1: 'React.js',
                },
                {
                    url: 'https://cdn.iconscout.com/icon/free/png-512/redux-283024.png',
                    title1: 'Redux',
                },
            ],
            icon: 'assets/twitter.png',
        },
        {
            id: 2,
            title: 'Back-end',
            img: [
                {
                    url: 'https://library.kissclipart.com/20180924/quq/kissclipart-node-js-logo-clipart-node-js-javascript-express-js-0cd102a8f7e1ebc8.jpg',
                    title1: 'Node.js',
                },
                {
                    url: 'https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png',
                    title1: 'MongoDB',
                },
                // {
                //   url:"https://icons-for-free.com/iconfiles/png/512/development+logo+mysql+icon-1320184807686758112.png",
                //   title1: "MySQL",
                // },
                // {
                //   url:"https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png",
                //   title1: "Javascript",
                // },
                {
                    url: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png',
                    title1: 'Express',
                },
            ],
            icon: 'assets/youtube.png',
        },
        {
            id: 3,
            title: 'Languages',
            img: [
                {
                    url: 'https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png',
                    title1: 'Javascript',
                },
                // {
                //     url: 'https://i.pinimg.com/736x/a2/dc/32/a2dc3249364449a49f01a6275d277b8c.jpg',
                //     title1: 'C++',
                // },
                {
                  url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsupB4K75qK8ZdMPUX2INSSCLeCF2UQlgCJSgIFHPc6OWMHbkxOgeAV6Ti9aL6ZacKNOM&usqp=CAU",
                  title1: "C",
                },
            ],
            icon: 'assets/linkedin.png',
        },
    ];
    return (
        <div className="skill" id="skill">
            <h1>Skills</h1>
            <hr className="hr" />
            <div className="container">
                {data.map((d) => (
                    <div key={uuidv4()} className="card">
                        <h1>{d.title}</h1>
                        <hr className="hr1" />

                        <div className="types">
                            {d.img.map((item) => (
                                <div key={uuidv4()}>
                                    <img src={item.url} />
                                    <h1>{item.title1}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
