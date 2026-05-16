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
import RayyanHussain from '../assets/board/main/rayyan.jpg'; // old
import CarysChiu from '../assets/board/main/carys.jpg';
import MariamShihab from '../assets/board/main/mariam.jpg'
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
import EthanSychangco from "../assets/board/broncosec/Ethan_Sychangco.png";
import TiffanyNguyen from "../assets/board/broncosec/Tiffany_Nguyen.png";
import JasonWu from "../assets/board/broncosec/Jason_Wu.jpg";
import EricWei from "../assets/board/broncosec/Eric_Wei.jpg";
import EvanChin from "../assets/board/broncosec/Evan_Chin.jpg";
import HuyNgo from "../assets/board/broncosec/Huy_Ngo.jpeg";
import TateSteven from '../assets/board/broncosec/Tate_Steven-Schneider.jpg';
import VietHa from '../assets/board/broncosec/Viet_Ha.png';
import WilliamPatmore from '../assets/board/broncosec/William_Patmore.jpg';

import CatherineHung from "../assets/board/ACM-W/Catherine_Hung.jpeg";
import AnnaAldrin from "../assets/board/ACM-W/Anna_Aldrin.jpeg";
import AryaDeshpande from "../assets/board/ACM-W/Arya_Deshpande.jpg";
import MaddieFollosco from "../assets/board/ACM-W/Maddie_Follosco.jpeg";
import SanjnaSood from "../assets/board/ACM-W/Sanjna_Sood.jpeg";
import DanielaCasillas from '../assets/board/ACM-W/Daniela_Casillas.jpg';
import EmaanZaidi from '../assets/board/ACM-W/Emaan_Zaidi.JPG';
import GinaChiu from '../assets/board/ACM-W/Gina_Chiu.jpg';
import KaavyaJethwa from '../assets/board/ACM-W/Kaavya_Jethwa.jpg';
import PaulinaLandry from '../assets/board/ACM-W/Paulina_Landry.jpg';
import PriyankaGanguly from '../assets/board/ACM-W/Priyanka_Ganguly.JPG';
import SaraDonnelly from '../assets/board/ACM-W/Sara_Donnelly.jpg';
import TanviGandhi from '../assets/board/ACM-W/Tanvi_Gandhi.jpg'

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
          src: RayyanHussain,
          name: "Rayyan Hussain",
          role: "Vice President",
          bio:
            "Hey everyone! My name is Rayyan and I am a Junior Computer Science and Engineering student from Pleasanton, CA. My passion for computer science started when I began playing around with Scratch and FLL Robotics as a little kid. Being surrounded by innovation in the world’s hub of technology, I always wanted to be on the forefront of cutting edge work, and am always eager to learn something new! Last year I published a paper on clustered drone control for the IEEE Aerospace Conference, and this summer I interned at CrowdStrike as a software engineering intern. Apart from that, you’ll catch me playing basketball, building PCs, and eating/cooking new food. I love meeting new people, so please don’t hesitate to reach out!" 
        }, 
        {
          src: CarysChiu,
          name: "Carys Chiu",
          role: "Treasurer",
          bio:
            "Hey, I'm Carys! I'm a Junior majoring in Computer Science and Engineering from the Bay Area, so I've been surrounded by tech all my life growing up. Computer science has so much potential and creativity involved, so I've been happy to have been wielding it ever since I took my first serious computing course in high school. I enjoy drawing, playing guitar, learning languages, and having too much free time. If you catch me around campus, feel free to say hi!"
        },
        {
          src: MariamShihab,
          name: "Mariam Shihab",
          role: "Secretary",
          bio:
            "Hi, I’m Mariam! I’m a Sophomore Computer Science and Engineering major and Responsible AI minor from the Bay. I’ve always wanted to help people, and I believe computing is the best way to reach a global audience since all you need is a computer! I’m fascinated by the intersection of medicine and AI and am currently working on some projects in that area. I’m also looking to get more into robotics and ML. Outside of CS, I love being outdoors/gardening, shopping, traveling, and binge-watching 2000s movies. I’m also a complete matcha and iced coffee enthusiast, and I’m always down to talk tech over a good cup of caffeine!!"
        },
        {
          src: EspyAguilar,
          name: "Esperanza Aguilar",
          role: "Workshop Coordinator",
          bio:
            "Hey! I’m Espy, a Sophmore majoring in Computer Science and Engineering from San Jose, CA. I used to do a lot of coding for fun as a kid, so I practically grew up on websites like code.org and Khan Academy. I'm super passionate about CS and education, so you'll probably see me up front teaching on Tuesdays or working through the crowd to help people figure out where they're stuck. I’m particularly interested in Video Game Programming and Machine Learning, but I’m always open to learn something new."
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
        {
          src: LaurenKimura,
          name: "Lauren Kimura",
          role: "Marketing Coordinator",
          bio:
            "Hi I'm Lauren, a Sophmore majoring in Computer Science and Engineering. I wanted to join ACM because I loved the active involvmenet this club had at SCU including their Hack For Humanity, which is how I originally heard of the club. My current role in ACM is Marketing Coordinator, so basically everything you see about ACM, from instagram to posters, videos and photos, if it has ACM branding on it, that was me. So happy to be apart of this team and hope I can make change within not only the ACM community, but SCU in general."
        }
      ],
      
      acmWBoard: [
        {
          src: MaddieFollosco,
          name: "Maddie Follosco",
          role: "President",
          bio:
            "Hey! My name is Maddie Follosco and I am a Computer Science and Engineering major from Santa Clarita, California. In high school I thought I wanted to go into the medical field because I wanted to have a lasting impact on people's lives. However, after job shadowing engineers at a local medical devices startup, I realized I could still have that altruistic impact as an engineer by designing cool things for people. And so naturally my love for math and logic led me here and I am loving it so far. I am interested in exploring all the fields of computer science especially machine learning and game design. In my free time, I am an avid Dodgers fan, I am obsessed with pop music and R&B, and I love spending quality time with friends and family. I look forward to an amazing year with the gals at ACM-W!"
        },
        {
          src: AryaDeshpande,
          name: "Arya Deshpande",
          role: "Vice President",
          bio: ""
        },
        {
          src: CatherineHung,
          name: "Catherine Hung",
          role: "Treasurer",
          bio: ""
        },
        {
          src: PriyankaGanguly,
          name: "Priyanka Ganguly",
          role: "Secretary",
          bio: ""
        },
        {
          src: SanjnaSood,
          name: "Sanjna Sood",
          role: "Hackathon Coordinator",
          bio: ""
        },
        {
          src: SaraDonnelly,
          name: "Sara Donnelly",
          role: "Co-director of Events",
          bio: ""
        },
        {
          src: AnnaAldrin,
          name: "Anna Aldrin",
          role: "Co-director of Events",
          bio: ""
        },
        {
          src: DanielaCasillas,
          name: "Daniela Casillas",
          role: "Cybersisters Event Coordinator",
          bio: ""
        },
        {
          src: GinaChiu,
          name: "Gina Chiu",
          role: "Director of Media and PR",
          bio: ""
        },
        {
          src: KaavyaJethwa,
          name: "Kaavya Jethwa",
          role: "Webmaster",
          bio: ""
        },
        {
          src: PaulinaLandry,
          name: "Paulina Landry",
          role: "Industry Liaison",
          bio: ""
        },
        {
          src: EmaanZaidi,
          name: "Emaan Zaidi",
          role: "Industry Liaison",
          bio: ""
        },
        {
          src: TanviGandhi,
          name: "Tanvi Gandhi",
          role: "Conference and Career Advisor",
          bio: ""
        },
      ],

      broncoSecBoard: [
        {
          src: EthanSychangco,
          name: "Ethan Sychangco",
          role: "President",
          bio: "",
        },  
        {
          src: WilliamPatmore,
          name: "William Patmore",
          role: "Vice President",
          bio: "",
        },
        {
          src: KaraBarrese,
          name: "Kara Barrese",
          role: "CTF Lead",
          bio: ""
        },
        {
          src: VietHa,
          name: "Viet Ha",
          role: "Event Lead",
          bio: "",
        },
        {
          src: HuyNgo,
          name: "Huy Ngo",
          role: "Event Lead",
          bio: "",
        },
        {
          src: EricWei,
          name: "Eric Wei",
          role: "Event Lead",
          bio: "",
        },
        {
          src: TateSteven,
          name: "Tate Steven-Schneider",
          role: "Event Lead",
          bio: "",
        },
        {
          src: TiffanyNguyen,
          name: "Tiffany Nguyen",
          role: "Publicity Manager",
          bio: "",
        },
        {
          src: JasonWu,
          name: "Jason Wu",
          role: "Treasurer",
          bio: ""
        },
        {
          src: EvanChin,
          name: "Evan Chin",
          role: "Outreach Coordinator",
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
