<template>
  <div>
    <BoardListSection title="ACM Board" :memberList="mainBoard" />

    <BoardListSection title="ACM-W" :memberList="acmWBoard" />

    <BoardListSection title="BroncoSec" :memberList="broncoSecBoard" />

    <BoardListSection title="AI Collaborate" :memberList="aiColabBoard" />

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
import RosalieWessels from "../assets/board/main/Rosalie_Wessels.jpeg";
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

import AnayaGoradia from "../assets/board/ACM-W/Anaya_Goradia.jpg";
import LeilaErhili from "../assets/board/ACM-W/Leila_Erhili.jpg";
import IsabellaAguilar from "../assets/board/ACM-W/Isabella_Aguilar.jpg";
import GwendolynPatwardhan from "../assets/board/ACM-W/Gwendolyn_Patwardhan.jpg";
import MeaganVu from "../assets/board/ACM-W/Meagan_Vu.jpg";
import AvaSimmons from "../assets/board/ACM-W/Ava_Simmons.jpg";
import IreneChang from "../assets/board/ACM-W/Irene_Chang.jpg";
import PragnyaVijayan from "../assets/board/ACM-W/Pragnya_Vijayan.png";
import EmmaBoctor from "../assets/board/ACM-W/Emma_Boctor.jpg";
import TruptiJoshiSatish from "../assets/board/ACM-W/Trupti_Joshi_Satish.jpg";
import MandyLin from "../assets/board/ACM-W/Mandy_Lin.jpg";
import MaddieFollosco from "../assets/board/ACM-W/Maddie_Follosco.jpg";
import BeatriceHackman from "../assets/board/ACM-W/Beatrice_Hackman.jpg";
import MadiNguyen from "../assets/board/ACM-W/Madi_Nguyen.jpg";
import GwynethAnawalt from "../assets/board/ACM-W/Gwyneth_Anawalt.jpg";
import ChristinaDai from "../assets/board/ACM-W/Christina_Dai.jpg";
import SanjnaSood from "../assets/board/ACM-W/Sanjna_Sood.jpg";
import PrakritiPatnaik from "../assets/board/ACM-W/Prakriti_Patnaik.jpg";

