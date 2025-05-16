import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Brain, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const coreValues = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Finding elegant solutions to complex problems",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Exploring new technologies and approaches",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "User-Focused",
      description: "Creating intuitive user experiences",
    },
  ];

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-400/20 to-primary-600/20 p-1">
              <img
                src="/public/assets/projects/profile-pic.jpeg"
                alt="Aditya Mohod"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
            <div className="absolute inset-0 bg-primary-500/10 animate-pulse rounded-2xl blur-3xl -z-10" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="section-title text-left">About Me</h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  Hi, I'm Aditya Mohod — a B.Tech Computer Science student with a strong passion for web development and creative problem-solving.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in the MERN stack and enjoy building fast, scalable, and user-friendly web applications. Clean code, thoughtful design, and great user experience are at the heart of everything I create.
                </p>

                <p className="text-lg leading-relaxed">
                  I'm always eager to learn new tools and technologies that elevate my skills. Whether it's optimizing performance, adding smart features, or exploring new frameworks — I'm all in.
                </p>
                <p className="text-lg leading-relaxed">
                  My goal is to grow as a developer while contributing to meaningful projects that make a real impact. I'm open to collaborations, internships, and ideas that drive innovation and make technology more accessible.
                </p>
              </div>

            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-xl font-semibold mb-6">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;