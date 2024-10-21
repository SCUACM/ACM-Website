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
import LindseyLeong from "../assets/board/main/Lindsey_Leong.jpeg";
import AndrewCollins from "../assets/board/main/Andrew_Collins.jpeg";
import JakeEsperson from "../assets/board/main/Jake_Esperson.jpeg";
import SamhitaRachapudi from "../assets/board/main/Samhita_Rachapudi.jpeg";
import AnishKatragadda from "../assets/board/main/Anish_Katragadda.jpeg";
import JalenPaige from "../assets/board/main/Jalen_Paige.jpeg";
import RosalieWessels from "../assets/board/main/Rosalie_Wessels.jpg";
import GriffinJones from "../assets/board/main/Griffin_Jones.jpeg";
import ChrisShobe from "../assets/board/main/Chris_Shobe.jpeg";
import IshikaGupta from "../assets/board/main/Ishika_Gupta.jpeg";
import SiennaPearson from "../assets/board/main/Sienna_Pearson.jpeg";
import NikhilVinod from "../assets/board/main/Nikhil_Vinod.jpeg";

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
          src: AndrewCollins,
          name: "Andrew Collins",
          role: "President",
          bio:
            "Hello, I’m Andrew, a Junior Computer Science and Engineering student from San Diego, CA. My passion for computer science started in middle and high school through classes and clubs where I learned how to develop simple websites and fetch data from APIs. I am interested in mobile development, ML and AI, entrepreneurship, and game development. In my free time, I enjoy spending time with friends, reading, watching shows and movies, cooking, finding new music, and working on personal projects. I love meeting new people so feel free to reach out anytime!"
        },
        {
          src: JakeEsperson,
          name: "Jake Esperson",
          role: "Vice President",
          bio:
            "Hello everyone! My name is Jake, and I’m a Junior Computer Science Engineering student from Rocklin, CA. My passion for computer science started with learning about the dot-com bubble from my parents and making a pretend tech startup in one of my high school classes. I enjoy learning about virtual reality and front end web development and I want to learn more about back end databases. Outside of school, you can find me playing baseball, working on my car, or learning all the cool spots in Silicon Valley. I am always excited to make new friends, so don’t be afraid to come up and say hi!"
        },
        {
        src: AnishKatragadda,
          name: "Anish Katragadda",
          role: "Hackathon Coordinator",
          bio:
            "Hi! My name is Anish Katragadda, and I am a junior majoring in Computer Science and Engineering and I’m from Los Angeles California. I’ve always had an interest in technology, cars, and tinkering around with laptops and PCS, is what gave me true passion for computer science. And I'm always interested in learning about what’s new in Tech. Outside of school I spend a lot of time playing golf, watching Formula 1, detailing cars, traveling, and hanging out with my friends and family. Please feel free to reach out, I'm looking forward to meeting you all!"
        },
        {
        src: GriffinJones,
          name: "Griffin Jones",
          role: "Workshop Coordinator",
          bio:
            "Hi everyone! My name is Griffin, I’m a Junior Computer Science student in the College of Arts and Sciences from Wellesley, MA. I started off learning how to code in elementary school with big dreams of making a video game. I learned some basic Javascript and immediately fell in love with coding! Since then I've done a decent amount of video game design and creation in Unity, some work with reinforcement learning in Python and the pygame library, and more recently I’ve been getting into web development. Aside from my school work I’m a passionate tennis player and I love to work out. If you’re ever  interested in ACM, Computer Science in general, or just making a friend come say hi!"
        },
        {
          src: RosalieWessels,
          name: "Rosalie Wessels",
          role: "Project Coordinator",
          bio:
            "Hi! I’m Rosalie Wessels, and I am a sophomore majoring in computer science and engineering from the Netherlands. I have always been interested in everything tech and programming related — I love to participate in hackathons, build side projects, or attend ACM meetings. I am a software engineering intern at Apple, and plan to become an entrepreneur and found companies in the future. Outside of ACM I race cars and love skiing, basketball, and tennis. I am also a member of RAGE, Santa Clara’s Ultimate Frisbee Team, and the SCU Ski Club."
        },
        {
        src: JalenPaige,
          name: "Jalen Paige",
          role: "Career Development Coordinator",
          bio:
            "Hey! I’m Jalen Paige, a current junior majoring in Computer Science in the school of Arts and Sciences. I’m from Edmonds, Washington. Computer science has always been an interest of mine because of my father. Beyond that, I absolutely love listening to music (I collect vinyls!), playing video games, and playing guitar. I am a pretty approachable guy, so please come say hi at some point!"
        },
        {
          src: LindseyLeong,
          name: "Lindsey Leong",
          role: "Treasurer",
          bio:
            "Hi! My name is Lindsey and I'm a junior Computer Science and Engineering student with a minor in graphic design from Castro Valley, CA. I got super passionate about computer science after taking a course in my junior year of high school, but I've always been interested in game development since (surprise!) I love playing video games. I'm always eager to learn more about computer science and its related fields, especially web dev, automation, UX/UI, and data science. In my free time, I like playing video games, drawing, listening to music, watching shows/movies, and enjoying good food. Feel free to come say hi-- it's awesome to meet new people and I'd love to hear about your interests!"
        },
        {
          src: SamhitaRachapudi,
          name: "Samhita Rachapudi",
          role: "Outreach Coordinator",
          bio:
            "Hi! I’m Samhita Rachapudi, and I’m a senior majoring in Computer Science in the CAS from Redmond, Washington. I first became interested in computer science after getting more involved with the CS club at my high school. I decided to major in it because I loved how applicable CS is to anything and I love problem solving! In my free time I like to bake, go swimming, and spend time with my friends and family. I’m excited to serve the CS community at SCU as the IDEAS Liaison for ACM!"
        },
        {
        src: SiennaPearson,
          name: "Sienna Pearson",
          role: "Social Media Manager",
          bio:
            "Hi! I’m Sienna Pearson, a sophomore majoring in Dance and Computer Science from San Diego, CA. My passion for computer science began with my love for math and my dad's influence as a computer science teacher. My current interest is in merging technology and artistic expression, using AI and AR to explore new possibilities in choreography and performance. I hope eventually to explore sustainable software solutions and data analysis for environmental causes. I love the outdoors, dance, food, and meeting new people, so if you share any of my interests or just want to chat, I'd love to hear from you!"
        },
        {
        src: NikhilVinod,
          name: "Nikhil Vinod",
          role: "Industry Liason",
          bio:
            "Hi everyone! I’m Nikhil Vinod, a sophomore studying Computer Science from Fremont, California. My passion for computer science began after taking an Intro to Java course back in sophomore year of high school, and my love for it has only grown since then. I’m particularly interested in fields such as AI, machine learning, full stack development, and UI/UX design as well. Outside of computer science, I love playing basketball, listening to music, eating mango sticky rice, and spending time with my friends and family. I love meeting new people, so feel free to reach out if you would like to talk!"
        },
        {
        src: ChrisShobe,
          name: "Chris Shobe",
          role: "DEI Chair",
          bio:
            "Hello everyone! I'm Chris, a second-year CSE student from Redondo Beach, CA (it’s in LA County). I've known my whole life that I wanted to code. I'm most interested in technology that integrates humanity into it. I hope to eventually create software that improves people's lives. I'm not only interested in coding but I also love doing anything creative, such as digital art and playing the clarinet. I love learning about anything and everything, so if you ever feel the need to rant about something you find interesting, I’d love to hear from you! "
        },
        {
        src: IshikaGupta,
          name: "Ishika Gupta",
          role: "Secretary",
          bio:
            "Hi! I’m Ishika Gupta, a sophmore majoring in Computer Science and Engineering, and I’m from Mumbai, India. My passion for Computer Science started when I was in high school, and I have furthered my interest in tech through clubs and classes. I love listening to music, dancing, spending time with family and friends, and traveling. I love meeting new people, so feel free to reach out if you want to know more about me or just have a chat about anything!"
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
