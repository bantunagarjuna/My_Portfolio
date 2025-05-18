const portfolioController = {
    getPortfolio: (req, res) => {
        res.render('index', {
            title: 'Bantu Nagarjuna - Portfolio',
            name: 'Bantu Nagarjuna',
            role: 'AI | IoT | NodeJS | DSA',
            taglines: [
                'Building Smart Systems',
                'Sharing Tech Stories',
                'Innovating Daily'
            ],
            about: {
                description: "Hi, I'm Bantu Nagarjuna, a passionate and driven tech enthusiast with hands-on experience in Artificial Intelligence, IoT, and Web Development. I recently completed my Research Internship at IIT Kharagpur and am a proud Smart India Hackathon 2022 Finalist. I enjoy building real-world solutions using cutting-edge technologies and continuously explore new ways to innovate and learn.",
                achievements: [
                    {
                        title: "National Level Hackathon",
                        description: "Finalist in National SIH22 Hackathon 2022",
                        icon: "🏆"
                    },
                    {
                        title: "Research Intern at IIT Kharagpur",
                        description: "Developed a real-time health monitoring system using IoT and DL",
                        icon: "🎯"
                    }
                ],
                skills: {
                    core: [
                        {
                            name: "Artificial Intelligence",
                            icon: '<i class="fas fa-brain"></i>'
                        },
                        {
                            name: "IoT Development",
                            icon: '<i class="fas fa-microchip"></i>'
                        },
                        {
                            name: "Machine Learning",
                            icon: '<i class="fas fa-cogs"></i>'
                        }
                    ],
                    development: [
                        {
                            name: "Python",
                            icon: '<i class="fab fa-python"></i>'
                        },
                        {
                            name: "Node.js",
                            icon: '<i class="fab fa-node-js"></i>'
                        },
                        {
                            name: "RESTful API",
                            icon: '<i class="fas fa-network-wired"></i>'
                        },
                        {
                            name: "GIT",
                            icon: '<i class="fab fa-git"></i>'
                        },
                        {
                            name: "Object Oriented Programming",
                            icon: '<i class="fas fa-object-group"></i>'
                        },
                    ]
                }
            },
            projects: [
                {
                    title: 'AI-PizzaShopBot',
                    description: 'IoT-based home automation system using Arduino and Node.js. Features real-time monitoring and control of home devices through a web interface.',
                    tech: ['LangChain', 'Prompting', 'React', 'Node.js'],
                    github: 'https://github.com/bantunagarjuna/AI-PizzaShopBot',
                    demo: 'https://smart-home-demo.herokuapp.com'
                },
                {
                    title: 'Mini E-Commerce Platform',
                    description: 'A lightweight e-commerce platform designed for seamless product browsing and management with enhanced functionality for product interactions.',
                    tech: ['Node.js', 'PostgreSQL', 'React'],
                    github: 'https://github.com/bantunagarjuna/Mini-E-Commerce-Platform',
                    demo: 'https://ai-learning-platform.herokuapp.com'
                }
            ],
            contact: {
                email: 'bantunagarjuna2@gmail.com',
                linkedin: 'https://www.linkedin.com/in/bantu-nagarjuna/',
                github: 'https://github.com/bantunagarjuna',
                leetcode: 'https://leetcode.com/u/BantuNagarjuna/',
                description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!"
            },
            year: new Date().getFullYear()
        });
    }
};

module.exports = portfolioController;