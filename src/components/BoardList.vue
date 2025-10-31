<template>
  <div>
    <BoardListSection title="ACM Board" :memberList="mainBoard" />

    <BoardListSection title="ACM-W" :memberList="acmWBoard" />

    <BoardListSection title="BroncoSec" :memberList="broncoSecBoard" />

    <BoardListSection title="ACM-G" :memberList="acmGBoard" />

    <BoardListSection title="Competitive Programming" :memberList="competitveProgrammingBoard" />

    <BoardListSection title="Chapter Advisors" :memberList="chapterAdvisors" />
  </div>
</template>

<script>
import ConnerYin from "../assets/board/main/Conner_Yin.jpeg";

// board 25-26
import ChrisShobe from "../assets/board/main/chris.jpg";
import JakeEsperson from "../assets/board/main/jake.jpg";
import AnishKatragadda from "../assets/board/main/anish.jpg";
import IvyZhuang from '../assets/board/main/ivy.jpg';
import LindseyLeong from "../assets/board/main/lindsey.jpg";
import CarysChiu from '../assets/board/main/carys.jpg';
import AlanFung from '../assets/board/main/alan.jpg';
import TiffanyLe from '../assets/board/main/tiffany.jpg';
import MargaritaSchemel from '../assets/board/main/marg.jpg';
import AbhinavAla from '../assets/board/main/abhi.jpg';
import MatthiasMasiero from '../assets/board/main/matt.jpg';
import RayyanHussain from '../assets/board/main/rayyan.jpg';
import EspyAguilar from '../assets/board/main/espy.jpg';
import MariamShihab from '../assets/board/main/mariam.png';

import KaraBarrese from "../assets/board/broncosec/Kara_Barrese.jpg";
import EthanSychangco from "../assets/board/broncosec/Ethan_Sychangco.png";
import TiffanyNguyen from "../assets/board/broncosec/Tiffany_Nguyen.png";
import JasonWu from "../assets/board/broncosec/Jason_Wu.jpg";
import EricWei from "../assets/board/broncosec/Eric_Wei.jpg";
import EvanChin from "../assets/board/broncosec/Evan_Chin.jpg";
import HuyNgo from "../assets/board/broncosec/Huy_Ngo.jpeg";
import TateSteven from '../assets/board/broncosec/Tate_Steven-Schneider.jpg';
import VietHa from '../assets/board/broncosec/Viet_Ha.jpg';
import WilliamPatmore from '../assets/board/broncosec/William_Patmore.jpg';

import CatherineHung from "../assets/board/ACM-W/Catherine_Hung.jpeg";
import LeilaErhili from "../assets/board/ACM-W/Leila_Erhili.jpeg";
import AnnaAldrin from "../assets/board/ACM-W/Anna_Aldrin.jpeg";
import AryaDeshpande from "../assets/board/ACM-W/Arya_Deshpande.jpeg";
import SamiaAhmer from "../assets/board/ACM-W/Samia_Ahmer.jpeg";
import IreneChang from "../assets/board/ACM-W/Irene_Chang.jpeg";
import MaddieFollosco from "../assets/board/ACM-W/Maddie_Follosco.jpeg";
import SanjnaSood from "../assets/board/ACM-W/Sanjna_Sood.jpeg";
import PrakritiPatnaik from "../assets/board/ACM-W/Prakriti_Patnaik.jpg";
import TrishaGanesh from "../assets/board/ACM-W/Trisha_Ganesh.jpeg";
import SattvikaBhatt from "../assets/board/ACM-W/Sattvika_Bhatt.jpeg";
import AnanyaPagadala from "../assets/board/ACM-W/Ananya_Pagadala.jpeg";

import JordanRandleman from "../assets/board/ACM-G/Jordan_Randleman.jpg"
import LandisFusato from "../assets/board/ACM-G/Landis_Fusato.jpg"
import NolanAnderson from "../assets/board/ACM-G/Nolan_Anderson.jpg"
import RahulYalavarthi from "../assets/board/ACM-G/Rahul_Yalavarthi.jpg"

