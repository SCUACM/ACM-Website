<template>
  <div>
    <EventListSection title="2020 Events" :event-list="events2020" />
  </div>
</template>

<script>
import "../assets/scss/board-media.scss";

import EventListSection from "@/components/EventListSection.vue";

import Lockpicking from "@/assets/eventlist/Lockpicking.jpg";
import Rollerskating from "@/assets/eventlist/RollerSkating.jpg";
import Forensic from "@/assets/eventlist/Forensic.jpg";
import H4H from "@/assets/eventlist/h4h.jpg";
import EWeekFormal from "@/assets/eventlist/eWeekFormal.jpg";
import EWeekLateNightBreakfast from "@/assets/eventlist/eWeekLateNightBreakfast.jpg";
import EWeekLunch from "@/assets/eventlist/eWeekLunch.jpg";
import Capgemini from "@/assets/eventlist/Capgemini.jpg";
import EWeekCarnival from "@/assets/eventlist/eWeekCarnival.jpg";
import EWeekPhotoComp from "@/assets/eventlist/eWeekPhotoComp.jpg";
import Go from "@/assets/eventlist/Go.jpg";
import AI from "@/assets/eventlist/AI.jpg";

export default {
  name: "EventList",

  components: {
    EventListSection,
  },

  data() {
    return {
      events2020: [
        {
          src: Lockpicking,
          date: "March 10th, 2020",
          info:
            "BroncoSec hosted a Lockpicking Workshop! (Physical security still counts as security). This workshop was open to all students interested in learning how to pick a lock.",
        },
        {
          src: Rollerskating,
          date: "March 6th, 2020",
          info:
            "ACM and IEEE hosted a fun evening of roller skating at Aloha Roller Rink!",
        },
        {
          src: Forensic,
          date: "February 29th, 2020",
          info:
            "Digital Forensics is about the collection and examination of digital evidence and the subsequent response to threats and attacks. As seen weekly on your average episode of CSI or NCIS, except it's nothing like CSI or NCIS in real life. This introductory workshop taught students about Digital Forensics and Incident Response, some of the tools professionals use to uncover evidence, and worked on a simulated case. ",
        },
        {
          src: H4H,
          date: "February 22nd – February 23rd, 2020",
          info:
            "This year was SCU ACM's seventh Hack for Humanity, an annual 24-hour hackathon that includes solving pressing social issues using creativity and code. Teams comprised of 2-6 students. ",
        },
        {
          src: EWeekFormal,
          date: "February 20th, 2020",
          info:
            "To celebrate the 2020 National Engineers Week, many organizations worked together to host the first annual eWeek Formal. This free event included pizza, churros, a photo booth, and lots of dancing! It was hosted by Society of Women Engineers (SWE), the Society of Hispanic Professional Engineers (SHPE), the National Society of Black Engineers (NSBE), Women in STEM (WinSTEM), the Association for Computing Machinery--Women's Chapter (ACM-W), Peer Advisors, and STAR. The Formal was hosted in partnership with: Tau Beta Pi, ACM, Biomedical Engineering Society (BMES), American Society of Civil Engineers (ASCE), and the Institute of Electrical & Electronics Engineers (IEEE).",
        },
        {
          src: EWeekLateNightBreakfast,
          date: "February 19th, 2020",
          info:
            "To celebrate National Engineers Week, students took a Late Night Breakfast and Game break co-hosted by ACM, Society of Women Engineers (SWE), Women in STEM, Theta Tau, Engineers Without Borders, and the School of Engineering. Breakfast foods were provided by the School of Engineering staff. Board games were provided and there was even some surprise karaoke! ",
        },
        {
          src: EWeekLunch,
          date: "February 19th, 2020",
          info:
            "The School of Engineering undergraduates, graduates, faculty, and staff were all invited to the annual eWeek Lunch. There were various wellness inspired activities including a puppy petting area, an art show provided by AGES, and stress-releasing games provided by our student organizations including ACM, Society of Women Engineers (SWE), Women in STEM, Theta Tau, and Engineers Without Borders.",
        },
        {
          src: Capgemini,
          date: "February 18th, 2020",
          info:
            "ACM co-hosted the Capgemini Info Session with SWE and ACM-W for students to learn more about exciting internship and full-time opportunities. There was a special focus for students interested in the following roles: business analyst, programmer/developer, project management, and quality engineer. Chick-fil-a and Capgemini swag were provided!",
        },
        {
          src: EWeekCarnival,
          date: "February 18th, 2020",
          info:
            "To celebrate the 2020 National Engineers week, ACM joined co-hosted an engineering carnival with the Society of Women Engineers (SWE), Women in STEM, Theta Tau, Engineers Without Borders and the School of Engineering! Students received e-week t-shirts, played games, won prizes, enjoyed some sweet treats, and flew their creations in a paper airplane contest!",
        },
        {
          src: EWeekPhotoComp,
          date: "February 11th – February 18th, 2020",
          info:
            "This year for eWeek's Wellness Day, there was a Photo Competition in which students took creative photos with professors for the chance to win $50 Amazon Gift Cards! A slideshow of submitted photos was shown during the eWeek Lunch. Those who attended the lunch were able to vote for their favorites!",
        },
        {
          src: Go,
          date: "February 8th, 2020",
          info:
            "Go is an open source programming language developed by Google that makes it easy to build simple, reliable, and efficient software. Hundreds of companies use Golang, including Uber, Twitch, Dropbox and Soundclound. Taught by the famous Paul Ahrens.",
        },
        {
          src: AI,
          date: "January 25th, 2020",
          info:
            "In medical imaging, artificial intelligence (AI) models are applied to tasks such as image segmentation and disease diagnosis. After training a model to segment an image or diagnose a disease, it is necessary to consider factors other than accuracy, such as model interpretability, how the model classifies data, and so on. In this workshop, we passed medical images through a simple neural network, analyzed the receiver operating characteristic curve, and looked at what features contribute to a class prediction.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
