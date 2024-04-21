'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Fashion Plus - Ecommerce App',
    description: (
      <ul className="list-disc pl-2">
        <li>
          Built an e-commerce platform with HTML, CSS, and JavaScript, integrating Stripe for
          payments and a MongoDB database.
        </li>
        <li>Implemented Redux for state management, Passport.js for authentication.</li>
        <li>Responsive design using Tailwind CSS.,</li>
      </ul>
    ),
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Naman-9/Ecommerce-App',
    previewUrl: 'https://bit.ly/cecom',
  },
  {
    id: 2,
    title: 'Epic Journal - Blog platform',
    description: (
      <ul className="list-disc pl-2">
        <li>
          Crafted Epic Journal, a blog platform using HTML, CSS, JavaScript, React, and Redux.
        </li>
        <li>
          Integrated authentication via JSON Web Tokens (JWT) and Google OAuth, alongside a fully
          responsive UI with Tailwind CSS (including dark mode).
        </li>
        <li>
          Incorporated MongoDB for advanced search features and allowed users to manage comments.
        </li>
      </ul>
    ),
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Naman-9/Blog_App',
    previewUrl: 'https://bit.ly/blog-mern',
  },
  {
    id: 3,
    title: 'Sketch Board',
    description: (
      <ul className="list-disc pl-2">
        <li>
          Created Sketch Board, a real-time collaborative drawing app using HTML, CSS, JavaScript,
          the Canvas API for 2D graphics, and Socket.io for real-time sharing.
        </li>
        <li>Developed a user-friendly UI layout for collaborative drawing experiences.</li>
        <li>Added the functionality for users to download their created file.</li>
      </ul>
    ),
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Naman-9/drawing-board',
    previewUrl: 'https://bit.ly/app-sketch',
  },
  {
    id: 4,
    title: 'Excel Clone',
    description: (
      <ul className="list-disc pl-2">
        <li>
          Developed an Excel Clone, a web-based spreadsheet app using HTML, CSS, and JavaScript.
        </li>
        <li>
          Implemented two-way data binding for cell interactivity and a Cycle Detection Algorithm to
          prevent circular references.
        </li>
        <li>
          Added a Binding Detection Algorithm for dependency tracking and DFS path tracing for
          formula evaluation visualization.{' '}
        </li>
        <li>
          Included features like multiple sheets management and file upload/download using the File
          Reader API.{' '}
        </li>
      </ul>
    ),

    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/Naman-9/excel-clone',
    previewUrl: 'https://bit.ly/excel-clone',
  },
  {
    id: 5,
    title: 'Web Cam Gallery',
    description: (
      <ul className="list-disc pl-2">
        <li>
          Developed a MERN (MongoDB, Express.js, React, Node.js) web application that enables users
          to capture pictures and videos through the browser's camera, apply filters, and save them
          locally using the browser's storage.
        </li>
        <li>
          Implemented features for real-time filtering and editing using JavaScript libraries.
        </li>
        <li>Enhanced user experience with a responsive and intuitive UI design.</li>
      </ul>
    ),
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Naman-9/web-cam-gallery',
    previewUrl: 'https://naman-9.github.io/web-cam-gallery/',
  },
  {
    id: 6,
    title: 'Chat Application',
    description: (
      <ul className="list-disc pl-2">
        <li>
          Created a real-time chat application using MERN stack (MongoDB, Express.js, React,
          Node.js) with WebSocket technology.
        </li>
        <li>Users can create chat rooms and instantly start communicating in real-time.</li>
        <li>
          Implemented features for sending messages, receiving live updates, and maintaining chat
          history.
        </li>
        <li> Designed a user-friendly interface for seamless and engaging chatting experiences.</li>
      </ul>
    ),

    image: '/images/projects/6.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/Naman-9/Chat-App',
    previewUrl: 'https://naman-9.github.io/Chat-App/',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
