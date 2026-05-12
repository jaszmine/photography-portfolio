import { motion } from 'framer-motion';
import { Camera, Heart, Coffee, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  const philosophies = [
    { icon: Heart, text: 'Authentic storytelling', color: 'accent-coral', caption: 'Every image tells a story. Let me help you tell yours.' },
    { icon: Camera, text: 'Artistic vision', color: 'accent-orange', caption: 'Where technical precision meets creative intuition.' },
    { icon: Coffee, text: 'Personal connections', color: 'accent-yellow', caption: 'Every photoshoot is a unique collaboration where we create something special together.' },
  ];

  const journey = [
    { year: '2018', title: 'Started Photography', description: 'I began my journey after borrowing a dslr from a friend to take photos on a trip. Little did I know this hobby would later turn into a lifelong passion of mine. ' },
    { year: '2024', title: 'Trained at University', description: 'I took my first professional studio art course regarding studio art course regarding digital photography fundamentals, from camera operation and lighting to digital workflow, while exploring design elements, contemporary art connections, and the crucial roles of light and color in image capture. ' },
    { year: '2025', title: 'Launched First Professional Photoshoots', description: 'I had the incredible opportunity to have clients start booking me for various photoshoots, each from a unique perspective!' },
    // { year: '2018', title: 'Started Photography', description: 'Began my journey with a passion for capturing moments in time' },
    // { year: '2020', title: 'First Exhibition', description: 'Showcased work at local art gallery' },
    // { year: '2022', title: 'International Recognition', description: 'Featured in international photography magazines' },
    // { year: '2024', title: 'Global Projects', description: 'Working with clients worldwide' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-accent-yellow/15 via-accent-blue/10 to-beige-light">
        <div className="absolute inset-0 bg-grain-noise opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Behind the
              <span className="text-accent-blue"> Lens</span>
            </h1>
            <p className="text-lg text-dark-grey/70 leading-relaxed">
              Hello! My name is Jaszmine DeFranco. 
              I'm a visual storyteller with a passion for capturing authentic moments 
              and turning them into lasting memories. Based between urban landscapes 
              and natural wonders, I find beauty in every corner of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Philosophy</h2>
            <p className="text-dark-grey/70 max-w-2xl mx-auto">
              Photography is more than just taking pictures, it's about capturing emotions, 
              telling stories, and creating connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center p-8 rounded-2xl bg-beige-dark/20 hover:bg-beige-dark/30 transition-all duration-300"
              >
                <item.icon className={`w-12 h-12 text-${item.color} mx-auto mb-4`} />
                <h3 className="text-xl font-display font-semibold mb-2">{item.text}</h3>
                <p className="text-dark-grey/60 text-sm">{item.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-beige-dark/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Journey</h2>
            <p className="text-dark-grey/70 max-w-2xl mx-auto">
              A timeline of growth, exploration, and artistic development
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-accent-blue/30 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent-blue rounded-full" />
                <div className="mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent-blue" />
                  <span className="text-accent-blue font-semibold">{item.year}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-dark-grey/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                A Few Things
                <span className="text-accent-blue"> About Me</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                  <span className="text-dark-grey/70">Based between Austin and Dallas TX, photograping worldwide.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                  <span className="text-dark-grey/70">Dedicated to the craft since 2018.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                  <span className="text-dark-grey/70">Passionate about environmental conservation.</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent-blue/20 to-accent-yellow/20 flex items-center justify-center">
                {/* <Camera className="w-24 h-24 text-accent-blue/40" /> */}
                <img 
                    src="/images/about/headshot.png" 
                    alt="Jaszmine DeFranco" 
                    className="w-100 h-100 object-cover rounded-full shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-yellow/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;