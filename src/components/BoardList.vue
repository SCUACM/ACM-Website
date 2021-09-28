<template>
  <div>
    <BoardListSection title="ACM Board" :memberList="mainBoard" />

    <BoardListSection title="ACM-W" :memberList="acmWBoard" />

    <BoardListSection title="Bronco Sec" :memberList="broncoSecBoard" />

    <BoardListSection title="Chapter Advisors" :memberList="chapterAdvisors" />
  </div>
</template>

<script>
import AndrewChiang from "../assets/board/Andrew_Chiang.jpg";
import CaseyBates from "../assets/board/Casey_Bates.jpg";
import DevinBhatt from "../assets/board/Devin_Bhatt.jpg";
import JamesOssam from "../assets/board/James_Ossam.jpg";
import JodiChui from "../assets/board/Jodi_Chui.png";
import JonathanHo from "../assets/board/Jonathan_Ho.png";
import KevinRooney from "../assets/board/Kevin_Rooney.png";
import MichelleLim from "../assets/board/Michelle_Lim.png";
import RaniaAnsari from "../assets/board/Rania_Ansari.jpg";
import StephenMistele from "../assets/board/Stephen_Mistele.jpg";
import SudhishSewpaul from "../assets/board/Sudhish_Sewpaul.png";
import TimHradil from "../assets/board/Tim_Hradil.png";
import VrindaShorewala from "../assets/board/Vrinda_Shorewala.jpg";
import WilliamCockrum from "../assets/board/William_Cockrum.jpg";

