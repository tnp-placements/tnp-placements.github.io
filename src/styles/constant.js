import Campus from '../images/campus.png';
import Ranking from '../images/ranking.png';
import Established from '../images/established.png';
import HistoryImage from '../images/HistoryTopImg.jpg';
import Fest from '../images/Fests.jpg';
import Societies from '../images/societies.jpg';
import Sports from '../images/Sports.jpg';
import Lab from '../images/Labs.jpg';

import Achievement1 from '../images/Achievements1.jpg';
import Achievement2 from '../images/Achievements2.png';
import Achievement3 from '../images/Achievements3.png';

export const about = {
    aboutText: "The Training and Placement Section at NSUT is responsible for all placement-related activities at our institution. We play a vital role in bridging the gap between corporate and academia, ensuring that our students gain hands-on experience through internships during winter and summer breaks. These internships span multinational, private, and public sector companies, as well as government departments and foreign universities. The Campus Recruitment Programme at NSUT is a cornerstone for our students, providing them with the opportunity to secure placements in government departments, multinational companies, and public sector undertakings. Thanks to our close collaboration with various company executives and the diligent efforts of our student placement coordinators, we have achieved an outstanding placement record. Our graduates consistently secure positions in prestigious organizations across multiple sectors, often receiving multiple job offers. Many students have also been accepted into renowned Indian B-Schools such as the Indian Institutes of Management (Ahmedabad, Calcutta, Kozhikode, and Lucknow) and the Faculty of Management Studies (FMS), as well as top foreign universities like the University of Pennsylvania and Columbia University for higher studies. NSUT places great emphasis on strengthening industry-institute interaction and collaboration with other educational institutions and R&D laboratories, both nationally and internationally.",
    aboutTexts: "Some top-notch organizations where our students have interned and secured placements include:",
   
    cardDetails: [
        {
            imgUrl: Campus,
            title: "Technical Profiles",
            description: "Microsoft, Google, Adobe, Goldman Sachs, Rubrik, Tower Research Capital, Uber, Salesforce, D.E. Shaw, Atlassian, PayPal, PhonePe, Walmart, Zomato, Morgan Stanley, Arcesium, Cisco, Fast Retailing (Japan), Expedia Group, Samsung, Intuit, MyKaarma, Urban Company, Visa, and Media.net"
        },
        {
            imgUrl: Ranking,
            title: "Non-Technical Domain",
            description: "Bain and Company, JPMorgan, ZS Associates, McKinsey and Company, BlackRock Group, American Express, KPMG, E&Y, Axis Bank, Axxela, RBL Bank, EXL, Mastercard, Future First, LEK, and Thorogood."
        },
        {
            imgUrl: Established,
            title: "Core Domain",
            description: "Texas Instruments, Nvidia, Qualcomm, Cadence, Samsung, Bharti Airtel, Reliance, Vedanta, Schlumberger, Maruti, Anand Motors, Hero Moto Corp, Siemens, ARM, Jubilant Foodworks, GAIL, CDOT, and BEL"
        }
    ]
}

export const stats = [
    {
        value: 20000,
        key: "network"
    },
    {
        value: 300,
        key: "companies"
    },
    {
        value: 10,
        key: "countries"
    },
    {
        value: 15,
        key: "successful startups"
    }
];


// Import all images from the images folder
const importAll = (requireContext) =>
    requireContext.keys().map((item) => requireContext(item));

// Create an array of image file paths
export const companyLogos = importAll(require.context('../images/logo', false, /\.(png|jpe?g|svg)$/));


