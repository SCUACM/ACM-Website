<template>
  <div>
    <BoardListSection title="ACM Board" :memberList="mainBoard" />

    <BoardListSection title="ACM-W" :memberList="acmWBoard" />

    <BoardListSection title="BroncoSec" :memberList="broncoSecBoard" />

    <!-- <BoardListSection title="ACM-G" :memberList="acmGBoard" /> -->

    <BoardListSection title="Competitive Programming" :memberList="competitveProgrammingBoard" /> 

    <BoardListSection title="Chapter Advisors" :memberList="chapterAdvisors" />
  </div>
</template>

<script>

// board 25-26
import ChrisShobe from "../assets/board/main/chris.jpg";
import CarysChiu from '../assets/board/main/carys.jpg';
import EspyAguilar from '../assets/board/main/espy.jpg'
import AbhinavAla from '../assets/board/main/abhinav.jpg';
import SunjanaBanwait from '../assets/board/main/sunjana.jpg';
import PuneetGella from '../assets/board/main/puneet.jpg';
import AshwiniAnantharaman from '../assets/board/main/ashwini.jpg';
import NeelashaSudarshan from '../assets/board/main/neelasha.jpg';
import LaurenKimura from '../assets/board/main/lauren.jpg';

// cpc - need to add 
import IvyZhuang from '../assets/board/competitiveProgramming/IvyZhuang.jpg';
import AlanFung from '../assets/board/competitiveProgramming/AlanFung.jpg';

import KaraBarrese from "../assets/board/broncosec/Kara_Barrese.jpg";
import EricWei from "../assets/board/broncosec/Eric_Wei.jpg";
import WilliamPatmore from '../assets/board/broncosec/William_Patmore.jpg';
import EmilyRamos from '../assets/board/broncosec/emily_ramos.jpg'
import OsasuOgbeide from '../assets/board/broncosec/Osasu_Ogbeide.jpg'
import RushilKumar from '../assets/board/broncosec/rushil_kumar.jpeg'
import PranavSaravanan from '../assets/board/broncosec/Pranav_Saravanan.png'

import AryaDeshpande from "../assets/board/ACM-W/arya.jpg";
import DanielaCasillas from '../assets/board/ACM-W/daniela.jpg';
import KaavyaJethwa from '../assets/board/ACM-W/kaavya.jpg';
import PaulinaLandry from '../assets/board/ACM-W/paulina.jpg';
import SaraDonnelly from '../assets/board/ACM-W/sara.jpg';
import TanviGandhi from '../assets/board/ACM-W/tanvi.jpg'
import PriyanjalPoswal from '../assets/board/ACM-W/priyanjal.png'
import ShrimayiSinkarbabuBharathy from '../assets/board/ACM-W/shrim.jpeg'
import LeslieMejia from '../assets/board/ACM-W/leslie.jpeg'
import FaithOgunfunmi from '../assets/board/ACM-W/faith.jpeg'
import AnvitaBuddhavaram from '../assets/board/ACM-W/anvita.jpg'
import PriyankaBurra from '../assets/board/ACM-W/priyanka.jpg'

import JordanRandleman from "../assets/board/ACM-G/Jordan_Randleman.jpg"
import LandisFusato from "../assets/board/ACM-G/Landis_Fusato.jpg"
import NolanAnderson from "../assets/board/ACM-G/Nolan_Anderson.jpg"
import RahulYalavarthi from "../assets/board/ACM-G/Rahul_Yalavarthi.jpg"

import SharonHsaio from "../assets/board/chapterAdvisors/Sharon_Hsaio.jpg";
import YiFang from "../assets/board/chapterAdvisors/Yi_Fang.jpg";

import "../assets/scss/board-media.scss";

import BoardListSection from "./BoardListSection.vue";

