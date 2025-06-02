import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import emailjs from 'emailjs-com';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/forest.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from '../images/portfolio/portfolio-5.png';
import portfolioImage6 from '../images/portfolio/portfolio-6png.png';
import portfolioImage7 from '../images/portfolio/tenzies.png';
import portfolioImage8 from '../images/portfolio/realmaps.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/sandy.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

emailjs.init('o9FZ4o6_bTNsmBLBD');

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Anthony Clark - Full-Stack Developer | React Resume',
  description: "Anthony Clark's interactive React-based resume showcasing skills, experience, and projects as a full-stack developer.",
};


/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anthony Clark.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Sea Girt based <strong className="text-stone-100">Full Stack Software Engineer</strong>, previously working
        at <strong className="text-stone-100">Fortrea</strong> helping build mobile clincial trials for Labcorp patient studies. Currently looking for work.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me skateboarding at the <strong className="text-stone-100">skatepark</strong>,
        chasing good <strong className="text-stone-100">snowstorms</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">hikes</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume2025May.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A highly motivated and dedicated Software Engineer seeking a full-time position where I can contribute to the success of a dynamic company and further develop my skills in the Software Technology field.`,
  aboutItems: [
    {label: 'Location', text: 'Sea Girt, NJ', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Italian / Irish / Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'Skateboarding, Snowboarding, Hiking', Icon: SparklesIcon},
    {label: 'Study', text: 'San Diego State University - Management Information Systems', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Labcorp, Fortrea', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Material UI',
        level: 9,
      },
      {
        name: 'Bootstrap',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express.js',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Android',
        level: 9,
      },
      {
        name: 'iOS',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Crochet Nation',
    description: 'A fully live eCommerce store',
    url: 'https://crochetnation.org/',
    image: porfolioImage1,
  },
  {
    title: 'Yelp Camp',
    description: 'A location-based Campground Review App.',
    url: 'https://yelpcamprender.onrender.com/',
    image: porfolioImage2,
  },
  {
    title: 'Digital Business Card',
    description: 'A digital business card',
    url: 'https://digital-business-card-dun.vercel.app/',
    image: porfolioImage3,
  },
  {
    title: 'Travel Journal',
    description: 'A brief overview of my travels',
    url: 'https://mytravel-journal.vercel.app/',
    image: portfolioImage4,
  },
  {
    title: 'Meme Generator',
    description: 'A meme generator',
    url: 'https://memerator.vercel.app/',
    image: portfolioImage5,
  },
  {
    title: 'Notes App',
    description: 'Notes App for Web',
    url: 'https://notes-app-port.vercel.app/',
    image: portfolioImage6,
  },
  {
    title: 'Tenzies',
    description: 'Tenzies Dice Game',
    url: 'https://tenzies-roll.vercel.app/',
    image: portfolioImage7,
  },
   {
     title: 'RealMaps',
     description: 'Explore Property Sales in Monmouth County! Search real estate transactions, visualize trends, and gain insights from verified county data.',
     url: 'https://realmap-v1.vercel.app/',
     image: portfolioImage8,
   },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2019',
    location: 'San Diego, CA',
    title: 'San Diego State University - Fowler School of Business - Management Information Systems',
    content: <p>My academic journey at SDSU has not just equipped me with the knowledge of Information Systems but also honed a myriad of skills that I am eager to apply in the professional realm. Whether it's database management, system design, programming, or data analytics, I am confident in my abilities to contribute, innovate, and excel.</p>,
  },
  {
    date: 'Febuary 2025',
    location: 'San Diego, CA',
    title: 'UC San Diego Machine Learning Engineering Bootcamp 2025',
    content: <p>400+ hours of hands-on course material, with 1:1 industry expert mentor oversight, and completion of 1 in-depth capstone project. Mastered skills in the machine learning stack, including data wrangling at scale, deep learning, and building and deploying large-scale AI systems. Please see my capstone project: <b><u><a href='https://github.com/TJC1996/RealMap/tree/main'>RealMaps</a></u></b> </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2021 - May 2025',
    location: 'Fortrea (Formerly LabCorp Covance)',
    title: 'Software Engineer',
    content: (
      <ul>
      <li>- Developed clinical trials utilizing languages such as JavaScript, HTML5, and CSS3, ensuring seamless user experience and increased customer satisfaction.</li>
      <li>- Collaborated with cross-functional teams, including UI/UX designers, product managers, and back-end developers, to deliver cohesive and comprehensive web solutions for clients.</li>
      <li>- Configured and managed Mobile Device Management (MDM) policies to ensure the security and compliance of mobile applications across various devices, protecting sensitive clinical trial data and adhering to industry standards.</li>
      <li>- Created custom widgets to fulfill project requirements</li>
      </ul>
    ),
  },
  {
    date: 'June 2020 - January 2021',
    location: 'SnapIot',
    title: 'Web Application Developer',
    content: (
      <ul>
      <li>- Played a pivotal role in the rapid growth of SnapIot as a leading platform-as-a-service provider for mobile-connected, self-service clinical trial solutions during the Covid-19 pandemic, ensuring timely delivery of critical applications.</li>
      <li>- Developed and maintained high-performance web applications to streamline clinical trials, utilizing the SnapClinical platform, contributing to increased efficiency and adaptability during the pandemic.</li>
      <li>- Adapted to remote work environments and maintained clear communication with team members, leveraging Agile methodologies and tools like Jira and Git to effectively manage project progress and consistently meet tight deadlines.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Susan Sitar',
      text: 'I am extremely happy with Crochet Nation, our small business can now go to the next step with our online store!',
      image: 'https://i.ibb.co/Bgs7Hf6/mom2.png',
    },
    {
      name: 'Alicia Dibiase',
      text: 'I worked with Anthony to revamp a e-commerce site. Anthony is really open to critiques and makes the effort to implement design changes to his work. It really helps with creating and implementing up to date designs that are aligned with my user research.',
      image: 'https://i.ibb.co/NnWH7h50/alicia.jpg',
    },
    {
      name: 'Stella Clark',
      text: 'It was a breeze to help design Crochet Nation, I am glad to have had the opportunity to work along side Anthony.',
      image: 'https://i.ibb.co/4pdpFDK/Customer3.png',
    },
  
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact Me',
  description: 'Feel free to reach out below with any business inquries or questions.',
  items: [
    {
      type: ContactType.Email,
      text: 'tonyclark1996@gmail.com',
      href: 'mailto:tonyclark1996@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Sea Girt, NJ',
      href: 'https://maps.app.goo.gl/S5eEui7ZLkP6u46P7',
    },
    {
      type: ContactType.Instagram,
      text: '@tony__clark',
      href: 'https://www.instagram.com/tony__clark/',
    },
    {
      type: ContactType.Github,
      text: 'tjc1996',
      href: 'https://github.com/tjc1996',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tjc1996'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anthony-clark-6a0543162/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tony__clark/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