export const history = [
    {
        src: HistoryImage,
        alt: "history 1",
        description: `Towards meeting the growing demand of manpower in the field of technology, the then Delhi Administration, with the approval of Ministry of Human Resources Development (MHRD), Govt. of India, established a new Engineering College by the name of Delhi Institute of Technology (DIT) in July, 1983. In the year 1983, the Institute started with the academic program at UG level in the area of Electronics & Communication Engineering. New programs in the areas of Computer Engineering, Instrumentation & Control Engineering, and Manufacturing Processes & Automation Engineering were added subsequently. Administrative autonomy was granted to the institute in 1986. The Institute was registered as a Society in the name of “Delhi Institute of Technology” (DIT) on 12th June 1987. The Institute initiated Ph.D. programs in 1989 and also formulated a number of PG programs, four of which were approved by the AICTE in the year 1994. The Institute has been affiliated to University of Delhi for all its UG, PG and Ph.D. programs.`
    },
    {
        src: HistoryImage,
        alt: "history 2",
        description: `From 1983 till 1998, the Institute was operating from its old campus at the old I.G. Block, Kashmere Gate, Delhi - 110006. The Institute was formally inaugurated in its own new campus in Dwarka, New Delhi, 23rd January, 1997 by Sh. Atal Bihari Vajpayee , the former Prime Minister of India. The Institute was renamed as "Netaji Subhas Institute of Technology" (NSIT) in the year 1997.An Act was passed on 26th September 2018 to provide for the reconstitution and upgradation of the Netaji Subhas Institute of Technology as a non-affiliating Netaji Subhas University of Technology, and to provide for education and research in branches of engineering, technology, sciences, humanities, social sciences and management and for the advancement of learning and dissemination of knowledge in such branches and for certain other matters connected therewith or incidental thereto.Netaji Subhas University of Technology (NSUT) is a seat of higher technical education in India. Prof. Jai Prakash Saini is the Founder Vice-Chancellor of Netaji Subhas University of Technology (NSUT), New Delhi.`
    }
];


export const studentLife = [
    {
        src: Fest,
        title: "Fests",
        alt: "Fests",
        description: `The college is known for its brilliantly organized inter college fests - Moksha, Innovision & Resonanz, which are frequented by stars and musicians of international repute & attended by students from all over India. These fests facilitate holistic development, promote team culture and help free the mind & spirit.`
    },
    {
        src: Societies,
        title: "Societies",
        alt: "Societies",
        description: `NSUT has a strong culture of student activities. Numerous societies are active on campus that aim to inculcate team values & nurture talent within students. These clubs attract students from all walks of life, cutting across departments. This gives students a chance to experiment with their interests and hobbies.`
    },
    {
        src: Sports,
        title: "Sports",
        alt: "Sports",
        description: `NSUT offers state of art facilities in the domain of physical education, and both college and the students have been proactive in hosting and participating in many sports events, and have been competetive on an All India Inter University level.`
    },
    {
        src: Lab,
        title: "Others",
        alt: "Others",
        description: `Laboratories, Workshops, Computer centre, Medical facility, Incubator, Yoga centre, Gym facility, Fully Wi-Fi campus, CCTV cameras, Bio metric system, Sports complex, Banks, ATM, Post office, Shopping complex. A prominent feature of NSUT’s campus is the vast expanse of flora & fauna that envelopes its entirety. The lush green campus welcomes a diverse community of students, faculty, staff & visitors in its midst.`
    }
]


export const courses = [
    {
        id: 1,
        name: `B.Tech in Computer Science and Engineering (with specialisation in Artificial lntelligence)`
    },
    {
        id: 2,
        name: `B.Tech in Computer Science `
    },
    {
        id: 3,
        name: `B.Tech in Computer Science and Engineering (with specialisation in Data Science)`
    },
    {
        id: 4,
        name: `B.Tech in Information Technology`
    },
    {
        id: 5,
        name: `B.Tech in Information Technology (with specialisation in Networking Security)`
    },
    {
        id: 6,
        name: `B.Tech in Mathematics and Computing`
    },
    {
        id: 7,
        name: `B.Tech in Electronics and Communication Engineering`
    },
    {
        id: 8,
        name: `B.Tech in Electrical Engineering`
    },
    {
        id: 9,
        name: `B.Tech in Mechanical Engineering`
    },
    {
        id: 10,
        name: `B.Tech in Manufacturing Process and Automation Engineering`
    },
    {
        id: 11,
        name: `B.Tech in Instrumentation and Control Engineering`
    },
    {
        id: 12,
        name: `B.Tech in Bio-Technology`
    }
]

