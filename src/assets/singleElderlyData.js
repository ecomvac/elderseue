
export const customerTable = [
    {
        id: 1,
        name: 'Lisan Musa',
        relation: 'Sister',
        contact: '237-799-6082',
        age: '12',
        blood: 'B+'
    },
    {
        id: 2,
        name: 'Devid Tom ',
        role: 'admin',
        relation: 'Son',
        contact: '301-501-4786',
        age: '28',
        blood: 'A+'
    },
    {
        id: 3,
        name: 'Alyean Khan',
        relation: 'Brother',
        contact: '991-468-6820',
        age: '23',
        blood: 'AB+'
    },
    {
        id: 4,
        name: 'Neha Limu',
        relation: 'Grandma',
        contact: '791-890-2126',
        age: '67',
        blood: 'B+'
    },
    {
        id: 5,
        name: 'Mitu Sah',
        relation: 'Mom',
        contact: '791-890-2126',
        age: '55',
        blood: 'A-'
    },
    {
        id: 6,
        name: 'Lisan Musa',
        relation: 'Sister',
        contact: '237-799-6082',
        age: '12',
        blood: 'B+'
    },
    {
        id: 7,
        name: 'Alyean Khan',
        relation: 'Brother',
        contact: '991-468-6820',
        age: '23',
        blood: 'AB+'
    },
    {
        id: 8,
        name: 'Neha Limu',
        relation: 'Grandma',
        contact: '791-890-2126',
        age: '67',
        blood: 'B+'
    },
    {
        id: 9,
        name: 'Mitu Sah',
        relation: 'Mom',
        contact: '791-890-2126',
        age: '55',
        blood: 'A-'
    },
    {
        id: 10,
        name: 'Lisan Musa',
        relation: 'Sister',
        contact: '237-799-6082',
        age: '12',
        blood: 'B+'
    },
    {
        id: 11,
        name: 'Alyean Khan',
        relation: 'Brother',
        contact: '991-468-6820',
        age: '23',
        blood: 'AB+'
    },
    {
        id: 12,
        name: 'Neha Limu',
        relation: 'Grandma',
        contact: '791-890-2126',
        age: '67',
        blood: 'B+'
    },
    {
        id: 13,
        name: 'Mitu Sah',
        relation: 'Mom',
        contact: '791-890-2126',
        age: '55',
        blood: 'A-'
    }


]


export const devicesData = [
    {
        id: 1,
        img: '/images/devices/homeCare.svg',
        name: 'Home Care Assistant',
        title: 'Assistant',
        status: 'Fall not Detected',
        room: ['dining','bed'],

    },
    {
        id: 2,
        img: '/images/devices/wave.svg',
        name: 'Wave – Vital Signs Monitor',
        title: 'Sensor',
        room:[ 'bed','children'],
        status: 'In Bed',
        heart:58,
        breath:16
    },
    {
        id: 3,
        img: '/images/devices/door.svg',
        name: 'Door Sensor',
        title: 'Sensor',
        status: 'Closed',
        room: ['living','garage'],

    },
    {
        id: 4,
        img: '/images/devices/indoor.svg',
        name: 'Indoor Siren',
        title: 'Sensor',
        status: 'Trigger',
        room: 'kitchen',

    },
    {
        id: 5,
        img: '/images/devices/sos.svg',
        name: 'SOS Button',
        title: 'SOS Button',
        status: 'Not Triggered',
        room: 'bath',

    }
]

export const roomData = [
    {
        id: 1,
        room: 'Living Room',
        tem: '24',
        hu: '90%',
        con: '484',
        div: '05'
    },
    {
        id: 2,
        room: 'Dining Room',
        tem: '24',
        hu: '70%',
        con: '484',
        div: '05'
    },
    {
        id: 3,
        room: 'Bed Room',
        tem: '24',
        hu: '60%',
        con: '484',
        div: '05'
    },
    {
        id: 4,
        room: 'Kitchen Room',
        tem: '24',
        hu: '70%',
        con: '484',
        div: '05'
    },
    {
        id: 5,
        room: 'Bath Room',
        tem: '24',
        hu: '80%',
        con: '484',
        div: '05'
    },
    {
        id: 6,
        room: 'Children Room',
        tem: '24',
        hu: '60%',
        con: '484',
        div: '05'
    },
    {
        id: 7,
        room: 'Garage Room',
        tem: '24',
        hu: '70%',
        con: '484',
        div: '05'
    },
    {
        id: 8,
        room: 'Bed Room',
        tem: '24',
        hu: '90%',
        con: '484',
        div: '05'
    },
]