import DarylHo from "../assets/board/competitiveProgramming/Daryl_Ho.jpg"
import MattyHerzig from "../assets/board/competitiveProgramming/Matty_Herzig.jpg"

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
          src: JakeEsperson,
          name: "Jake Esperson",
          role: "President",
          bio:
            "Hello everyone! My name is Jake, and I’m a Senior Computer Science Engineering student from Rocklin, CA. My passion for computer science started with learning about the dot-com bubble from my parents and making a pretend tech startup in one of my high school classes. I enjoy learning about virtual reality and front end web development and I want to learn more about back end databases. Outside of school, you can find me playing baseball, working on my car, or learning all the cool spots in Silicon Valley. I am always excited to make new friends, so don’t be afraid to come up and say hi!"
        },
        {
          src: AnishKatragadda,
          name: "Anish Katragadda",
          role: "Vice President",
          bio:
            "Hi! My name is Anish Katragadda, and I am a senior majoring in Computer Science and Engineering and I’m from Los Angeles California. I’ve always had an interest in technology, cars, and tinkering around with laptops and PCS, is what gave me true passion for computer science. And I'm always interested in learning about what’s new in Tech. Outside of school I spend a lot of time playing golf, watching Formula 1, detailing cars, traveling, and hanging out with my friends and family. Please feel free to reach out, I'm looking forward to meeting you all!"
        },
        {
          src: AbhinavAla,
          name: "Abhinav Ala",
          role: "Workshop Coordinator",
          bio:
            "Hello everyone! My name is Abhi, and I’m a Sophomore Computer Science Engineering student from Dallas, TX. My passion for computer science is a result of having a deep interest for creating solutions to my problems and developing cool projects. I enjoy learning about computer vision and new cutting edge tech stacks and I want to learn more machine learning, artificial intelligence, and being able to build cool things from the ground up. Outside of school, you can find me playing guitar, watching hours of videos about cars or avoiding studying for classes. Meeting and talking with new people is one of my favorite activities, so please do no hesitate to say hey if you see me around."
        },
        {
          src: IvyZhuang,
          name: "Ivy Zhuang",
          role: "Webmaster",
          bio:
            "Hello! I'm Ivy Zhuang, a sophomore studying Computer Science and Engineering from Toronto, Canada. I started coding at an after school program in my elementary school and have been passionate about it ever since. Through ACM, I hope to create more accessible and helpful resources related to CS, academics, professional development for students at SCU. Outside of ACM, I'm involved in SWE++, and I like playing video games and doing arts & crafts. :3"
        },
        {
          src: LindseyLeong,
          name: "Lindsey Leong",
          role: "Outreach Coordinator + DEI Chair",
          bio:
            "Hi! My name is Lindsey and I'm a senior Computer Science and Engineering student with a minor in graphic design from Castro Valley, CA. I got super passionate about computer science after taking a course in my junior year of high school, but I've always been interested in game development since (surprise!) I love playing video games. I'm always eager to learn more about computer science and its related fields, especially web dev, automation, UX/UI, and data science. In my free time, I like playing video games, drawing, listening to music, watching shows/movies, and enjoying good food. Feel free to come say hi-- it's awesome to meet new people and I'd love to hear about your interests!"
        },
        {
          src: ChrisShobe,
          name: "Chris Shobe",
          role: "Treasurer",
          bio:
            "Hey there, I'm Chris! I'm a Junior CSE student from Redondo Beach, CA, minoring in Marketing. I've always known I wanted to code, but my passion goes beyond just writing software — I'm fascinated by entrepreneurship, cybersecurity, and using tech to make life better for real people. When I'm not coding, you’ll find me doing something creative, like making art or playing the clarinet. I love learning about anything and everything, so if you have something you're excited about, I'd love to hear all about it!"
        },
        {
          src: MargaritaSchemel,
          name: "Margarita Schemel",
          role: "Social Media Manager",
          bio:
            "Hi all! My name is Margarita and I am a sophomore Computer Science and Engineering major here at SCU. Computer Science has been an interest of mine ever since I can remember- having grown up in the Silicon Valley- and it has always been something I always knew I want to pursue. More specifically, I’m very interested in project development and the ethical aspect of computing. In my free time, I love being active and outdoors, and I’ve recently picked up DJing! I love meeting new people so don’t hesitate to come up whenever and say what’s up!"
        },
        {
          src: CarysChiu,
          name: "Carys Chiu",
          role: "Industry Liaison",
          bio:
            "Hey, I'm Carys! I'm a sophomore majoring in Computer Science and Engineering from the Bay Area, so I've been surrounded by tech all my life growing up. It's a field with so much potential to create real world solutions and I'm happy to be a part of it ever since I took my first serious computing course in high school. I enjoy creating art, playing tennis, learning languages, and having too much free time. If you catch me around campus, feel free to say hi!"
        },
        {
          src: AlanFung,
          name: "Alan Fung",
          role: "Industry Liaison",
          bio:
            "Hi! I’m Alan, a sophomore Electrical Engineering major from Milpitas, CA. I have been interested in software ever since I touched my first keyboard at the age of four. As an electrical engineer, I am interested in building systems, so I am better at lower-level programming languages such as C and Rust. I love tinkering with tech, so at my desk, you might find me playing with a Raspberry Pi, configuring my PC (Arch btw!), or fixing a broken PCB. You might also find me playing the piano, cooking up a noodle soup, playing badminton, hitting leg day, or playing video games. I love meeting new people, so come say hi any time!"
        },
        {
          src: TiffanyLe,
          name: "Tiffany Le",
          role: "Secretary",
          bio:
            "Hello friends! My name is Tiffany, and I am a 2nd year Computer Science and Engineering student who is also interested in double majoring in Electrical and Computer Engineering! As someone who grew up with many interests, I initially struggled with deciding what career to pursue. However, after taking my first CS course in high school, I found that it combined my love for learning languages with problem solving and creativity. Today, my passion for CS (especially embedded systems) continues to grow as I learn more about the tech world. But aside from tech, I also enjoy baking, crocheting, ice skating, watching basketball, and snacking on candy (gummy bears are awesome). I might not always recognize people right away, but I’m always happy to chat if you say hello! :>"
        },
        {
          src: RayyanHussain,
          name: "Rayyan Hussain",
          role: "Hackathon Coordinator",
          bio:
            "Hey everyone! My name is Rayyan and I am a sophomore Computer Science and Engineering student from Pleasanton, CA. My passion for computer science started when I began playing around with Scratch and FLL Robotics as a little kid. Being surrounded by innovation in the world’s hub of technology, I always wanted to be on the forefront of cutting edge work, and am always eager to learn something new! I’m currently doing research on clustered drone control calibrated with OptiTrack sensors, and serve on the Student Advisory Board for the Ciocca Center. Apart from that, you’ll catch me playing basketball, building PC’s, and eating/cooking new food. I love meeting new people, so please don’t hesitate to reach out!"
        },
        {
          src: MatthiasMasiero,
          name: "Matthias Masiero",
          role: "Event Coordinator",
          bio: "Hey! I’m Matthias, a Computer Science student, and im from Manhattan NY. I’m into using code to solve real-world problems whether that’s through machine learning, sports tech, or even experimenting with quantum computing. I’ve worked on injury prediction projects using athlete data, and I love pushing the limits with new quantum computing advancments. Outside of class, I’m usually at the gym, playing soccer, or studying in SCDI. I’m always down to meet new people, so feel free to say whats up."
        },
        {
          src: EspyAguilar,
          name: "Esperanza Aguilar",
          role: "Underclassmen Representative",
          bio: "Hey! I’m Espy, a freshman majoring in Computer Science and Engineering from San Jose. I used to do a lot of coding for fun as a kid, so I practically grew up on websites like code.org and Khan Academy. I recently rediscovered my passion for CS in my Junior year of high school, and have been exploring as many subjects as I could since then. I’m particularly interested in Video Game Programming and Machine Learning, but I’m open to learning and talking about anything CS related. I love teaching and tutoring, so don’t be scared to ask if you have any CS questions or even just need guidance in general. As Underclassmen Rep, I want to make sure your ideas shine through, so please reach out, and I’ll make sure your voice is heard."
        },
        {
          src: MariamShihab,
          name: "Mariam Shihab",
          role: "Underclassmen Representative",
          bio: "Hi! My name is Mariam, and I am a freshman majoring in Computer Science and Engineering. I grew up in San Jose, California, but I was born in Vancouver, Canada. I've always been a problem solver, and that's why I'm drawn to coding as I believe it is the most effective way for creation and sharing new ideas. Right now I am particularly interested in AI and Machine learning, since if used correctly, it has the power to benefit a lot of people. Other than technology, I enjoy reading and watching movies (especially Marvel movies!) I’m excited to meet more people this year and learn more about coding!"
        }
      ],

      acmWBoard: [
        {
          src: LeilaErhili,
          name: "Leila Erhili",
          role: "President",
          bio:
            "Hello! My name is Leila and I am a senior studying Computer Science and Engineering here at SCU. I absolutely love computer science, so I am a huge advocate for getting more women the opportunity to discover how fun and satisfying programming can be. I actually did not begin my college journey studying Computer Science and Engineering. My freshman year, I took a C++ class out of curiosity, and immediately knew that I had found what I wanted to study. I then switched majors and have never looked back. Other pastimes that I enjoy include moving my body (ie. gym, hiking, etc,) , thrifting, writing, and of course, spending time with the people closest to me. I am so excited to be part of such an amazing community of amazing women and can’t wait to get to know everyone! "
        },
        {
          src: MaddieFollosco,
          name: "Maddie Follosco",
          role: "Vice President",
          bio: 
            "Hey! My name is Maddie Follosco and I am a Computer Science and Engineering major from Santa Clarita, California. In high school I thought I wanted to go into the medical field because I wanted to have a lasting impact on people's lives. However, after job shadowing engineers at a local medical devices startup, I realized I could still have that altruistic impact as an engineer by designing cool things for people. And so naturally my love for math and logic led me here and I am loving it so far. I am interested in exploring all the fields of computer science especially machine learning and game design. In my free time, I am an avid Dodgers fan, I am obsessed with pop music and R&B, and I love spending quality time with friends and family. I look forward to an amazing year with the gals at ACM-W!"
        },
        {
          src: CatherineHung,
          name: "Catherine Hung",
          role: "Treasurer",
          bio:
            ""
        },
        {
          src: SanjnaSood,
          name: "Sanjna Sood",
          role: "Secretary",
          bio: 
            ""
        },
        {
          src: IreneChang,
          name: "Irene Chang",
          role: "Director of Events",
          bio:
            ""
        },
        {
          src: AnnaAldrin,
          name: "Anna Aldrin",
          role: "Event Coordinator",
          bio:
            ""
        },
        {
          src: AryaDeshpande,
          name: "Arya Deshpande",
          role: "Event Coordinator",
          bio:
            ""
        },
        {
          src: SamiaAhmer,
          name: "Samia Ahmer",
          role: "Media and Public Relations",
          bio:
            ""
        },
        {
          src: PrakritiPatnaik,
          name: "Prakriti Patnaik",
          role: "Webmaster",
          bio: 
            ""
        },
        {
          src: TrishaGanesh,
          name: "Trisha Ganesh",
          role: "Industry Liaison",
          bio: 
            ""
        },
        {
          src: SattvikaBhatt,
          name: "Sattvika Bhatt",
          role: "Hackathon Coordinator",
          bio: 
            ""
        },
        {
          src: AnanyaPagadala,
          name: "Ananya Pagadala",
          role: "Conference/Career Opportunity Strategist",
          bio: 
            ""
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

      competitveProgrammingBoard: [
        {
          src: ConnerYin,
          name: "Conner Yin",
          role: "President",
          bio:
            "Hello! I’m Conner, a junior computer science & engineering major from Cupertino, CA. I first found my passion for programming by exploring efficient algorithms to solve time-complexity problems. Currently, I like writing scripts to beat web games as well as developing simple websites and applications. In my free time, I love writing songs, going on runs and walks, and playing social deception games with friends. Looking forward to meeting you all!"
        },
        {
          src: DarylHo,
          name: "Daryl Ho",
          role: "Vice President",
          bio:
            ""
        },
        {
        src: MattyHerzig,
        name: "Matty Herzig",
        role: "Programming Director",
        bio: "Hi! I'm Matty, and I am pursuing a computer science & engineering degree. I'm passionate in just about anything, especially computers and making things. If you need help or advice, just ask!"
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