export default {
  name: "BoardList",

  components: {
    BoardListSection,
  },

  data() {
    return {
      // There's definitely a better way to do this....
      mainBoard: [
        {
          src: ChrisShobe,
          name: "Chris Shobe",
          role: "President",
          bio:
            "Hey there, I’m Chris! I’m a Senior Computer Science and Engineering student at Santa Clara University, minoring in Marketing. I’ve been passionate about coding since I was 8, and over the summer worked at Capital One in cybersecurity. I’m driven by building technology that solves real-world problems, with a focus on security, entrepreneurship, and user-centered design. Outside of tech, I love getting creative whether that’s making art or playing the clarinet. I’m always curious and enjoy learning about anything and everything, so if there’s something you’re excited about, I’d love to hear about it!"
        }, 
        {
          src: EspyAguilar,
          name: "Espy Aguilar",
          role: "Vice President",
          bio:
            "Hey! I’m Espy, a Sophomore majoring in Computer Science and Engineering from San Jose, CA. I used to do a lot of coding for fun as a kid, so I practically grew up on websites like code.org and Khan Academy. I'm super passionate about taking interdisciplinary approaches to my work, and other than CS I enjoy exploring education, engineering, storytelling, and human-centered design. In particular, I took a summer internship at the American Foundation for the Blind, and I really love seeing new perspectives on how people interact with technology and how to make the web a better place for everyone. If you see me out and about, don’t be afraid to say hi!" 
        }, 
        {
          src: CarysChiu,
          name: "Carys Chiu",
          role: "Treasurer",
          bio:
            "Hey, I'm Carys! I'm a Junior majoring in Computer Science and Engineering from the Bay Area, so I've been surrounded by tech all my life growing up. Computer science has so much potential and creativity involved, so I've been happy to have been wielding it ever since I took my first serious computing course in high school. I enjoy drawing, playing guitar, learning languages, and having too much free time. If you catch me around campus, feel free to say hi!"
        },
        {
          src: LaurenKimura,
          name: "Lauren Kimura",
          role: "Workshop Coordinator",
          bio:
            "Hi I’m Lauren, a sophomore majoring in Computer Science and Engineering. I wanted to join ACM because I loved the active involvement this club had at SCU including their Hack For Humanity, which is how I originally heard of the club. My current role in ACM is Workshop Coordinator, so I plan and organize our weekly technical workshops every Tuesday, covering topics like APIs, Databases + SQL, System Design, Test Driven Development, Machine Learning, React.js/React Native, Firebase, mobile app dev, and Game dev with Unity. So happy to be a part of this team and hope I can make change within not only the ACM community, but SCU in general."
        }, 
        {
          src: AbhinavAla,
          name: "Abhinav Ala",
          role: "Hackathon Coordinator",
          bio:
          "Hello everyone! My name is Abhi, and I’m a Junior Computer Science Engineering student from Dallas, TX. My passion for computer science is a result of having a deep interest for creating solutions to my problems and developing cool projects. I enjoy learning about computer vision and new cutting edge tech stacks and I want to learn more machine learning, artificial intelligence, and being able to build cool things from the ground up. Outside of school, you can find me playing guitar, watching hours of videos about cars or avoiding studying for classes. Meeting and talking with new people is one of my favorite activities, so please do no hesitate to say hey if you see me around."
        },
        {
          src: SunjanaBanwait,
          name: "Sunjana Banwait",
          role: "Outreach Coordinator",
          bio:
            "Helloo, I'm Sunjana! I'm a Sophmore CS and Engineering student at SCU, from Morgan Hill, CA. I've always been drawn to STEM, and I love computer science since there is ALWAYS something new to learn. I'm still exploring my interests in CS, but I've really enjoyed working on projects that push my full-stack skills. I'm also involved with outreach and teaching STEM to younger students, with the goal of making these spaces feel less intimidating. In my free time, I love being outdoors, going on roadtrips, playing volleyball, and all things music. I love learning from people around me, so always feel free to say hi!"
        },
        {
          src: PuneetGella,
          name: "Puneet Gella",
          role: "Industry Liaison",
          bio:
            "Hey everyone! My name is Puneet, and I'm a Finance major with a minor in Business Analytics. Even though my background is in business, I joined ACM because I’ve always had a deep passion for technology, especially when it comes to leveraging data and tech to drive financial projects. As ACM's Industry Liaison, I lead our sponsor outreach and communication for hackathons. Essentially, I identify companies that align with our hackathon themes and build relationships with them. My goal is to create mutually beneficial partnerships, ensuring our sponsors get the visibility they're looking for while securing the support ACM needs to host amazing events."
        },
        {
          src: AshwiniAnantharaman,
          name: "Ashwini Anantharaman",
          role: "Industry Liaison",
          bio:
            "Hey! I'm Ashwini Anantharaman and I'm an incoming Sophomore majoring in Computer science and engineering."
        },
        {
          src: NeelashaSudarshan,
          name: "Neelasha Sudarshan",
          role: "Webmaster",
          bio:
            "Hello, I'm Neelasha! I'm a Sophomore studying Computer Science and Engineering. I'm really interested in AI safety and security research, which is what my current research is focused on. Apart from that, I'm also interested in web development and cybersecurity. In my free time, I love learning new languages, playing the guitar, and hanging out with friends! Feel free to stop me anytime and say hi!"
        },
      ],
      
      acmWBoard: [
        {
          src: AryaDeshpande,
          name: "Arya Deshpande",
          role: "President",
          bio: ""
        },
        {
          src: SaraDonnelly,
          name: "Sara Donnelly",
          role: "Vice President",
          bio: ""
        },
        {
          src: ShrimayiSinkarbabuBharathy,
          name: "Shrimayi Sinkar babu Bharathy",
          role: "Secretary",
          bio: ""
        }, 
        {
          src: PriyanjalPoswal,
          name: "Priyanjal Poswal",
          role: "Treasurer",
          bio: ""
        }, 
        {
          src: PaulinaLandry,
          name: "Paulina Landry",
          role: "Webmaster",
          bio: ""
        },
        {
          src: LeslieMejia,
          name: "Leslie Mejia",
          role: "Director of Media and PR",
          bio: ""            
        },
        {
          src: TanviGandhi,
          name: "Tanvi Gandhi",
          role: "Technical Events Coordinator",
          bio: ""
        },
        {
          src: DanielaCasillas,
          name: "Daniela Casillas",
          role: "Social Events Coordinator",
          bio: ""
        },
        {
          src: FaithOgunfunmi,
          name: "Faith Ogunfunmi",
          role: "Conference/Career Strategist",
          bio: ""
        },        
        {
          src: KaavyaJethwa,
          name: "Kaavya Jethwa",
          role: "Hackathon Coordinator",
          bio: ""
        },
        {
          src: AnvitaBuddhavaram,
          name: "Anvita Buddhavaram",
          role: "Industry Liason",
          bio: ""
        },
        {
          src: PriyankaBurra,
          name: "Priyanka Burra",
          role: "Industry Liason",
          bio: ""
        },
      ],

      broncoSecBoard: [
        {
          src: WilliamPatmore,
          name: "William Patmore",
          role: "President",
          bio: "",
        },
        {
          src: KaraBarrese,
          name: "Kara Barrese",
          role: "Vice President",
          bio: ""
        },
        {
          src: EmilyRamos,
          name: "Emily Ramos",
          role: "Outreach Coordinator",
          bio: ""
        },
        {
          src: EricWei,
          name: "Eric Wei",
          role: "Event Lead",
          bio: "",
        },
        {
          src: OsasuOgbeide,
          name: "Osasu Ogbeide",
          role: "Event Lead",
          bio: ""
        }, 
        {
          src: RushilKumar,
          name: "Rushil Kumar",
          role: "CTF Lead",
          bio: ""
        },
        {
          src: PranavSaravanan,
          name: "Pranav Saravanan",
          role: "PR Lead",
          bio: ""
        }
      ],

      competitveProgrammingBoard: [
        {
          src: IvyZhuang, 
          name: "Ivy Zhuang",
          role: "President"
        },
        {
          src: AlanFung,  
          name: "Alan Fung", 
          role: "Vice President"
        }
      ],

      acmGBoard: [
        {
          src: JordanRandleman,
          name: "Jordan Randleman",
          role: "President",
          bio: 
            "Hey there! I’m Jordan Randleman, a COEN Masters student graduating in 2024! Reach out if you have ACM-G questions, or if you want to chat about compilers/deep learning technology! :)"
        },
        {
          src: NolanAnderson,
          name: "Nolan Anderson",
          role: "Officer",
          bio:
            "My name is Nolan Anderson, and I am currently a graduate COEN student! If you want to talk about technology (old or new), I am your guy!"
        },
        {
          src: RahulYalavarthi,
          name: "Rahul Yalavarthi",
          role: "Officer",
          bio: 
            "Hi, I'm Rahul, a COEN Master’s student. I love building cool projects, watching movies, and trying good food. I'm always up for a chat about tech."
        },
        {
          src: LandisFusato,
          name: "Landis Fusato",
          role: "Officer",
          bio:
            "Hi! My name is Landis and I am a first-year COEN Masters student. Some of my interests include Ethics, AI/ML, and Information Security."
        },
      ],
      
      chapterAdvisors: [
        {
          src: YiFang,
          name: "Yi Fang",
          role: "ACM Advisor",
          bio:
            "Prof. Yi Fang is an assistant professor in the Department of Computer Engineering who specializes in Machine Learning and Artificial Intelligence. You can read more about his research here. He received his Ph.D. in computer science at Purdue University. He was awarded both Teacher of the Year and Researcher of the Year in 2017.",
        },
        {
          src: SharonHsaio,
          name: "Sharon Hsaio",
          role: "ACM-W Advisor",
          bio:
            "Dr. Hsiao is Assistant Professor & David Packard endowed junior fellow in the Department of Computer Science & Engineering at Santa Clara University. Prior to SCU, she was an assistant professor at Arizona State University and Columbia University, where she established several research projects and taught a number of graduate & undergraduate level courses. Her research focuses on educational technologies, computational modeling, visual analytics, and adaptive technology for personalized learning. Her research methodology involves AI and HCI approaches, applied data science, and machine learning techniques in researching effective technology to help people learn. Dr. Hsiao is actively involved in several international research communities, including Educational Data Mining (EDM), Learning Analytics & Knowledge (LAK), and Artificial Intelligence in Education (AIED). She serves as one of the board directors in the International Educational Data Mining Society (IMEDS), the Program Chair of the 14th International Conference on Educational Data Mining, the Organizing Chair of the 9th of International Conference on Learning Analytics & Knowledge, and several other leadership and editing positions.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>