export const trendsData = [
    {
        title: "Waking up time",
        subTitle: "List of what time wake up",
        target: "08:00",
        present: "07:56",
        diff: '4m',
        category: "Average",
        average: "06:35",
        table: [
            {
                date: "June 1, 2023",
                value: "06:12"
            },
            {
                date: "June 2, 2023",
                value: "06:09"
            },
            {
                date: "June 3, 2023",
                value: "06:15"
            },
            {
                date: "June 4, 2023",
                value: "06:16"
            },
            {
                date: "June 5, 2023",
                value: "06:10"
            },
            {
                date: "June 6, 2023",
                value: "06:13"
            },
            {
                date: "June 7, 2023",
                value: "06:09"
            },
            {
                date: "June 8, 2023",
                value: "06:10"
            },
            {
                date: "June 9, 2023",
                value: "06:12"
            },
            {
                date: "June 10, 2023",
                value: "06:09"
            },
            {
                date: "June 11, 2023",
                value: "0:15"
            },
            {
                date: "June 12, 2023",
                value: "06:09"
            }
        ]
    },
    {
        title: "Going in bed time",
        subTitle: "List of what time to sleep",
        target: "11:50",
        present: "11:40",
        diff: '6min',
        category: "Average",
        average: "20:40",
        table: [
            {
                date: "June 1, 2023",
                value: "06:12"
            },
            {
                date: "June 2, 2023",
                value: "06:09"
            },
            {
                date: "June 3, 2023",
                value: "05:12"
            },
            {
                date: "June 4, 2023",
                value: "07:09"
            },
            {
                date: "June 5, 2023",
                value: "08:12"
            },
            {
                date: "June 6, 2023",
                value: "06:09"
            },
            {
                date: "June 7, 2023",
                value: "06:12"
            },
            {
                date: "June 8, 2023",
                value: "05:09"
            },
            {
                date: "June 9, 2023",
                value: "06:12"
            },
            {
                date: "June 10, 2023",
                value: "07:09"
            },
            {
                date: "June 11, 2023",
                value: "09:12"
            },
            {
                date: "June 12, 2023",
                value: "06:09"
            }
        ]
    },
    {
        title: "Rooms Visited",
        type: 'x',
        subTitle: "Number of room visits",
        category: "Average",
        target: "20",
        present: "19",
        diff: '1',
        average: "25 visits",
        table: [
            {
                date: "June 1, 2023",
                value: "6 visits"
            },
            {
                date: "June 2, 2023",
                value: "8 visits"
            },
            {
                date: "June 3, 2023",
                value: "6 visits"
            },
            {
                date: "June 4, 2023",
                value: "5 visits"
            },
            {
                date: "June 5, 2023",
                value: "7 visits"
            },
            {
                date: "June 6, 2023",
                value: "8 visits"
            },
            {
                date: "June 7, 2023",
                value: "5 visits"
            },
            {
                date: "June 8, 2023",
                value: "6 visits"
            },
            {
                date: "June 9, 2023",
                value: "8 visits"
            },
            {
                date: "June 10, 2023",
                value: "7 visits"
            },
            {
                date: "June 11, 2023",
                value: "5 visits"
            },
            {
                date: "June 12, 2023",
                value: "6 visits"
            }
        ]
    },
    {
        title: "Time at Home",
        type: 'hr',
        subTitle: "Time spent at home",
        category: "Warning",
        target: "10",
        present: "14",
        diff: '4',
        average: "9h 20m",
        table: [
            {
                date: "June 1, 2023",
                value: "9h 20m"
            },
            {
                date: "June 2, 2023",
                value: "8h 20m"
            },
            {
                date: "June 3, 2023",
                value: "10h 20m"
            },
            {
                date: "June 4, 2023",
                value: "9h 20m"
            },
            {
                date: "June 5, 2023",
                value: "8h 20m"
            },
            {
                date: "June 6, 2023",
                value: "6h 20m"
            },
            {
                date: "June 7, 2023",
                value: "7h 20m"
            },
            {
                date: "June 8, 2023",
                value: "9h 20m"
            },
            {
                date: "June 9, 2023",
                value: "8h 20m"
            },
            {
                date: "June 10, 2023",
                value: "10h 20m"
            },
            {
                date: "June 11, 2023",
                value: "9h 20m"
            },
            {
                date: "June 12, 2023",
                value: "8h 20m"
            }
        ]
    },
    {
        title: "Time outdoors",
        type: 'hr',
        subTitle: "Time spent outside today",
        category: "Warning",
        target: "7",
        present: "2",
        diff: '5',
        average: "9h 20m",
        table: [
            {
                date: "June 1, 2023",
                value: "9h 20m"
            },
            {
                date: "June 2, 2023",
                value: "8h 20m"
            },
            {
                date: "June 3, 2023",
                value: "10h 20m"
            },
            {
                date: "June 4, 2023",
                value: "9h 20m"
            },
            {
                date: "June 5, 2023",
                value: "8h 20m"
            },
            {
                date: "June 6, 2023",
                value: "6h 20m"
            },
            {
                date: "June 7, 2023",
                value: "7h 20m"
            },
            {
                date: "June 8, 2023",
                value: "9h 20m"
            },
            {
                date: "June 9, 2023",
                value: "8h 20m"
            },
            {
                date: "June 10, 2023",
                value: "10h 20m"
            },
            {
                date: "June 11, 2023",
                value: "9h 20m"
            },
            {
                date: "June 12, 2023",
                value: "8h 20m"
            }
        ]
    },
    {
        title: "Device Usage Time",
        type: 'hr',
        subTitle: "Time spent using devices",
        category: "Warning",
        target: "2",
        present: "5",
        average: "2h 40m",
        table: [
            {
                date: "June 1, 2023",
                value: "2h 20m"
            },
            {
                date: "June 2, 2023",
                value: "1h 20m"
            },
            {
                date: "June 3, 2023",
                value: "1h 20m"
            },
            {
                date: "June 4, 2023",
                value: "2h 20m"
            },
            {
                date: "June 5, 2023",
                value: "2h 20m"
            },
            {
                date: "June 6, 2023",
                value: "1h 20m"
            },
            {
                date: "June 7, 2023",
                value: "1h 20m"
            },
            {
                date: "June 8, 2023",
                value: "2h 20m"
            },
            {
                date: "June 9, 2023",
                value: "2h 20m"
            },
            {
                date: "June 10, 2023",
                value: "1h 20m"
            },
            {
                date: "June 11, 2023",
                value: "1h 20m"
            },
            {
                date: "June 12, 2023",
                value: "3h 20m"
            }
        ]
    },
    {
        title: "Sleeping Score",
        subTitle: "Score of sleeping ",
        type: 'percent',
        category: "Average",
        target: "90",
        present: "86",
        diff: '4',
        average: "52%",
        table: [
            {
                date: "June 1, 2023",
                value: "50%"
            },
            {
                date: "June 2, 2023",
                value: "60%"
            },
            {
                date: "June 3, 2023",
                value: "52%"
            },
            {
                date: "June 4, 2023",
                value: "55%"
            },
            {
                date: "June 5, 2023",
                value: "60%"
            },
            {
                date: "June 6, 2023",
                value: "53%"
            },
            {
                date: "June 7, 2023",
                value: "55%"
            },
            {
                date: "June 8, 2023",
                value: "57%"
            },
            {
                date: "June 9, 2023",
                value: "50%"
            },
            {
                date: "June 10, 2023",
                value: "54%"
            },
            {
                date: "June 11, 2023",
                value: "53%"
            },
            {
                date: "June 12, 2023",
                value: "55%"
            }
        ]
    },
    {
        title: "Showers",
        subTitle: "Number of showers",
        type: 'x',
        category: "Critical",
        target: "3",
        present: "1",
        diff: '2',
        average: 8,
        table: [
            {
                date: "June 1, 2023",
                value: "6"
            },
            {
                date: "June 2, 2023",
                value: "7"
            },
            {
                date: "June 3, 2023",
                value: "5"
            },
            {
                date: "June 4, 2023",
                value: "7"
            },
            {
                date: "June 5, 2023",
                value: "8"
            },
            {
                date: "June 6, 2023",
                value: "6"
            },
            {
                date: "June 7, 2023",
                value: "6"
            },
            {
                date: "June 8, 2023",
                value: "5"
            },
            {
                date: "June 9, 2023",
                value: "6"
            },
            {
                date: "June 10, 2023",
                value: "7"
            },
            {
                date: "June 11, 2023",
                value: "6"
            },
            {
                date: "June 12, 2023",
                value: "6"
            }
        ]
    },
    {
        title: "Coffees",
        type: 'x',
        subTitle: "Number of coffees",
        category: "Critical",
        target: "4",
        present: "14",
        diff: '10',
        average: 6,
        table: [
            {
                date: "June 1, 2023",
                value: "6"
            },
            {
                date: "June 2, 2023",
                value: "6"
            },
            {
                date: "June 3, 2023",
                value: "5"
            },
            {
                date: "June 4, 2023",
                value: "7"
            },
            {
                date: "June 5, 2023",
                value: "8"
            },
            {
                date: "June 6, 2023",
                value: "6"
            },
            {
                date: "June 7, 2023",
                value: "6"
            },
            {
                date: "June 8, 2023",
                value: "5"
            },
            {
                date: "June 9, 2023",
                value: "6"
            },
            {
                date: "June 10, 2023",
                value: "7"
            },
            {
                date: "June 11, 2023",
                value: "9"
            },
            {
                date: "June 12, 2023",
                value: "6"
            }
        ]
    },
    {
        title: "Bathroom Visited",
        type: 'x',
        subTitle: "The number of times has gone",
        category: "Critical",
        target: "8",
        present: "0",
        diff: '8',
        average: "6",
        table: [
            {
                date: "June 1, 2023",
                value: "6"
            },
            {
                date: "June 2, 2023",
                value: "6"
            },
            {
                date: "June 3, 2023",
                value: "5"
            },
            {
                date: "June 4, 2023",
                value: "7"
            },
            {
                date: "June 5, 2023",
                value: "8"
            },
            {
                date: "June 6, 2023",
                value: "6"
            },
            {
                date: "June 7, 2023",
                value: "6"
            },
            {
                date: "June 8, 2023",
                value: "5"
            },
            {
                date: "June 9, 2023",
                value: "6"
            },
            {
                date: "June 10, 2023",
                value: "7"
            },
            {
                date: "June 11, 2023",
                value: "9"
            },
            {
                date: "June 12, 2023",
                value: "6"
            }
        ]
    }
]

