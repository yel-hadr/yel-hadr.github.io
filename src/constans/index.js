import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cpp,
    python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "low_level Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "1337 Pool",
      iconBg: "#383E56",
      date: "March 2022 - April 2022",
      points: [
        "Gained proficiency in writing efficient, low-level code and debugging complex problems.",
        "Developed collaboration and communication skills through a self-directed learning model.",
        "Learned to both teach and learn from peers, fostering a community-driven growth mindset.",
        "Enhanced teamwork and adaptability through weekly team-based challenges with randomized groups.",
        "Built time management and project delivery skills by collaborating under tight deadlines.",
      ],
    },
    {
      title: "1337 Cursus Part 1 (C Programming)",
      iconBg: "#383E56",
      date: "October 2022 - December 2023",
      points: [
        "Built a custom library (libft) of reusable utility functions to streamline future projects.",
        "Mastered file and input/output operations through projects like ft_printf (recreating printf() with variable arguments) and get_next_line (reading lines from file descriptors).",
        "Enhanced algorithmic thinking by solving stack-based data sorting challenges in push_swap with efficient solutions.",
        "Gained a deep understanding of threading, synchronization, and inter-process communication through philosophers (threading basics with mutexes) and minitalk (using UNIX signals for data exchange).",
        "Explored graphics and 3D rendering with fdf (wireframe landscapes) and cub3d (ray-casting to simulate dynamic first-person navigation).",
        "Built a functional shell (minishell), deepening knowledge of system calls, file descriptors, and process management."
      ],
    },
    {
      title: "1337 Cursus Part 2 (C++ Object-Oriented Programming)",
      iconBg: "#383E56",
      date: "December 2023 - Mai 2024",
      points: [
        "Exploring the core C++ concepts including dynamic memory allocation, pointers, references, and polymorphism, with a focus on low-level memory operations and efficient data manipulation.",
        "Developed object-oriented designs using inheritance, subtype polymorphism, abstract classes, and the Orthodox Canonical Form for reusable and scalable code.",
        "Gained expertise in generic programming with C++ templates, templated containers, iterators, and STL algorithms, enhancing flexibility and performance.",
        "Built an IRC server (ft_irc), deepening my understanding of client-server architectures, networking, and protocol implementation.",
      ],
    },
    {
      title: "1337 Cursus Part 3 (Web Development & System Administration & Virtualization)",
      iconBg: "#383E56",
      date: "December 2023 - June 2024",
      points: [
        "Gained experience in making strategic decisions within project constraints, such as using Nginx and selecting appropriate external libraries for the project.",
        "Developed skills in modular development with Django, managing dependencies and ensuring smooth integration across the application.",
        "Strengthened understanding of project scoping and adaptability, staying within defined frameworks (like Django) while making thoughtful decisions to meet project goals.",
        "Gained hands-on experience in system administration and virtualization, using Docker for containerization and VirtualBox for setting up virtual machines and installing operating systems from scratch."
        
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };