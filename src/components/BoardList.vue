<template>
  <div>
    <BoardListSection title="ACM Board" :memberList="mainBoard" />

    <BoardListSection title="ACM-W" :memberList="acmWBoard" />

    <BoardListSection title="Bronco Sec" :memberList="broncoSecBoard" />

    <BoardListSection title="Chapter Advisors" :memberList="chapterAdvisors" />
  </div>
</template>

<script>
import AndrewChiang from "../assets/board/main/Andrew_Chiang.jpg";
import CaseyBates from "../assets/board/broncosec/Casey_Bates.jpg";
import DevinBhatt from "../assets/board/broncosec/Devin_Bhatt.jpg";
import JamesOssam from "../assets/board/broncosec/James_Ossam.jpg";
import JodiChui from "../assets/board/main/Jodi_Chui.jpg";
import JonathanHo from "../assets/board/broncosec/Jonathan_Ho.jpg";
import KevinRooney from "../assets/board/main/Kevin_Rooney.jpg";
import MichelleLim from "../assets/board/main/Michelle_Lim.jpg";
import RaniaAnsari from "../assets/board/broncosec/Rania_Ansari.jpg";
import StephenMistele from "../assets/board/main/Stephen_Mistele.jpg";
import SudhishSewpaul from "../assets/board/main/Sudhish_Sewpaul.jpg";
import TimHradil from "../assets/board/main/Tim_Hradil.jpg";
import VrindaShorewala from "../assets/board/broncosec/Vrinda_Shorewala.jpg";
import WilliamCockrum from "../assets/board/main/William_Cockrum.jpg";
import KavithaVinod from "../assets/board/main/Kavitha_Vinod.jpg";
import JordanMosakowski from "../assets/board/main/Jordan_Mosakowski.jpg";
import DannyWalsh from "../assets/board/broncosec/Danny_Walsh.jpg";
import Nechal from "../assets/board/broncosec/Nechal.jpg";