export const subscriptionData = [
    {
        title: "24/7 Monitoring and Emergency Response",
        value: true,
        category: "essential"

    },
    {
        title: "Medication Reminders",
        value: true,
        category: "essential"
    },
    {
        title: "Activity Tracking",
        value: true,
        category: "essential"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: true,
        category: "essential"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: true,
        category: "essential"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: true,
        category: "essential"
    },
    {
        title: "Medication Reminders",
        value: true,
        category: "essential"
    },
    {
        title: "Activity Tracking",
        value: true,
        category: "essential"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: true,
        category: "essential"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "essential"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "essential"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "essential",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "essential"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "standard"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "standard"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard",
        "dolar": "+$05:00"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "standard"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "standard"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "standard"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "standard"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "standard",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "premium"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "premium"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "premium"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "premium"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "premium"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "premium"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "premium"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "premium"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "enterprise"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "enterprise"
    },
    {
        title: "Medication Reminders",
        value: false,
        category: "enterprise",
        "dolar": "+$05:00"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "enterprise"

    },
    {
        title: "Medication Reminders",
        value: false,
        category: "enterprise"
    },
    {
        title: "Activity Tracking",
        value: false,
        category: "enterprise"
    },
    {
        title: "Monthly video call with a caregiver or family member",
        value: false,
        category: "enterprise"
    },
    {
        title: "Unlimited video calls with caregivers or family members",
        value: false,
        category: "enterprise"
    },
    {
        title: "24/7 Monitoring and Emergency Response",
        value: false,
        category: "enterprise"
    }
]

