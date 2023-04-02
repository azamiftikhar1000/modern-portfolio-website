import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment?: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Pinescript Algorithms',
    slug: 'pinescript-algorithms',
    banner: '/static/projects/pinescript-algorithms/banner.png',
    website: 'https://github.com/azamiftikhar1000/pinescript-trend-algorithim',
    description:
    `This Project contains two PineScript scripts for algorithmic trading: "buy and sell" generates signals based on technical indicators like MACD and RSI, while "trend analysis" identifies price movement direction with MA indicators. Both scripts can be used for automated or manual trading, but other factors such as fundamental analysis should also be considered for profitable strategies.`,
    repository: 'https://github.com/azamiftikhar1000/pinescript-trend-algorithim',
    stack: [
      Stack.pinescript,
      Stack.python,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/pinescript-algorithms/banner.png',
      '/static/projects/pinescript-algorithms/banner-2.png'
    ],
    deployment: {
      web: 'https://github.com/azamiftikhar1000/pinescript-trend-algorithim',
    },
    subProjects: [],
  },
  {
    title: 'RL for automatic selection and prioritization',
    slug: 'RL-for-automatic-selection-and-prioritization',
    banner: '/static/projects/rl-for-automatic-selection-and-prioritization/banner.png',
    website: '#',
    description: `Continuous Integration (CI) is a development practice where code changes are frequently integrated into a shared repository, and tests are run automatically to detect any issues. However, as the codebase grows larger and more complex, running all tests for every code change becomes time-consuming, leading to delays in developer feedback.
    
    The RL agent interacts with the CI system and selects and prioritizes the most relevant test cases, using feedback from the system to improve its performance. The agent's objective is to minimize the round-trip time between code commits and feedback on test failures.
    
    To achieve this, the agent maximizes a reward function based on factors such as the severity of past test failures, the frequency of code changes, and the execution time of the test cases. The agent learns from historical test results and code changes to improve its performance.
    
    The RL algorithm was trained on a dataset of historical test results and code changes, and its effectiveness is evaluated using an independent set of test cases.
    
    Overall, the RL algorithm for test case selection and prioritization significantly reduced the time taken for feedback on code changes, lead to a more efficient and effective CI process.
  `,
    repository: null,
    stack: [
      Stack.tf,
      Stack.rl,
      Stack.ml,
      Stack.aws,
      Stack.python,
    ],
    dimensions: [360, 1040],
    screenshots: [
      '/static/projects/rl-for-automatic-selection-and-prioritization/banner.png'
    ],
    subProjects: [],
  },
  {
    title: 'Developed and implemented a storage location assignment for a warehouse',
    slug: 'Developed and implemented a storage location assignment for a warehouse',
    website: '#',
    banner: '/static/projects/warehouse-management/banner.png',
    shortDescription:'Solved the Storage Location Assignment problem for a warehouse, decreased the travel time and delay caused by traffic congestion, using NSGA-II and SPEA 2' ,

    description:`We successfully developed and implemented a storage location assignment method that aimed to reduce travel time and delay caused by traffic congestion for order pickers in the warehouse.

    Through the use of a multi-objective mathematical model, we were able to identify highly correlated items and place them closer to the dock, thus reducing travel time for order pickers and addressing the issue of traffic congestion.
    
    To solve the non-deterministic polynomial-time hard (NP-hard) storage location assignment problem, we utilized Multi-Objective Evolutionary Algorithms NSGA-II and SPEA 2 to create clusters. We then used the SKU Assignment Algorithm to assign SKUs to storage locations based on the model.
    
    The results of the final generations were analyzed, and we selected five solutions using K-means clustering to compare the results obtained from NSGA-II and SPEA 2 Algorithms with the random storage method.
    
    Furthermore, we conducted a simulation study to assess the impact of traffic congestion under different scenarios.` ,
    
    repository: '',
    dimensions: [400, 760],
    stack: [
      Stack.python,
      Stack.ga,
    ],
    screenshots: [
      '/static/projects/warehouse-management/banner.png',
      '/static/projects/warehouse-management/banner2.png',
      '/static/projects/warehouse-management/banner3.png',
    ],
    subProjects: [],
  },
  {
    title: 'COVID-19 detection using eye images',
    slug: 'COVID-19 detection using eye images',
    banner: '/static/projects/COVID-19-detection/banner.png',
    website: 'https://currentph.com/2021/06/30/covid-19-detection-and-protection-fastest-through-idetect-via-a1-intelligence/',
    description: 
    `COVID detection using AI: Developed a non-invasive and scalable testing solution for COVID-19 using AI.
    
    Patented ML Algorithm: Designed an ML algorithm that was patented at $10M, demonstrating technical expertise and innovation.
    
    Use of technology: Used Sagemaker, MLflow, Web Development, and Image Processing tools to develop advanced AI solutions.
  
    Commercial success: Within a year, the company received an offer of $20M.
  
    Acquisition: The company was eventually acquired for an undisclosed sum.`,
    repository: null,
    stack: [
      Stack.cv,
      Stack.python
    ],
    dimensions: [400, 860]    ,
    screenshots: [
      '/static/projects/COVID-19-detection/banner2.png',
    ],

    subProjects: [],
  },
  {
    title: 'Biometric Authentication System',
    slug: 'Biometric Authentication System',
    website: 'https://private.id/',
    repository: null,
    banner: '/static/projects/private-id-biometric-authentiction/banner.png',
    description:
      `I worked in a biometric authentication startup where I helped create biometric detection models for face, voice, and fingerprint verification.
      
      The system categorized face images into N categories using a face model and real-time augmentation techniques to extract feature vectors for registration.
      
      We utilized a hybrid siamese network get feature vectors, which was compared using hybrid KD trees for prediction.
      
      The system was implemented using AWS, Python SageMaker, Redis, MySQL, and Node.js technologies.
      
      Redis was used as an in-memory data store to improve system performance.
      
      MySQL was used as the relational database management system for storing data.
      
      The combination of these technologies allowed us to build a robust and scalable biometric authentication system for real-world scenarios.`,
    stack: [
      Stack.python,
      Stack.ml,
      Stack.redis,
      Stack.aws,
    ],    dimensions: [400, 860]    ,
    screenshots: [
      '/static/projects/private-id-biometric-authentiction/banner.png',
      '/static/projects/private-id-biometric-authentiction/banner2.png',
    
    ],
    subProjects: [
    ],
  },
  {
    title: 'Celebrify',
    slug: 'celebrify',
    website: 'https://celebrify.in',
    banner: '/static/projects/celebrify/banner.jpeg',
    description:
      'Get personalized videos from your favorite celebrities at just one click. Request personalized video messages for your friends, family, loved ones or even yourself. Be it a doubt or even a special wish from your favorite celebrity.',
    repository: null,
    stack: [Stack.react, Stack.reactnative, Stack.django, Stack.aws],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=93fffd15-08ca-4ffc-8fce-47bc269237ee',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=fd597baf-3aaa-4ad8-abe9-1d42c628285f',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=779ea419-adb0-4f62-8ef7-dcfa8d9a4228',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=e77b8603-4885-4eed-b108-f9f4bb751796',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=94f43db6-c835-404d-ab35-85ddad624a06',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fcelebrify%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=7794ae58-7e3a-45c5-a47a-6c86b909e423',
    ],
    deployment: {
      web: 'https://celebrify.in',
      android:
        'https://play.google.com/store/apps/details?id=com.celebrify.app',
      ios: 'https://apps.apple.com/us/app/celebrify-app/id1469588198',
    },
    subProjects: [],
  },
  {
    title: 'KCards',
    slug: 'kcards',
    banner: '/static/projects/kcards/banner.jpeg',
    description:
      'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
    repository: 'https://github.com/azamiftikhar1000/KCards',
    stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    dimensions: [450, 270],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    ],
    deployment: {
      web: 'https://kcards-server.herokuapp.com',
      android: 'https://play.google.com/store/apps/details?id=com.kcards',
      ios: 'https://itunes.apple.com/us/app/kcards/id1461733524',
    },
    website: 'https://kcards-server.herokuapp.com',
    subProjects: [],
  },
];
