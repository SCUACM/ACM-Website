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

import WalkerSelby from "../assets/board/broncosec/Walker_Selby.jpg";
import DevinBhatt from "../assets/board/broncosec/Devin_Bhatt.jpg";
import DannyWalsh from "../assets/board/broncosec/Danny_Walsh.jpg";
import KaraBaresse from "../assets/board/broncosec/Kara_Baresse.jpg";
import DavisRobertson from "../assets/board/broncosec/Davis_Robertson.jpg";
import EthanSychangco from "../assets/board/broncosec/Ethan_Sychangco.jpg";
import TiffanyNguyen from "../assets/board/broncosec/Tiffany_Nguyen.jpg";
import VarunMangla from "../assets/board/broncosec/Varun_Mangla.jpg";
import AdrianZhang from "../assets/board/broncosec/Adrian_Zhang.jpg";
import JasonWu from "../assets/board/broncosec/Jason_Wu.jpg";

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

import BoardListSection from "./BoardListSection";

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
          src: DevinBhatt,
          name: "Devin Bhatt",
          role: "President",
          bio:
            "Hi, I’m Devin. I’m a junior Computer Science from the Bay Area. For my second year on the BroncoCTF board, I’ve taken on the role of BroncoCTF coordinator. Most of my work at BroncoSec involves planning for BroncoCTF, writing challenges, and setting up the infrastructure for you to (hopefully not) break :wink:. I love to learn new things (especially when it comes to security and infrastructure), and I love to help others learn as well. I hope that BroncoCTF is not just a fun event, but a learning opportunity for all of its attendees!",
        },  
        {
          src: DavisRobertson,
          name: "Davis Robertson",
          role: "Vice President",
          bio:
            "Hello! I’m Davis and I’m excited to be BroncoSec’s external CTF coordinator this year! I am a junior computer science (security emphasis) and philosophy major from New York. I’ve been interested in computer science since I was a kid and have really enjoyed being a part of BroncoSec at SCU. When I’m not writing papers or working on CS projects there’s a good chance you can find me playing or watching basketball. Please reach out if you have any questions or for any other reason, I’m looking forward to connecting with the BroncoSec community!",
        },
        {
          src: DannyWalsh,
          name: "Danny Walsh",
          role: "Industry Liaison",
          bio:
            ""
          },
        {
          src: WalkerSelby,
          name: "Walker Selby",
          role: "BroncoCTF coordinator",
          bio: ""
        },
        {
          src: KaraBaresse,
          name: "Kara Baresse",
          role: "External CTF coordinator",
          bio:
            ""
          },
        {
          src: EthanSychangco,
          name: "Ethan Sychangco",
          role: "Workshop Coordinator",
          bio:
            "Hello, my name is Ethan Sychangco! I am one of your BroncoSec underclassman representatives for the 2022-2023 school year! I am a first-year majoring in Computer Science and Engineering, and I am local to the Bay Area. I find interest in all things technology, gaming, and cybersecurity, and I want to bring that excitement to the BroncoSec club. When I am not laser-focused on developing a project, I am probably spending time with family, enjoying game nights with friends, or watching random YouTube videos to take a break from my busy days. I want to make sure all BroncoSec members have their voices heard, and that we can support each other's passions for cybersecurity. You can reach out to me at any time!",
        },
        {
          src: TiffanyNguyen,
          name: "Tiffany Nguyen",
          role: "Workshop Coordinator",
          bio:
            "My name is Tiffany Nguyen, and I am a freshman majoring in Computer Science and Engineering from San Jose, California. I am passionate about learning about all the fun and interesting ways computer science can be applied across various fields like cybersecurity, and I hope to be able to help plan fun activities that get others excited about security.",
        },
        {
          src: VarunMangla,
          name: "Varun Mangla",
          role: "Workshop Coordinator",
          bio:
            "Hello everyone! I'm Varun, a sophomore Computer Science and Engineering student from Los Altos, CA. While I only started coding during the winter quarter of my first year at SCU, I've always been fascinated with technology. I'm eager to join BroncoSec as its Public Relations manager this year, as participating in the club helped me develop a budding interest in cybersecurity. Through this role, I intend to introduce other students to BroncoSec and the ever-growing field of cybersecurity. Outside of computer science, some of my interests are music, games, and hanging out with my friends. Please let me know if you have any questions or suggestions, and I'm looking forward to seeing everyone at our weekly club meetings!",
        },
        {
          src: AdrianZhang,
          name: "Adrian Zhang",
          role: "Underclassmen Rep",
          bio: ""
        },
        {
          src: JasonWu,
          name: "Jason Wu",
          role: "Underclassmen Rep",
          bio: ""
        },
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
