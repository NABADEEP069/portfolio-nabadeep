// projectsData.js
import gestureDetection from "/src/assets/images/real-time-gesture-detection-using-CNN.webp";
import portfolio from "/src/assets/images/portfolio-website.webp";
import cryptotracker from "/src/assets/images/crypto-price-tracker.webp";
import chatapp from "/src/assets/images/chat-app.webp";
import complainSys from "/src/assets/images/compain-management-system-1.webp";

const projectsData = [
  {
    title: 'Real-Time Gesture Detection Using CNN',
    description: 'Machine Learning • Scikit • NLP • Python',
    imageSrc: gestureDetection,
    link: 'https://github.com/prabhu4444/Real-Time-Gesture-Detection-Using-Convolutional-Neural-Network'
  },
  {
    title: 'Crypto Currrency Price Tracker',
    description: 'Frontend Development • React • Context API • Firebase',
    imageSrc: cryptotracker,
    link: 'https://github.com/prabhu4444/Cryptocurrency-Price-Tracker'
  },
  {
    title: 'Chat App',
    description: 'Computer Networks',
    imageSrc: chatapp,
    link: 'https://github.com/prabhu4444/Chat-App'
  },
  {
    title: 'complain and recruitment portal',
    description: 'Database Management System',
    imageSrc: complainSys,
    link: 'https://github.com/prabhu4444/complain_and_recruitment_portal'
  },
  {
    title: 'Personal Portfolio Site',
    description: 'Frontend Development • React',
    imageSrc: portfolio,
    link: '/' //Add link of portfolio site later
  }
];

export default projectsData;