export const videoData = [
    {
        id:5,
        room:"Living Room",
        icon:"mdi-lightbulb-on-outline",
        rtspUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        running:true,
        time:Date.now()
    },
    {
        id:1,
        room:"Kitchen Room",
        icon:"mdi-silverware-fork-knife",
        rtspUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        running:true,
        time:Date.now()
    },
    {
        id:3,
        room:"Bedroom",
        icon:"mdi-bed-empty",
        rtspUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        running:false,
        time:Date.now()
    },
    {
        id:4,
        room:"Home Office",
        icon:"mdi-desk-lamp",
        rtspUrl:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        running:false,
        time:Date.now()
    },
    {
        id:5,
        room:"Bathroom",
        icon:"mdi-shower",
        rtspUrl:"https://img.ifunny.co/videos/55bb2b9637b70f249bf5cad5bb5bd399da1f13fc1da3fc2acfd16a5b5d7d0f73_1.mp4",
        running:true,
        time:Date.now()
    },
   
]

export const weeklyTrends = [
    {
        title: "Waking up time",
        average: "06:35",
        data: "06:30"
    },
    {
        title: "Going in bed time",
        average: "20:40",
        data: "20:10"
    },
    {
        title: "Rooms Visited",
        average: "25 Visits",
        data: "22 Visits"
    },
    {
        title: "Time at Home",
        average: "9h 20min",
        data: "9h 10min"
    },
    {
        title: "Time outdoors",
        average: "8h 15min",
        data: "8h 0min"
    },
    {
        title: "Device Usage Time",
        average: "2h 40min",
        data: "2h 20min"
    },

    {
        title: "Sleeping Score",
        average: "52%",
        data: "62%"
    },

    {
        title: "Showers",
        average: "03",
        data: "04"
    },
    {
        title: "Coffees",
        average: "03",
        data: "06"
    },
    {
        title: "Bathroom Visited",
        average: "05 Visits",
        data: "06 Visits"
    }
]
export const monthlyTrends= [
    {
        title: "Waking up time",
        average: "05:35",
        data: "06:30"
    },
    {
        title: "Going in bed time",
        average: "19:40",
        data: "22:10"
    },
    {
        title: "Rooms Visited",
        average: "23 Visits",
        data: "22 Visits"
    },
    {
        title: "Time at Home",
        average: "8h 20min",
        data: "8h 10min"
    },
    {
        title: "Time outdoors",
        average: "7h 15min",
        data: "7h 0min"
    },
    {
        title: "Device Usage Time",
        average: "1h 40min",
        data: "1h 20min"
    },

    {
        title: "Sleeping Score",
        average: "53%",
        data: "60%"
    },

    {
        title: "Showers",
        average: "03",
        data: "04"
    },
    {
        title: "Coffees",
        average: "03",
        data: "07"
    },
    {
        title: "Bathroom Visited",
        average: "06 Visits",
        data: "07 Visits"
    }
]

export const waveData=[
    {
        dailyOverView:{
            sleepTime:'06:35',
            sleepScore:72,
            avgHeartRate:61,
            avgBreathingRate:20,
        },
        sleepTimeLine:{
            start:"22:45",
            end:"04:58",
            totalDeep:'04:30',
            totalCore:"00:24",
            totalRem:"00:45",
            awake:"00:46",
            outOfBed:"",
            totalOutOfBed:1,
        },
        bioVita:[
            {
                time:'22:23',
                value:'10'
            },
            {
                time:'24:45',
                value:'20'
            },
            {
                time:'02:20',
                value:'12'
            },
            {
                time:'03:14',
                value:'18'
            },
            {
                time:'04:58',
                value:'25'
            },
        ],

    }
]