export const coursesOffered = [
    {
        programme: "B. Tech",
        id: 1,
        courses: [
            {
                name: `Computer Science and Engineering (with specialisation in Artificial lntelligence)`
            },
            {
                name: `Computer Science`
            },
            {
                name: `Computer Science and Engineering (with specialisation in Data Science)`
            },
            {
                name: `Computer Science and Engineering (Big Data Analytics)`
            },
            {
                name: `Computer Science and Engineering (Internet of Things)`
            },
            {
                name: `Mathematics and Computing`
            },
            {
                name: `Information Technology`
            },
            {
                name: `Information Technology (with specialisation in Networking Security)`
            },
            {
                name: `Geoinformatics`
            },
            {
                name: `Information Technology (Internet of Things)`
            },
            {
                name: `Electronics and Communication Engineering`
            },
            {
                name: `Electronics and Communication Engineering (Internet of Things)`
            },
            {
                name: `Electronics and Communication Engineering (Artificial Intelligence and Machine Learning)`
            },
            {
                name: `Electrical Engineering`
            },
            {
                name: `Mechanical Engineering`
            },
            {
                name: `Mechanical Engineering (Electric Vehicles)`
            },
            {
                name: `Manufacturing Process and Automation Engineering`
            },
            {
                name: `Instrumentation and Control Engineering`
            },
            {
                name: `Bio-Technology`
            },
            {
                name: `Civil Engineering`
            },
        ]
    },
    {
        programme: "M. Tech",
        id: 2,
        courses: [
            {
                name: `Computer Science`
            },
            {
                name: `Computer Science (Artificial Intelligence)`
            },
            {
                name: `Information Technology`
            },
            {
                name: `Embedded Systems & VLSI`
            },
            {
                name: `Electrical Engineering`
            },
            {
                name: `Mechanical Engineering`
            },
            {
                name: `Environmental Engineering`
            },
            {
                name: `Bioinformatics`
            },
            {
                name: `Biochemical Engineering`
            },
        ]
    },
    {
        programme: 'Management Studies',
        id: 3,
        courses: [
            {
                name: `Bachelors of Business Administration (BBA)`
            },
            {
                name: `Master of Business Administration (MBA)`
            },
        ]
    },
    {
        programme: 'M. Sc',
        id: 4,
        courses: [
            {
                name: `M. Sc Physics`
            },
            {
                name: `M. Sc Chemistry`
            },
            {
                name: `M. Sc Mathematics `
            },
        ]
    },
    {
        programme: 'M.A.',
        id: 5,
        courses: [
            {
                name: `M.A. in English`
            },
            {
                name: `M.A. in Psychology`
            },
        ]
    },
    {
        programme: 'B. Design',
        id: 6,
        courses: [
            {
                name: `Bachelors in Design [Fashion Technology]`
            }
        ]
    }
]


export const achievements = [
    {
        src: Achievement1,
        title: `India Today Ranking 2021`,
        description: `NSUT secures 8th Rank in India Today Ranking 2021`
    },
    {
        src: Achievement2,
        title: `ARIIA Ranking 2020`,
        description: `NSUT has secured 5th rank in the award ceremony of ARIIA Rankings 2020`
    },
    {
        src: Achievement3,
        title: `Times Engineering Survey 2018`,
        description: `NSIT ranked 6th as per Times Engineering Institute Ranking Survey 2018`
    }
]

export const placementProcedure = [
    {
        number: 1,
        title: `T&P/Recuiters sends Invitation`,
        description: `Either Recuiters sends invitation to placements@nsitoline.in and in reply T&P sends invaitation or T&P sends invitation to company from placements@nsitonline.in, placements@nsut.ac.in, placementsmgf@nsut.ac.in.`
    },
    {
        number: 2,
        title: `Recruiters fill the Campus Recruitment Form(CRF)`,
        description: `After receiving the invitation from T&P NSUT, Recruiters filled the CRF/Performa and send it to T&P NSUT with JD and all other details regarding the opening.`
    },
    {
        number: 3,
        title: `Opportunity is open for Eligible Students`,
        description: `Opportunity is opened for Students on placements Portal`
    },
    {
        number: 4,
        title: `Shortlisting`,
        description: `Recruiters shortlists the candidates on various criteria for the respectives role.`
    },
    {
        number: 5,
        title: `Company visits the Campus`,
        description: `The Company visits the Campus on the scheduled date for a Presentation. The On-Campus procedure may be held on the same day or on a later date, if collection of Resumes needs to be done in person.`
    },
    {
        number: 6,
        title: `Final list of selected Students`,
        description: `The company is expected to share the final list of selected candidates on same mail with waitlist on the day of the On-Campus Process/Virtual Process. If this is not possible, then the Training and Placemenmts should be notified beforehand.`
    },
    {
        number: 7,
        title: `Selected student not allowed to sit for other companies`,
        description: `Once a student is selected in one company he/she will not be allowed to appear for other companies' interviews as per the Recruitment Policy.`
    }
]
