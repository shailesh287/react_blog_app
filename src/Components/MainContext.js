import { useState, createContext } from 'react';

export const MainContext = createContext();

export const DataContext = (props) => {
    
    const [Data, setData] = useState([
        {
            id : '1',
            title : `Kerala: God's Own Country`,
            body : `Kerala is a state on the Malabar Coast of India.  It was formed on 1 November 1956, following the passage of the States Reorganisation Act, by combining Malayalam-speaking regions of the erstwhile regions of Cochin, Malabar, South Canara, and Travancore.`,
            category : 'Tourism',
            date : `March 14, 2022`,
            url : 'https://media.istockphoto.com/photos/traditional-house-boat-in-kerala-india-picture-id914617344?k=20&m=914617344&s=612x612&w=0&h=QjyiYFv-zhQ77To0wMzuP4HQXe2RpEepKxNbNf4ZMU4='
        },
        {
            id : '2',
            title : 'Goa: The paradise of India',
            body : `Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.It is located between the Indian states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coast.`,
            category : 'Tourism',
            date : `March 14, 2022`,
            url : 'https://img.traveltriangle.com/blog/wp-content/uploads/2015/06/dont-do-things-while-in-goa1.jpg'
        },
        {
            id : '3',
            title : 'Madhya Pradesh: The Heart of Incredible India',
            body : `It is known as the “Heart of India” because of a lot many things that it has to offer. It has been home to cultural and spiritual heritage of almost all the religions.`,
            category : 'Tourism',
            date : `March 14, 2022`,
            url : 'https://www.i4utravels.com/wp-content/uploads/2021/03/1572436388_madhya_pradesh_web.jpg'
        },
        {
            id : '4',
            title : 'Sikkim: Small But Beautiful',
            body : `Sikkim is a state in northeastern India. It borders the Tibet Autonomous Region of China in the north and northeast, Bhutan in the east, Province No. 1 of Nepal in the west, and West Bengal in the south. Sikkim is also close to India's Siliguri Corridor near Bangladesh.`,
            category : 'Tourism',
            date : `March 14, 2022`,
            url : 'https://www.remotelands.com/storage/media/797/conversions/b160801014-banner-size.jpg'
        },
        {
            id : '5',
            title : 'Delhi: Capital city of India',
            body : `Delhi, is a city and a union territory of India containing New Delhi, the capital of India. Straddling the Yamuna river, primarily its western or right bank, Delhi shares borders with the state of Uttar Pradesh in the east and with the state of Haryana in the remaining directions.`,
            category : 'Tourism',
            date : `March 14, 2022`,
            url : 'https://www.your-space.in/wp-content/uploads/2020/08/top-10-places-to-live-in-delhi-ncr.jpg'
        },
        {
            id : '1',
            title : `Hiking`,
            body : `Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.[1] Religious pilgrimages have existed much longer but they involve walking long distances for a spiritual purpose associated with specific religions.`,
            category : 'Fitness',
            date : `March 14, 2022`,
            url : 'https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2560,h_1707,c_scale/v1588113313/adventure-backpacker-climb-1365425-scaled.jpg'
        },
        {
            id : '2',
            title : `Swimming`,
            body : `Swimming is an individual or team racing sport that requires the use of one's entire body to move through water. The sport takes place in pools or open water (e.g., in a sea or lake). Competitive swimming is one of the most popular Olympic sports,`,
            category : 'Fitness',
            date : `March 14, 2022`,
            url : `https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/piultz6nngltq541xmju`
        },
        {
            id : '3',
            title : `Yoga`,
            body : `Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha).`,
            category : 'Fitness',
            date : `March 15, 2022`,
            url : `https://www.superprof.co.uk/blog/wp-content/uploads/2017/11/online-yoga-resources.jpeg`,
        },
        {
            id : '4',
            title : `Cycling`,
            body : `Cycling, also called bicycling or biking, is the use of bicycles for transport, recreation, exercise or sport.[1] People engaged in cycling are referred to as "cyclists",[2] "bicyclists",[3] or "bikers".[4] Apart from two-wheeled bicycles, "cycling" also includes the riding of unicycles, tricycles, quadricycles, recumbent and similar human-powered vehicles (HPVs).`,
            category : 'Fitness',
            date : `March 15, 2022`,
            url : `https://ecf.com/sites/ecf.com/files/field/image/Brussels%20car%20free%20day.JPEG.png`,
        },
        {
            id : '5',
            title : `Aerobic`,
            body : `Aerobic exercise (also known as endurance activities,[1] cardio or cardio-respiratory exercise) is physical exercise[2] of low to high intensity that depends primarily on the aerobic energy-generating process.[3] "Aerobic" is defined as "relating to, involving, or requiring oxygen"`,
            category : 'Fitness',
            date : `March 15, 2022`,
            url : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg5Zud9hamGy7EfexCq5aTXmEUtUDcbadeA&usqp=CAU`,
        },
        {
            id : '1',
            title : `Blockchain`,
            body : `Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.`,
            category : `Technology`,
            date : `March 16, 2021`,
            url : `	https://www.simon-kucher.com/sites/default/files/styles/670xh/public/2020-09/Blockchain%20abstract%20image.jpg?itok=61g9eTRN`
        },
          
        {
            id : '2',
            title : `Cyber Security`,
            body : `Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.`,
            category : `Technology`,
            date : `March 16, 2022`,
            url : `https://images.news18.com/ibnlive/uploads/2021/09/cybersecurity-expert-16327390534x3.jpg`
        },
        {
            id : '3',
            title : `IOT: Internet of Things`,
            body : `The term IoT, or Internet of Things, refers to the collective network of connected devices and the technology that facilitates communication between devices and the cloud, as well as between the devices themselves.`,
            category : `Technology`,
            date : `January 16, 2022`,
            url : `https://community.nasscom.in/wp-content/uploads/2020/11/2-Copy-1024x539.png`
           
        },
        {
            id : '4',
            title : `Artificial Intelligence `,
            body : `Artificial intelligence is a technology which enables a machine to simulate human behavior. Machine learning is a subset of AI which allows a machine to automatically learn from past data without programming explicitly. The goal of AI is to make a smart computer system like humans to solve complex problems.`,
            category : `Technology`,
            date : `August 16, 2021`,
            url : `	https://www.weetechsolution.com/upload/The-What-How-and-Why-of-Artificial-Intelligence-Machine-Learning.png`
        },
        {
            id : '5',
            title : `Cryptocurrency`,
            body : `A cryptocurrency is an encrypted data string that denotes a unit of currency. It is monitored and organized by a peer-to-peer network called a blockchain, which also serves as a secure ledger of transactions, e.g., buying, selling, and transferring.`,
            category : `Technology`,
            date : `April 22, 2022`,
            url : `https://analyticsinsight.b-cdn.net/wp-content/uploads/2021/05/AdobeStock_288803828-1-1024x576.jpeg`
        },
        {
            id :'1',
            title : 'Pushpa: The Rise',
            body : `Pushpa: The Rise – Part 01 is a 2021 Indian Telugu-language action drama film[5] written and directed by Sukumar. Produced by Mythri Movie Makers in association with Muttamsetty Media, it stars Allu Arjun as the titular character`,
            category : 'Bollywood',
            date : 'March 12, 2022',
            url : 'https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg'
        },
        {
            id :'2',
            title : 'The Kashmir Files',
            body : `The Kashmir Files is a 2022 Indian Hindi-language drama film,[2] written and directed by Vivek Agnihotri. Produced by Zee Studios,[5] the film is based on the exodus of Kashmiri Pandits during the Kashmir Insurgency.`,
            category : 'Bollywood',
            date : 'March 26, 2021',
            url : 'https://static.toiimg.com/photo/89726146.jpeg'
        },
        {
            id :'3',
            title : 'K.G.F: Chapter 2',
            body : `K.G.F: Chapter 2 is an upcoming Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films.`,
            category : 'Bollywood',
            date : 'March 26, 2021',
            url : 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/kgf-chapter-2-to-get-postponed-001.jpg'
        },
        {
            id :'4',
            title : 'Radhe Shyam',
            body : `Radhe Shyam is a 2022 Indian period romantic drama film written and directed by Radha Krishna Kumar. The film is produced by UV Creations and T-Series, and was shot simultaneously in Telugu and Hindi languages.`,
            category : 'Bollywood',
            date : 'march 13, 2021',
            url : 'https://images.indianexpress.com/2020/10/Beats-Of-Radhe-Shyam-1200.jpg'
        },
        {
            id :'5',
            title : 'Attack',
            body : `Attack is an upcoming Indian Hindi-language action thriller film directed by Lakshya Raj Anand, who co-wrote the film with Sumit Batheja and Vishal Kapoor, based on a story by John Abraham, who stars in the film alongside Jacqueline Fernandez.`,
            category : 'Bollywood',
            date : 'March 26, 2021',
            url : 'https://i0.wp.com/www.newsbugz.com/wp-content/uploads/2021/12/Attack-Movie-2022.jpg?fit=1147%2C720&ssl=1'
        },
        {
            id :'1',
            title : `Tandoori Chicken`,
            body : `It is believed that Tandoori Chicken is good for your brain health! Chicken is known to increase the serotonin level that leads to reduced stress level and fewer mood swings. Tandoori Chicken reduces the risk of Alzheimer's disease. Chicken contains vitamin B5, B3, B6 and other nutrients`,
            category : 'Food',
            date : `March 13, 2022`,
            url : `https://www.sandyathome.com/wp-content/uploads/2020/04/tandoori-chicken-in-oven.jpg`,
        },
        {
            id :'2',
            title : `Momo`,
            body : `Momo  is a type of dumpling which are prominently found in the cuisines of Nepal and Tibet, as well as in the Indian states of Ladakh and Sikkim.`,
            category : 'Food',
            date : `March 14, 2022`,
            url : `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg`,
        },
        {
            id :'3',
            title : `Chicken Biryani`,
            body : `Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. `,
            category : 'Food',
            date : `March 14, 2022`,
            url : `https://kfoods.com/images1/newrecipeicon/tandoori-chicken-biryani_11776.jpg`,
        },

        {    
            id :'4',
            title : `Burger`,
            body : `A hamburger (or burger for short) is a food consisting of fillings —usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.`,
            category : 'Food',
            date : `March 14, 2022`,
            url : `https://thumbor.thedailymeal.com/MHFJiBzb95-eeb-jkeAcEwgceEc=//https://www.thedailymeal.com/sites/default/files/recipe/2016/Fake%20Shack%20Burger%20Recipe%20Shutterstock.jpg`,
        },
        {
            id :'5',
            title : `Masala dosa`,
            body : `A dosa is a thin flat bread originating from South India, made from a fermented batter predominantly consisting of lentils and rice. It is somewhat similar to a crepe in appearance, although savoury flavours are generally emphasized (sweet variants also exist). `,
            category : 'Food',
            date : `March 14, 2022`,
            url : `https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg`,
        }
    ]);

    return (
        <>
            <MainContext.Provider value={[Data, setData]}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}