import AmandaNguyen from "../assets/board/ACM-W/Amanda_Nguyen.jpeg";
import AnanyaPagadala from "../assets/board/ACM-W/Ananya_Pagadala.jpeg";
import AnayaGordia from "../assets/board/ACM-W/Anaya_Gordia.jpeg";
import DivyaSyal from "../assets/board/ACM-W/Divya_Syal.png";
import EerinaHaque from "../assets/board/ACM-W/Eerina_Haque.jpeg";
import KamyaKrishnan from "../assets/board/ACM-W/Kamya_Krishnan.jpeg";
import MaddieWaldie from "../assets/board/ACM-W/Maddie_Waldie.jpeg";
import MadeleineDoi from "../assets/board/ACM-W/Madeleine_Doi.jpeg";
import PriyaJain from "../assets/board/ACM-W/Priya_Jain.jpeg";

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
            "Hi everyone! I’m Michelle and I’m a Junior computer science and engineering major from Fremont, CA. I got interested in computer science after watching some YouTube tutorials in my sophomore year of high school and I’ve loved it ever since. Some other things about me are that I enjoy reading, playing volleyball, and I’m trying to learn how to bake. Some fields that I’m interested in are cybersecurity and computer vision. I love meeting new people and I can’t wait to meet all of you, so don’t hesitate to reach out and say hi!",
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
            "I'm Kevin Rooney, a Junior Computer Science major born and raised in Silicon Valley. My passion for Computer Science stems from my love for gaming, and so I learned coding at a young age in an attempt to build a video game. I enjoy doing full-stack and application development, and I am currently running a startup company with a team of other developers! I'm always looking for something interesting to learn, and hope to one day put my knowledge to good use in industry. I love meeting new, interesting people, so don't be afraid to reach out and say hi!",
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
        {
          src: KavithaVinod,
          name: "Kavitha Vinod",
          role: "Underclassmen Representative",
          bio:
            "Hi! I’m Kavitha, and I’m a sophomore studying Computer Science from the Bay Area. I became passionate about computer science after taking an online course the summer before my freshman year of college. I’m interested in AI, machine learning, and the use of computing to solve scientific problems. In my free time I enjoy reading, spending time with friend and family, and learning fun facts about food. I’m really excited to be underclassman rep this year, and help people new to college, coding, or both feel like they’re part of the ACM community!",
        },
        {
          src: JordanMosakowski,
          name: "Jordan Mosakowski",
          role: "Underclassmen Representative",
          bio:
            "Hi! My name is Jordan Mosakowski, and I am a freshman Computer Science and Engineering student from Boulder, Colorado. I have been interested in computer science since I attended a video game programming camp in elementary school. In high school, I published several mobile apps on the App Store and Play Store and was an active member in my school’s robotics club. I have also developed several web and virtual reality applications, so feel free to reach out if you have questions about any of those topics. Outside of school, you can find me playing piano, watching Formula 1 racing, or throwing a frisbee with friends. I’m looking forward to an amazing year and I can’t wait to meet all of you!",
        },
      ],

      acmWBoard: [
        {
          src: KamyaKrishnan,
          name: "Kamya Krishnan",
          role: "President",
          bio:
            "Hey! My name is Kamya Krishnan and I am a sophomore computer science and engineering major. When I was a junior in high school, my mom encouraged me to try out a computer science course. After taking it, I realized that I really enjoyed coming up with solutions to problems through coding. I decided to pursue a degree in computer science and engineering because I believe that there are so many problems that can be solved in our world with a background in technology. Besides technology, I am passionate about singing Indian classical music and I also love lifting weights and playing basketball. Sunsets are like my favorite thing ever so I am always ready to go watch one :) Also, going to Safeway  just to get a slice of chocolate cake is a ritual for me. I am excited to be your  ACM-W president this year and so excited to get to know everyone!",
        },
        {
          src: AnanyaPagadala,
          name: "Ananya Pagadala",
          role: "Vice President ",
          bio:
            "Howdy! My name is Ananya, and I'm a sophomore studying Computer Science from Dallas, Texas. My passion for computer science stems from my obsession with brain teasers and puzzles. I'm addicted to the feeling you get when you finally figure out a solution, similar to the one where your code successfully runs! This past year, I've been working with algorithm efficiency and AI, and although I love it, I can't wait to explore other areas of CS.  In my free time, I enjoy gardening, running, and watching horror movies with friends. I'm so excited to be the Vice- President of ACM-W this year and explore our potential in tech as a community. Feel free to reach out if you want to be friends, work together, or simply have any qu",
        },
        {
          src: MadeleineDoi,
          name: "Madeleine Doi",
          role: "Secretary ",
          bio:
            "Hello!! I am a sophomore majoring in Computer Science from Seattle, Washington. I was first introduced to computer science in 8th grade when I participated in a computer science camp. This was the first time I discovered how to print my name to the terminal window and I have been hooked on computer science since. My main passions include being an advocate for mental health awareness, inspiring women to join the STEM field, skiing, stand-up paddle boarding, and swimming! Feel free to reach out to me if you have any questions, want to be friends, or simply just want to talk! I look forward to meeting you all!",
        },
        {
          src: PriyaJain,
          name: "Priya Jain",
          role: "Treasurer ",
          bio:
            "Hi! My name is Priya Jain and I am from Los Altos, California but I am originally from Santa Clara! I am really grateful to have been selected to be the Treasurer for ACM-W this year. I am a sophomore majoring in Web Design and Engineering, which I discovered my passion for through AP Computer Science and Girls Who Code. I love being able to add my personal touch to assigned projects through colors, music, or any other visuals. In my free time, I love to go on social media (I can spend hours on Pinterest!), eat junk food, spend time with friends and family, and do creative writing. Feel free to reach out if you ever need anything!",
        },
        {
          src: AmandaNguyen,
          name: "Amanda Nguyen",
          role: "Co-Event Coordinator",
          bio:
            "Hi! My name is Amanda and I’m a sophomore studying Computer Science from San Jose, California. My interest in computer science began with trying out a programming course in middle school and getting excited over figuring out solutions through code. I’m especially interested in artificial intelligence, machine learning, and game design. In my free time, I like knitting while binge watching TV shows as well as playing video games with my friends. I look forward to getting to know everyone!",
        },
        {
          src: DivyaSyal,
          name: "Divya Syal",
          role: "Co-Event Coordinator",
          bio:
            "Hey! I’m Divya and I’m a sophomore computer science and engineering major from Seattle, WA. I enjoy playing tennis, drawing, baking, and dancing in various styles, including Bollywood and lyrical; I love traveling and exploring new places! My passion for computer science was sparked in my freshman year of high school when I initially joined Girls Who Code and started coding with Scratch. I am interested in many different fields of computer science, but I am especially interested in applying computer science to solutions centered around healthcare, education, and sustainability. I am super excited to be an event coordinator this year and organize fun events. I like meeting new people, so feel free to reach out to me at any time!",
        },
        {
          src: MaddieWaldie,
          name: "Maddie Waldie",
          role: "Hackathon Coordinator",
          bio:
            "Hi everyone, I'm Maddie! Growing up in Philadelphia, I was always fascinated by technology. I was often glued to my family’s iMac, trying to learn new things and figure out how things worked. In high school, I was on my school’s robotics team and fell in love with the world of programming and the art of engineering. Now, I’m a sophomore Computer Science & Engineering major and Math minor! I’m particularly interested in delivering a high-quality product to people, and this summer I worked at Apple as a Software Engineering QA Intern. Outside of school and work, I love to read, bake, crochet, and go hiking. I’m also a Black Belt in Tang Soo Do, and am a member of SCU Harry Potter Club, SWE, ACM, and ACM-W. I’m so excited to meet all of you; feel free to reach out because I love making new friends!",
        },
        {
          src: AnayaGordia,
          name: "Anaya Gordia",
          role: "Underclassmen Representative",
          bio:
            "Hi! My name is Anaya and I am a freshman majoring in Computer Science from San Ramon, California. I first realized that I liked computer science because of the thrill that you get when you finally solve a coding or math problem. I decided to major in Computer Science because it has so many applications in today's world and the possibilities are endless. Other than coding and math I love to paint or do anything art related. For fun I love to bake with my family and I'm always ready for a boba run. I look forward to being a part of ACM-W and getting to know everyone!",
        },
        {
          src: EerinaHaque,
          name: "Eerina Haque",
          role: "Underclassmen Representative",
          bio:
            "Hi, I’m Eerina Haque and I’m a first-year computer science and engineering major from Dallas, Texas! I’m looking forward to helping enrich the ACM-W community and getting to know all of the brilliant technologists within ACM-W. I love learning about blockchain technology. In my free-time, I enjoy balancing my love for computing with my love for humanities by oil painting landscapes, learning about philosophy, and playing the guitar. ",
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
        {
          src: DannyWalsh,
          name: "Danny Walsh",
          role: "Underclassmen Representative",
          bio:
            "Hello, my name is Danny Walsh, and I’m excited to be one of two BroncoSec Underclassmen Reps. I am a sophomore Web Design & Engineering major from North Shore, Massachusetts. When I’m not at my computer, I’m probably playing hockey for the SCU club ice hockey team, cooking for my friends, or playing guitar. I’m especially interested in front-end development, learning good UI techniques, and solving difficult coding challenges. I’m looking forward to getting other underclassmen excited about cybersecurity and growing BroncoSec. I look forward to seeing everyone at our workshops, speaker events, and Capture the Flag events. If you have any questions, feel free to reach out!",
        },
        {
          src: Nechal,
          name: "Nechal Thind",
          role: "Underclassmen Representative",
          bio:
            "Hi!!! My name is Nehchal, and I’m a freshman from Danville, CA. I have been interested in computer science for as long as I can remember and am so excited to be this year’s Broncosec underclassmen representative! Some things I love are traveling, working out, cooking, meeting new people, finding new music, and many other things! My goal for this year is to get everyone as excited about cyber security as I am and to share my love of the field with you all! I can’t wait to meet everyone at our upcoming meetings this year, and please feel free to reach out to me if you have any questions or just want to say hey!",
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