import MichaelIwashima from "../assets/board/aicolab/Michael_Iwashima.jpg"
import SayanJain from "../assets/board/aicolab/Sayan_Jain.jpg"
import Aiana from "../assets/board/aicolab/Aiana.jpg"
import Kim from "../assets/board/aicolab/Kim.jpg"
import KayaChun from "../assets/board/main/Kaya_Chun.jpg";

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
          src: AnayaGoradia,
          name: "Anaya Goradia",
          role: "President",
          bio: 
            "Hi! My name is Anaya and I am a junior majoring in Computer Science from San Ramon, California. I first realized that I liked computer science because of the thrill that you get when you finally solve a coding or math problem. Every problem is a puzzle with a new solution! I decided to major in Computer Science because it has so many applications in today's world and the possibilities are endless. Other than coding and math I love to paint or do anything art related. For fun I love to bake with my family and I'm always ready for a boba run. I’m excited to be a part of ACM-W and getting to know everyone!"
        },
        {
          src: LeilaErhili,
          name: "Leila Erhili",
          role: "Vice President",
          bio:
            "Hello! My name is Leila and I am a junior studying Computer Science and Engineering here at SCU. I absolutely love computer science, so I am a huge advocate for getting more women the opportunity to discover how fun and satisfying programming can be. I actually did not begin my college journey studying Computer Science and Engineering. My freshman year, I took a C++ class out of curiosity, and immediately knew that I had found what I wanted to study. I then switched majors and have never looked back. Other pastimes that I enjoy include moving my body (ie. gym, hiking, etc,) , thrifting, writing, and of course, spending time with the people closest to me. I am so excited to be part of such an amazing community of amazing women and can’t wait to get to know everyone! "
        },
        {
          src: IsabellaAguilar,
          name: "Isabella Aguilar",
          role: "Secretary ",
          bio:
            "Hi! My name is Isabella Aguilar and I’m a current junior studying Computer Science from Santa Clara. Prior to attending Santa Clara, I had minimal experience coding. However, after my first computer science course freshman year I knew it was what I wanted my career to be! I love being creative and having the ability to create something new! Outside of school, I love to travel and be outside. Whether it be a new coffee shop or go to a new local beach! I am really excited to be a part of ACM-W and look forward to working with a supportive community of women!"
        },
        {
          src: GwendolynPatwardhan,
          name: "Gwendolyn Patwardhan",
          role: "Treasurer",
          bio:
            "Hello! I’m Gwendolyn Patwardhan, a junior Computer Science and Engineering major and looking into art and math minors. I have always loved problem solving and creation and I found computer science to be the perfect fusion of the two. Currently, I am most interested in UX/UI design & research and game development–I currently work with SCU’s game development team in the Imaginarium. In my free time I love drawing, reading, and playing games with friends. I look forward to having a great year with you all!"
        },
        {
          src: MeaganVu,
          name: "Meagan Vu",
          role: "Director of Events",
          bio:
            "Hey! My name’s Meagan and I’m a junior studying Computer Science Engineering. Originally I came to SCU as a business major, but as soon as I took my first coding course here, I knew I wanted to code for the rest of my life (or until retirement)! Whenever I start a project, my mind goes on autopilot and the process just flows through me and the satisfaction of actually making a function program is so rewarding. Other than coding, my personality trait is being a gym rat. Excited to be apart of this program and come say hi to me if you see me in Malley ;)"
        },
        {
          src: AvaSimmons,
          name: "Ava Simmons",
          role: "Event Coordinator",
          bio:
            ""
        },
        {
          src: IreneChang,
          name: "Irene Chang",
          role: "Co-Event Coordinator",
          bio:
            ""
        },
        {
          src: PragnyaVijayan,
          name: "Pragnya Vijayan",
          role: "Co-Event Coordinator",
          bio: 
            ""
        },
        {
          src: EmmaBoctor,
          name: "Emma Boctor",
          role: "Hackathon Coordinator",
          bio:
            "Hi! My name is Emma Boctor, and I am a sophomore studying Computer Science & Engineering from Seattle, Washington. I first realized that I liked computer science when I worked at a STEM school teaching kids how to code. Seeing the creativity through the kids made me realize that you can really build whatever you set your mind to, and that made me excited to pursue a career in CSE! A couple things you may not know about me is that I am Egyptian and Australian and whether I like to admit it or not, I am a Red Bull addict. Outside of school I love to play basketball, take photos on my film camera, edit videos, and spend time with friends and family. I look forward to being a part of ACM-W and getting to know everyone!"
        },
        {
          src: TruptiJoshiSatish,
          name: "Trupti Joshi Satish",
          role: "Hackathon Coordinator",
          bio:
            "Hello, everyone! I'm Trupti Joshi, a second-year graduate student majoring in Computer Science from Santa Clara, CA. I've always been driven by curiosity and a strong work ethic, constantly seeking to uncover the endless possibilities within computer science. I'm particularly passionate about AI, ML, and distributed systems, as they hold the power to revolutionize technology and make our lives better. Currently, I'm gaining valuable experience as a Web Application Developer for the University Website, while also interning at Ciocca Center as a Graphics Intern and at Miller Center as a Data Engineer Intern. When I'm not immersed in academics, you'll find me singing, seeking thrilling adventures, and exploring new destinations. I'm beyond excited to be a part of ACM-W and can't wait to connect with everyone!"
        },
        {
          src: MandyLin,
          name: "Mandy Lin",
          role: "Director of Media",
          bio: 
            "Hi! My name is Mandy and I'm a sophomore studying Computer Science and Graphic Design from San Jose, California. I first got started in computer science in high school and have enjoyed its ability to problem solve and its limitless applications ever since. Currently, I'm interested in web development and design, but I’m still exploring more in the field. Outside of computer science, I enjoy dancing, crocheting, and making things. I’m super excited to be a part of ACM-W and to meet new people!"
        },
        {
          src: MaddieFollosco,
          name: "Maddie Follosco",
          role: "Director of Public Relations",
          bio: 
            "Hey! My name is Maddie Follosco and I am a Computer Science and Engineering major from Santa Clarita, California. In high school I thought I wanted to go into the medical field because I wanted to have a lasting impact on people's lives. However, after job shadowing engineers at a local medical devices startup, I realized I could still have that altruistic impact as an engineer by designing cool things for people. And so naturally my love for math and logic led me here and I am loving it so far. I am interested in exploring all the fields of computer science especially machine learning and game design. In my free time, I am an avid Dodgers fan, I am obsessed with pop music and R&B, and I love spending quality time with friends and family. I look forward to an amazing year with the gals at ACM-W!"
        },
        {
          src: BeatriceHackman,
          name: "Beatrice Hackman",
          role: "Industry Liaison",
          bio: 
            "Hello! I am Beatrice Hackman and I am currently a junior Web Design major from the Bay Area. In my free time I love to spend time with family and friends, take photos, hike, and binge true crime shows. Whether it was graphics or birthday cards, I always loved designing things, and so when I first learned to code, I knew that I would love web development. I am so excited to be a part of ACM-W and meet everyone!"
        },
        {
          src: MadiNguyen,
          name: "Madi Nguyen",
          role: "Industry Liaison",
          bio: 
            "Hi, my name is Madison Nguyen! I’m a junior from San Jose, California studying Web Design and Engineering. I learned about computer science in middle school from Girls Who Code and to be honest I initially hated it. However, I always admired my mom in her field, and in high school, I tried again. I was pleasantly surprised by my new love for design, helping classmates debug their code, and assisting my AP Computer Science teachers! This year I am working at the SCU Alumni Association as their Web Specialist so you are always welcome to come in and say hello! In my free time, I enjoy making eccentric Spotify playlists, trying out good food and boba spots, and making new memories with my friends. I’m excited to be ACM-W’s new secretary and I cannot wait to meet you all! :)"
        },
        {
          src: GwynethAnawalt,
          name: "Gwyneth Anawalt",
          role: "Outreach Coordinator",
          bio: 
            ""
        },
        {
          src: ChristinaDai,
          name: "Christina Dai",
          role: "Webmaster",
          bio: 
            ""
        },
        {
          src: SanjnaSood,
          name: "Sanjna Sood",
          role: "Underclassman Representative",
          bio: 
            ""
        },
        {
          src: PrakritiPatnaik,
          name: "Prakriti Patnaik",
          role: "Underclassman Representative",
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

      aiColabBoard: [
        {
          src: MichaelIwashima,
          name: "Michael Iwashima",
          role: "President",
          bio:
            ""
        },
        {
          src: SayanJain,
          name: "Sayan Jain",
          role: "",
          bio:
            ""
        },
        {
          src: Aiana,
          name: "Aiana",
          role: "",
          bio:
            ""
        },
        {
          src: KayaChun,
          name: "Kaya Chun",
          role: "",
          bio:
            "Hi! I’m Kaya Chun, a junior biomedical engineering student from all over - Georgia, Maryland, Virginia, and California! My interest in programming comes from the applications to the medical field and the ways that AI has continuously advanced clinical care. I started with object oriented programming and have furthered my interest with self research and projects. Apart from coding, I love working hands-on in labs and with my professors in their research. Beyond my academics, I love dance, drawing, and all the arts. I love spending time with friends exploring and experiencing new things together. Last but not least, I love animals and I love learning about people’s experiences with them. I’m so excited to see where my journey takes me and want to experience it with all of you so please don’t hesitate to say hi or join me on my journey!"
        },
        {
          src: Kim,
          name: "Kim",
          role: "",
          bio:
            ""
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
