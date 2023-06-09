<template>
  <div>
    <BoardListSection title="ACM Board" :memberList="mainBoard" />

    <BoardListSection title="ACM-W" :memberList="acmWBoard" />

    <BoardListSection title="BroncoSec" :memberList="broncoSecBoard" />

    <BoardListSection title="AI Collaborate" :memberList="aiColabBoard" />

    <BoardListSection title="Chapter Advisors" :memberList="chapterAdvisors" />
  </div>
</template>

<script>
import KavithaVinod from "../assets/board/main/Kavitha_Vinod.jpg";
import JordanMosakowski from "../assets/board/main/Jordan_Mosakowski.jpg";
import ConnerYin from "../assets/board/main/Conner_Yin.jpg";
import AfraMahammad from "../assets/board/main/Afra_Mahammad.jpg";
import MubashirHussain from "../assets/board/main/Mubashir_Hussain.jpg";
import ShivJhalani from "../assets/board/main/Shiv_Jhalani.jpg";
import AndrewCollins from "../assets/board/main/Andrew_Collins.jpg";
import JakeEsperson from "../assets/board/main/Jake_Esperson.jpg";
import SamhitaRachapudi from "../assets/board/main/Samhita_Rachapudi.jpg";
import AnishKatragadda from "../assets/board/main/Anish_Katragadda.jpg";
import JalenPaige from "../assets/board/main/Jalen_Paige.jpg";
import KatieCarter from "../assets/board/main/Katie_Carter.jpg";
import RileyWong from "../assets/board/main/Riley_Wong.jpg";
import KayaChun from "../assets/board/main/Kaya_Chun.jpg";

import CaseyBates from "../assets/board/broncosec/Casey_Bates.jpg";
import DevinBhatt from "../assets/board/broncosec/Devin_Bhatt.jpg";
import DannyWalsh from "../assets/board/broncosec/Danny_Walsh.jpg";
import DavisRobertson from "../assets/board/broncosec/Davis_Robertson.jpg";
import EthanSychangco from "../assets/board/broncosec/Ethan_Sychangco.png";
import TiffanyNguyen from "../assets/board/broncosec/Tiffany_Nguyen.png";
import VarunMangla from "../assets/board/broncosec/Varun_Mangla.jpg";

