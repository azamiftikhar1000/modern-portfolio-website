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
    title: 'Velvet Live',
    slug: 'velvet-live',
    banner: '/static/projects/velvet-live/banner.png',
    website: 'https://boom.london',
    description: `Connect with shoppers who need your advice and expertise when they're shopping online. Assist and sell to customers the same way you would in-store, but now through chat and video straight from the app.`,
    repository: null,
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=b9b044ce-a3af-402f-a1db-1ae61621bb18',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=f551d87b-4f74-4d06-b81e-50ea8bf7feba',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=4f68239e-db81-43cc-b3a4-1a8642cfe4eb',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=5655d6e8-99d4-4c40-9782-ce12efeab256',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=32c12b1e-8e32-4d45-9001-9482d26bdaaf',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=609b7e74-8349-48ec-bcc0-4b0071dfb9b6',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=91880856-7288-420c-abb9-c1923f7ccd57',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fvelvet%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=3dcdc3bd-cbb7-4d8e-9368-306158cce40d',
    ],
    deployment: {
      web: 'https://boom.london',
      android: 'https://play.google.com/store/apps/details?id=app.boom.mobile',
    },
    subProjects: [],
  },
  {
    title: 'Stewards',
    slug: 'stewards',
    website: 'https://stewards.app',
    repository: null,
    banner: '/static/projects/stewards/banner.png',
    description:
      'Mobile ordering solution with robot delivery. Stewards also provides variety of tools like staff application to manage orders, self checkout solution and admin dashboard.',
    stack: [
      Stack.javascript,
      Stack.react,
      Stack.reactnative,
      Stack.graphql,
      Stack.gcp,
    ],
    screenshots: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=ba9d7163-8df6-43ae-b804-01cd221cc593',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=c8194dc7-08cf-4b8c-a3ad-f6c643291a95',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=37c14308-767c-41c7-a064-df8b63cd18e8',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=6ad6b4f6-ba09-423d-bd3f-b06ae093113a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=cd2945c0-af97-4b3d-a503-d52174232a8e',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=6fcaeab6-d539-4f39-9985-e6ee85e28f0a',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-7.png?alt=media&token=3c1fcd3e-4d93-4275-8d87-94a9b9236a9d',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fstewards%2Fscreenshots%2Fscreenshot-8.png?alt=media&token=9733914a-61a9-41ed-b715-3334ca425588',
    ],
    deployment: {
      web: 'https://stewards.app',
      android:
        'https://play.google.com/store/apps/details?id=app.stewards.customer',
      ios: 'https://apps.apple.com/in/app/stewards-order-to-your-desk/id1479412118',
    },
    subProjects: [
      {
        title: 'Staff Management',
        repository: null,
        description:
          'Staff app for stewards restaurant staff, easily update menu, product availability and take live orders from customers.',
        deployment: {
          android:
            'https://play.google.com/store/apps/details?id=app.stewards.staff&hl=en',
        },
      },
      {
        title: 'Admin Dashboard',
        repository: null,
        description:
          'Staff administration app for stewards restaurant partners. This helps restaurant administrators to easily manage orders, receipts, tables, restaurant info etc.',
        deployment: {
          web: 'https://manage.stewards.app',
        },
      },
      {
        title: 'Self Checkout',
        repository: null,
        description:
          "Stewards self checkout solution for customers who don't like waiting. Available on demand for iPad and tablets.",
        deployment: {},
      },
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