import YiFang from "../assets/board/chapterAdvisors/Yi_Fang.jpg";
import SilviaFiguera from "../assets/board/chapterAdvisors/Silvia_Figueira.jpg";

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
          src: MichelleLim,
          name: "Michelle Lim",
          role: "President",
          bio:
            "Hi everyone! I’m Michelle and I’m a sophomore computer science and engineering major from Fremont, CA. I got interested in computer science after watching some YouTube tutorials in my sophomore year of high school and I’ve loved it ever since. Some other things about me are that I enjoy reading, playing volleyball, and I’m trying to learn how to bake. Some fields that I’m interested in are cybersecurity and computer vision. I love meeting new people and I can’t wait to meet all of you, so don’t hesitate to reach out and say hi!",
        },
        {
          src: WilliamCockrum,
          name: "William Cockrum",
          role: "Vice President",
          bio:
            "Hi All! I’m Will, and I’m a Junior Computer Science Engineering student from Pasadena, CA. My passion for computer science started with summer camps during middle school, and then really grew during my time on my high school robotics team. I greatly enjoy learning about machine learning and I want to learn more about cybersecurity. Outside of school, I find myself watching educational youtube videos, writing “prankware”, or learning to skateboard. I am always excited to talk with people, so don’t be afraid to say hi.",
        },
        {
          src: AndrewChiang,
          name: "Andrew Chiang",
          role: "Secretary",
          bio:
            "Hello! I am currently a Junior majoring in computer science and minoring in math from Taipei, Taiwan! I am interested in machine learning & the AI field in general and plan to pursue it in the future. Aside from programming, I like to play tennis, game, cook and eat. I am looking forward to meeting and working with all of you! Feel free to reach out if you have any questions!",
        },
        {
          src: TimHradil,
          name: "Tim Hradil",
          role: "Treasurer",
          bio:
            "Hi! I'm Tim. I'm a Sophomore studying Computer Science and Engineering from Chicagoland. I've taught computer science to kids for over 3 years now and believe it has made me more empathetic and patient. Outside of ACM I'm an active member of Alpha Kappa Psi, Santa Clara Consulting, and Acts 2 Christian Fellowship. One day I hope to work in the intersection between tech and business. I value curiosity and believe experiences make life worth living. In my spare time, I enjoy working on coding projects, reading, and eating breakfast food for just about any meal of the day.",
        },
        {
          src: KevinRooney,
          name: "Kevin Rooney",
          role: "Webmaster",
          bio:
            "I'm Kevin Rooney, a Sophomore Computer Science major born and raised in Silicon Valley. My passion for Computer Science stems from my love for gaming, and so I learned coding at a young age in an attempt to build a video game. I enjoy doing full-stack and application development, and I am currently running a startup company with a team of other developers! I'm always looking for something interesting to learn, and hope to one day put my knowledge to good use in industry. I love meeting new, interesting people, so don't be afraid to reach out and say hi!",
        },
        {
          src: StephenMistele,
          name: "Stephen Mistele",
          role: "Workshop Coordinator",
          bio:
            "Hi everyone! I'm Stephen Mistele. I love meeting new people, so feel free to reach out and connect anytime! I'm currently working on a small startup called Panterix that ranks roads based on how dangerous they are, as well as a game in Unity and my personal portfolio site. The only thing I love more than programming is helping others learn the craft, so if you have any technical questions regarding website development, cloud computing, or APIs, hit me up!",
        },
        {
          src: JodiChui,
          name: "Jodi Chui",
          role: "Outreach Coordinator",
          bio:
            "Hello! My name is Jodi Chui, and I am a sophomore computer science major from Hillsborough, CA. My passion for computer science started when I coded calculators at a summer camp in 8th grade for the first time. Since then, I have been taking cs courses in school and love it. I am interested in artificial intelligence and cybersecurity but am still exploring other fields. You can typically find me golfing, playing tennis, badminton, or just outdoors during my free time. I also enjoy cooking and baking with my friends. Feel free to contact me about anything, and I can’t wait to meet you all!",
        },
        {
          src: SudhishSewpaul,
          name: "Sudhish Sewpaul",
          role: "Hackathon Coordinator",
          bio:
            "Hello ACMers! I'm a Junior studying Computer Science and Engineering from Mauritius. My passion for programming originates from high school, where I started teaching myself some programming through YouTube tutorials. During my spare time, I enjoy learning about new technologies and working on side projects. My current interest lies in machine learning and cryptocurrency, but I also enjoy learning about cybersecurity. I'm looking forward to being this year's Hackathon Coordinator and I hope to see you all there! I always enjoy meeting new people so don't hesitate to say hi, whether in person or online!",
        },
        {
          src: CaseyBates,
          name: "Casey Bates",
          role: "BroncoSec Coordinator",
          bio:
            "Hi All! I’m Casey, and I am super excited to be the BroncoSec president this year! I am a Senior Computer Science major from San Jose, CA. Cybersecurity is my main passion, and I especially enjoy solving tough challenges during capture the flag competitions. I also love learning more about other topics like computer networks, IoT, and AI. When away from my computer, you can often find me working on 3D printing projects, playing beach volleyball outside of Malley, or at Schott Stadium, where I am a student manager for the baseball team. Please feel free to reach out if you have questions, suggestions, or even just want to chat. I hope to see you all at BroncoSec events this year!",
        },
      ],

      acmWBoard: [
        {
          src: StephenMistele,
          name: "Stephen Mistele",
          role: "Workshop Coordinator",
          bio:
            "Hi everyone! I'm Stephen Mistele and I am a stupid idiot loser haha.",
        },
        {
          src: StephenMistele,
          name: "Stephen Mistele",
          role: "Workshop Coordinator",
          bio:
            "Hi everyone! I'm Stephen Mistele. I love meeting new people, so feel free to reach out and connect anytime! I'm currently working on a small startup called Panterix that ranks roads based on how dangerous they are, as well as a game in Unity and my personal portfolio site. The only thing I love more than programming is helping others learn the craft, so if you have any technical questions regarding website development, cloud computing, or APIs, hit me up!",
        },
        {
          src: StephenMistele,
          name: "Stephen Mistele",
          role: "Workshop Coordinator",
          bio:
            "Hi everyone! I'm Stephen Mistele. I love meeting new people, so feel free to reach out and connect anytime! I'm currently working on a small startup called Panterix that ranks roads based on how dangerous they are, as well as a game in Unity and my personal portfolio site. The only thing I love more than programming is helping others learn the craft, so if you have any technical questions regarding website development, cloud computing, or APIs, hit me up!",
        },
      ],

      broncoSecBoard: [
        {
          src: CaseyBates,
          name: "Casey Bates",
          role: "BroncoSec President",
          bio:
            "Hi All! I’m Casey, and I am super excited to be the BroncoSec president this year! I am a Senior Computer Science major from San Jose, CA. Cybersecurity is my main passion, and I especially enjoy solving tough challenges during capture the flag competitions. I also love learning more about other topics like computer networks, IoT, and AI. When away from my computer, you can often find me working on 3D printing projects, playing beach volleyball outside of Malley, or at Schott Stadium, where I am a student manager for the baseball team. Please feel free to reach out if you have questions, suggestions, or even just want to chat. I hope to see you all at BroncoSec events this year!",
        },
        {
          src: RaniaAnsari,
          name: "Rania Ansari",
          role: "BroncoSec Vice President",
          bio:
            "Hello! My name is Rania Ansari, and I will be a Junior studying Computer Science from San Jose. I love playing soccer, trying new food, and meeting new people! I’m super excited to serve as the Vice President of BroncoSec; we’ve got many fun things planned! My goal is to motivate other students to join and discover the endless possibilities with BroncoSec, from fun challenges to informative workshops! If you ever have any questions about anything or just want to talk, please don’t hesitate to reach out to me!",
        },
        {
          src: JamesOssam,
          name: "James Ossam",
          role: "Internal CTF Coordinator",
          bio:
            "Hi there! I’m James and I’m a senior computer science major from just outside Boston MA. I’ve been interested in cybersecurity since I was in high school, which is why I’m so excited to be your BroncoSec Internal CTF Coordinator! When I’m not on the computer, you can find me tossing a frisbee around, or hanging out with friends. I’m really looking forward to meeting everyone this year, so if you see me around, feel free to say hi!",
        },
        {
          src: JonathanHo,
          name: "Jonathan Ho",
          role: "External CTF Coordinator",
          bio:
            "Hi, I’m Jonathan, aka CSN3RD, from Cupertino, CA. I am a junior, majoring in Computer Science. Outside of school, I compete in a lot of programming, security, and puzzle competitions. Some notable achievements include winning 1st in SCU’s Hack for Humanity CTF, 1st in Harvard’s Puzzle Day (twice in a row), 3rd in Stanford’s Programming Contest, 5th in UC Berkeley’s bSUIT Coding Contest, and 6th in Akamai’s Affinity CTF. I look forward to organizing different CTF events throughout the year for us to test our skills, learn new ones, and compete with teams from other colleges. Feel free to message me if you have any questions or suggestions!",
        },
        {
          src: DevinBhatt,
          name: "Devin Bhatt",
          role: "Workshop Coordinator",
          bio:
            "Hi, I'm Devin. I'm a sophomore Computer Science and Engineering major from Mill Valley, CA. I've been interested in computing for longer than I can remember (my dad had me playing with his computer when I was two years old!), and started attending BroncoSec events during my second week at SCU. What drew me to Computer Science (and Cybersecurity especially) was the thrill of finding interesting ways to make a computer do whatever you want it to, even if that means breaking things along the way. As the BroncoSec Workshop Coordinator this year, I hope to capture that magic in the form of fun and engaging challenges that provide a valuable learning experience.",
        },
        {
          src: VrindaShorewala,
          name: "Vrinda Shorewala",
          role: "Public Relations",
          bio:
            "Hey hey! My name is Vrinda and I am a senior Computer Science major. When I'm not busy trying to debug my code, you can catch me dancing away with my friends, baking in the kitchen, or binge-watching a new series! I am super interested in security and have tried to stay involved in many initiatives on campus and outside SCU (I’d be happy to share all the resources I’ve collected so far!) I am excited to be on the board of BroncoSec and I hope to introduce more students to the amazingly vast and dynamic field of security. So feel free to reach out to me if you have any questions, ideas, or just want to talk. I can't wait to meet you all!",
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
          src: SilviaFiguera,
          name: "Dr. Silvia Figueira",
          role: "ACM-W Advisor",
          bio:
            "Dr. Silvia Figueira received her B.S. and M.S. degrees in Computer Science from the Federal University of Rio de Janeiro (UFRJ), Brazil, and her Ph.D. degree also in Computer Science from the University of California, San Diego. Currently, she is an Associate Professor of Computer Engineering at Santa Clara University. Her research is in the area of performance evaluation and prediction, recently with a focus on energy efficiency. She is also the director of the SCU Frugal Innovation Hub, in which she leads the Mobile Lab and advises students working on mobile applications for under-served communities and emerging markets. She has published over 70 papers and has established several collaborations with both companies in Silicon Valley and social entrepreneurs in the United States and abroad.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