import AnayaGoradia from "../assets/board/ACM-W/Anaya_Goradia.jpg";
import LeilaErhili from "../assets/board/ACM-W/Leila_Erhili.jpg";
import IsabellaAguilar from "../assets/board/ACM-W/Isabella_Aguilar.jpg";
import GwendolynPatwardhan from "../assets/board/ACM-W/Gwendolyn_Patwardhan.jpg";
import MeaganVu from "../assets/board/ACM-W/Meagan_Vu.jpg";
import AvaSimmons from "../assets/board/ACM-W/Ava_Simmons.jpg";
import IreneChang from "../assets/board/ACM-W/Irene_Chang.jpg";
import EmmaBoctor from "../assets/board/ACM-W/Emma_Boctor.jpg";
import TruptiJoshi from "../assets/board/ACM-W/Trupti_Joshi.jpg";
import MandyLin from "../assets/board/ACM-W/Mandy_Lin.jpg";
import MaddieFollosco from "../assets/board/ACM-W/Maddie_Follosco.jpg";
import BeatriceHackman from "../assets/board/ACM-W/Beatrice_Hackman.jpg";
import MadiNguyen from "../assets/board/ACM-W/Madi_Nguyen.jpg";
import GwynethAnawalt from "../assets/board/ACM-W/Gwyneth_Anawalt.jpg";
import ChristinaDai from "../assets/board/ACM-W/Christina_Dai.jpg";

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
          src: JordanMosakowski,
          name: "Jordan Mosakowski",
          role: "President",
          bio:
            "Hi! My name is Jordan Mosakowski, and I am a senior Computer Science and Engineering student from Boulder, Colorado. I have been interested in computer science since I attended a video game programming camp in elementary school. In high school, I published several mobile apps on the App Store and Play Store and was an active member in my school’s FIRST robotics club. I have also developed several web and virtual reality applications, so feel free to reach out if you have questions about any of those topics. Outside of school, you can find me going to concerts, watching Formula 1 racing, or throwing a frisbee with friends. I’m looking forward to an amazing year and I can’t wait to meet all of you!"
        },
        {
          src: MubashirHussain,
          name: "Mubashir Hussain",
          role: "Vice President",
          bio:
            "Hi everyone! I’m Mubashir Hussain and I am a senior Computer Science and Engineering student with a minor in math from Santa Clara, CA. I have always had an interest in computer science, but my passion sparked through classes I took and projects I worked on in middle school and high school. I developed a love for programming through my involvement in FIRST robotics in high school with Team 254. You can always find me playing pickup basketball in Malley, finding new places to eat, and listening to music. I love meeting new people so don’t hesitate to reach out and say hi, so excited for the year!"
        },
        {
          src: KavithaVinod,
          name: "Kavitha Vinod",
          role: "Career Development Coordinator",
          bio:
            "Hi! I’m Kavitha, and I’m a senior studying Computer Science from the Bay Area. I became passionate about computer science after taking an online course the summer before my freshman year of college. I’m interested in AI, machine learning, and the use of computing to solve scientific problems. In my free time I enjoy reading, spending time with friend and family, and learning fun facts about food."
        },
        {
          src: AfraMahammad,
          name: "Afra Mahammad",
          role: "Treasurer",
          bio:
            "Hi everyone! I’m Afra, a junior Computer Science and Engineering major from San Jose, CA. I gained interest in computer science after a programming class in freshman year of high school and after I joined a robotics team in sophomore year, I became super passionate about it. I like that computer science is not a limiting subject and you can go into different fields from data science to robotics. Outside of school, I like to bake sweets, crochet, and read novels and webtoons. I love to meet new people, so make sure to say hi if you see me!"
        },
        {
          src: ConnerYin,
          name: "Conner Yin",
          role: "Outreach Coordinator",
          bio:
            "Hello! I’m Conner, a junior computer science & engineering major from Cupertino, CA. I first found my passion for programming by exploring efficient algorithms to solve time-complexity problems. Currently, I like writing scripts to beat web games as well as developing simple websites and applications. In my free time, I love writing songs, going on runs and walks, and playing social deception games with friends. Looking forward to meeting you all!"
        },
        {
          src: ShivJhalani,
          name: "Shiv Jhalani",
          role: "Director of Communications",
          bio:
            "Hi everyone! I’m Shiv, a junior computer science major from New Delhi, India. My passion for CS began through a Java course in 2017, and I haven’t looked back since! I’m interested in big data, prediction-based machine learning, and I’m currently exploring more in the field, eager to learn more about AI and ML. In my free time, you’d probably catch me watching Formula One racing, soccer, YouTube, or hanging out with friends. I love meeting and talking with people, so feel free to reach out!"
        },
        {
          src: AndrewCollins,
          name: "Andrew Collins",
          role: "Hackathon Coordinator",
          bio:
            "Hello, I’m Andrew, a Sophomore Computer Science and Engineering student from San Diego, CA. My passion for computer science started in middle and high school through classes and clubs where I learned how to develop simple websites and fetch data from APIs. I am interested in mobile development, ML and AI, entrepreneurship, and game development. In my free time, I enjoy spending time with friends, reading, watching shows and movies, cooking, finding new music, and working on personal projects. I love meeting new people so feel free to reach out anytime!"
        },
        {
          src: JakeEsperson,
          name: "Jake Esperson",
          role: "Workshop Coordinator",
          bio:
            "Hello everyone! My name is Jake, and I’m a Sophomore Computer Science Engineering student from Rocklin, CA. My passion for computer science started with learning about the dot-com bubble from my parents and making a pretend tech startup in one of my high school classes. I enjoy learning about virtual reality and front end web development and I want to learn more about back end databases. Outside of school, you can find me playing baseball, working on my car, or learning all the cool spots in Silicon Valley. I am always excited to make new friends, so don’t be afraid to come up and say hi!"
        },
        {
          src: SamhitaRachapudi,
          name: "Samhita Rachapudi",
          role: "IDEAS Liaison",
          bio:
            "Hi! I’m Samhita Rachapudi, and I’m a junior majoring in Computer Science in the CAS from Redmond, Washington. I first became interested in computer science after getting more involved with the CS club at my high school. I decided to major in it because I loved how applicable CS is to anything and I love problem solving! In my free time I like to bake, go swimming, and spend time with my friends and family. I’m excited to serve the CS community at SCU as the IDEAS Liaison for ACM!"
        },
        {
        src: KayaChun,
          name: "Kaya Chun",
          role: "Social Media Manager",
          bio:
            "Hi! I’m Kaya Chun, a junior biomedical engineering student from all over - Georgia, Maryland, Virginia, and California! My interest in programming comes from the applications to the medical field and the ways that AI has continuously advanced clinical care. I started with object oriented programming and have furthered my interest with self research and projects. Apart from coding, I love working hands-on in labs and with my professors in their research. Beyond my academics, I love dance, drawing, and all the arts. I love spending time with friends exploring and experiencing new things together. Last but not least, I love animals and I love learning about people’s experiences with them. I’m so excited to see where my journey with ACM takes me and want to experience it with all of you so please don’t hesitate to say hi or join me on my journey!"
        },
        {
        src: JalenPaige,
          name: "Jalen Paige",
          role: "Industry Liaison",
          bio:
            "Hey! I’m Jalen Paige, a current Sophomore majoring in Computer Science in the school of Arts and Sciences. I’m from Edmonds, Washington. Computer science has always been an interest of mine because of my father. Beyond that, I absolutely love listening to music (I collect vinyls!), playing video games, and playing guitar. I am a pretty approachable guy, so please come say hi at some point!"
        },
        {
        src: AnishKatragadda,
          name: "Anish Katragadda",
          role: "Industry Liaison",
          bio:
            "Hi! My name is Anish Katragadda, and I am a sophomore majoring in Computer Science and Engineering and I’m from Los Angeles California. I’ve always had an interest in technology, cars, and tinkering around with laptops and PCS, is what gave me true passion for computer science. And I'm always interested in learning about what’s new in Tech. Outside of school I spend a lot of time playing golf, watching Formula 1, detailing cars, traveling, and hanging out with my friends and family. Please feel free to reach out, I'm looking forward to meeting you all!"
        },
        {
        src: KatieCarter,
          name: "Katie Carter",
          role: "Secretary",
          bio:
            "Hello! I’m Katie Carter, a Sophomore of Computer Science and Engineering, from a little town in Central California called Lockwood. My love for computer science and all STEM started in Junior High, and since then, I’ve gone to workshops and taken classes to further that passion. I want to learn more and grow so I can share my love of Computer Engineering with others! Outside of academics, I’m involved in Theatre production and management, Residence Life, and more. My favorite pastimes include video games, reading, music, movies, art, and hanging out with friends. I love meeting new people, and I’d love it if you wanted to reach out!"
        },
        {
          src: RileyWong,
          name: "Riley Wong",
          role: "Webmaster",
          bio:
            "Hi everyone! I’m Riley, a Sophomore Computer Science student from El Cerrito here in the Bay Area. My passion for computer science began with MIT Scratch back in middle school. At the time, I didn’t even know what a function was, but I made my unnecessary 1000 blocks of code work… Currently, I am devoting most of my study to honing full-stack software development, web development, and open-source contributing. In my free time I’ll be found playing tennis, video games, rendering a new 3D project in Blender, or practicing a new song on the guitar. I’m excited to meet new people, so don’t hesitate to reach out!"
        }
      ],

      acmWBoard: [
        {
          src: AnayaGoradia,
          name: "Ananya Goradia",
          role: "President",
          bio: 
            ""
        },
        {
          src: LeilaErhili,
          name: "Leila Erhili",
          role: "Vice President",
          bio:
            ""
        },
        {
          src: IsabellaAguilar,
          name: "Isabella Aguilar",
          role: "Secretary ",
          bio:
            ""
        },
        {
          src: GwendolynPatwardhan,
          name: "Gwendolyn Patwardhan",
          role: "Treasurer",
          bio:
            ""
        },
        {
          src: MeaganVu,
          name: "Meagan Vu",
          role: "Director of Events",
          bio:
            ""
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
          role: "Event Coordinator",
          bio:
            ""
        },
        {
          src: EmmaBoctor,
          name: "Beatrice Hackman",
          role: "Hackathon Coordinator",
          bio:
            ""
        },
        {
          src: TruptiJoshi,
          name: "Trupti Joshi",
          role: "Hackathon Coordinator",
          bio:
            ""
        },
        {
          src: MandyLin,
          name: "Mandy Lin",
          role: "Director of Media",
          bio: 
            ""
        },
        {
          src: MaddieFollosco,
          name: "Maddie Follosco",
          role: "Director of Public Relations",
          bio: 
            ""
        },
        {
          src: BeatriceHackman,
          name: "Beatrice Hackman",
          role: "Industry Liaison",
          bio: 
            ""
        },
        {
          src: MadiNguyen,
          name: "Madi Nguyen",
          role: "Industry Liaison",
          bio: 
            ""
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
      ],

      broncoSecBoard: [
        {
          src: DannyWalsh,
          name: "Danny Walsh",
          role: "BroncoSec President",
          bio:
            "Hello, my name is Danny Walsh, and I’m excited to be BroncoSec President this year! I am a junior Web Design & Engineering major from Georgetown, Massachusetts. When I’m not at my computer, I’m probably playing hockey for the SCU club ice hockey team, cooking for my friends, or playing guitar. I’m especially interested in front-end development, learning good UI techniques, and solving difficult coding challenges. I’m looking forward to seeing so many of you at our BroncoSec events and sharing our interest in cyber security. If you have any questions, feel free to reach out!",
        },
        {
          src: VarunMangla,
          name: "Varun Mangla",
          role: "Public Relations",
          bio:
            "Hello everyone! I'm Varun, a sophomore Computer Science and Engineering student from Los Altos, CA. While I only started coding during the winter quarter of my first year at SCU, I've always been fascinated with technology. I'm eager to join BroncoSec as its Public Relations manager this year, as participating in the club helped me develop a budding interest in cybersecurity. Through this role, I intend to introduce other students to BroncoSec and the ever-growing field of cybersecurity. Outside of computer science, some of my interests are music, games, and hanging out with my friends. Please let me know if you have any questions or suggestions, and I'm looking forward to seeing everyone at our weekly club meetings!",
        },
        {
          src: EthanSychangco,
          name: "Ethan Sychangco",
          role: "Underclassmen Representative",
          bio:
            "Hello, my name is Ethan Sychangco! I am one of your BroncoSec underclassman representatives for the 2022-2023 school year! I am a first-year majoring in Computer Science and Engineering, and I am local to the Bay Area. I find interest in all things technology, gaming, and cybersecurity, and I want to bring that excitement to the BroncoSec club. When I am not laser-focused on developing a project, I am probably spending time with family, enjoying game nights with friends, or watching random YouTube videos to take a break from my busy days. I want to make sure all BroncoSec members have their voices heard, and that we can support each other's passions for cybersecurity. You can reach out to me at any time!",
        },
        {
          src: TiffanyNguyen,
          name: "Tiffany Nguyen",
          role: "Representative",
          bio:
            "My name is Tiffany Nguyen, and I am a freshman majoring in Computer Science and Engineering from San Jose, California. I am passionate about learning about all the fun and interesting ways computer science can be applied across various fields like cybersecurity, and I hope to be able to help plan fun activities that get others excited about security.",
        },
        {
          src: DavisRobertson,
          name: "Davis Robertson",
          role: "External CTF Coordinator",
          bio:
            "Hello! I’m Davis and I’m excited to be BroncoSec’s external CTF coordinator this year! I am a junior computer science (security emphasis) and philosophy major from New York. I’ve been interested in computer science since I was a kid and have really enjoyed being a part of BroncoSec at SCU. When I’m not writing papers or working on CS projects there’s a good chance you can find me playing or watching basketball. Please reach out if you have any questions or for any other reason, I’m looking forward to connecting with the BroncoSec community!",
        },
        {
          src: DevinBhatt,
          name: "Devin Bhatt",
          role: "BroncoCTF Coordinator",
          bio:
            "Hi, I’m Devin. I’m a junior Computer Science from the Bay Area. For my second year on the BroncoCTF board, I’ve taken on the role of BroncoCTF coordinator. Most of my work at BroncoSec involves planning for BroncoCTF, writing challenges, and setting up the infrastructure for you to (hopefully not) break :wink:. I love to learn new things (especially when it comes to security and infrastructure), and I love to help others learn as well. I hope that BroncoCTF is not just a fun event, but a learning opportunity for all of its attendees!",
        },
        {
          src: CaseyBates,
          name: "Casey Bates",
          role: "Graduate Relations",
          bio:
            "Hi All! I’m Casey, a Computer Science and Engineering Master's student from San Jose, CA. I'm passionate about Cybersecurity, and I especially enjoy solving tough challenges during capture the flag competitions. I also love learning more about other topics like computer networks, IoT, and cloud computing. Outside of school, I've been able to combine my interests in computers and baseball by working as a Software Engineer for the Philadelphia Phillies. Please feel free to reach out if you have questions, suggestions, or even just want to chat. I hope to see you all at BroncoSec events this year!",
        }
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
