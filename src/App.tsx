import { Gift, Instagram, Twitter, Github, Linkedin, Mail, Music, Globe, GitlabIcon, Code2, MessageCircle, Heart, Radio } from 'lucide-react';
import './christmas.css';

function App() {
  const links = [
    { icon: Instagram, label: 'Instagram', url: '#', color: 'from-pink-500 to-purple-600' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/harys722', color: 'from-blue-400 to-blue-600' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/harys722', color: 'from-gray-700 to-gray-900' },
    { icon: GitlabIcon, label: 'GitLab', url: 'https://gitlab.com/harys722', color: 'from-orange-500 to-red-600' },
    { icon: Code2, label: 'CodePen', url: 'https://codepen.io/harys722', color: 'from-gray-900 to-gray-700' },
    { icon: MessageCircle, label: 'Discord', url: 'https://discord.com/users/1203357768610746385', color: 'from-indigo-600 to-indigo-800' },
    { icon: Heart, label: 'Bluesky', url: 'https://bsky.app/profile/harys.is-a.dev', color: 'from-blue-500 to-cyan-500' },
    { icon: Radio, label: 'Reddit', url: 'https://reddit.com/u/harys722', color: 'from-orange-600 to-red-600' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'from-blue-600 to-blue-800' },
    { icon: Music, label: 'Spotify', url: '#', color: 'from-green-500 to-green-700' },
    { icon: Globe, label: 'Website', url: 'https://harys.is-a.dev', color: 'from-indigo-500 to-purple-600' },
    { icon: Mail, label: 'Email', url: 'mailto:contact@harys.is-a.dev', color: 'from-red-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen christmas-bg relative overflow-hidden">
      <div className="snowflakes" aria-hidden="true">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="snowflake">❅</div>
        ))}
      </div>

      <div className="ornament ornament-1"></div>
      <div className="ornament ornament-2"></div>
      <div className="ornament ornament-3"></div>
      <div className="ornament ornament-4"></div>
      <div className="ornament ornament-5"></div>
      <div className="ornament ornament-6"></div>

      <div className="stars" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`star star-${i}`}>✦</div>
        ))}
      </div>

      <div className="garland-left"></div>
      <div className="garland-right"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-12 animate-fadeIn max-w-2xl">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500 via-green-500 to-red-600 p-1 shadow-2xl christmas-glow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Gift className="w-16 h-16 text-red-600" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 christmas-text">
            - HARYs -
          </h1>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20 mb-8 text-left">
            <p className="text-white text-base leading-relaxed mb-4">
              Hi, I'm harys. It's my nickname and it is actually the short form of my real life name. Would you guess what's my real name? 😄
            </p>
            <p className="text-white text-base leading-relaxed">
              I'm a young student from Pakistan and I love coding and programming. My first hobby is web development. I work on various projects on GitHub. Check out Free Domains and GitHub Guides!
            </p>
          </div>
        </div>

        <div className="w-full max-w-2xl space-y-3 animate-slideUp">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                className="link-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-full flex items-center justify-center gap-3 px-6 py-3 z-10">
                  <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0" />
                  <span className="text-base font-medium text-white group-hover:brightness-110 transition-all duration-300">
                    {link.label}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10"
                     style={{ background: `linear-gradient(to right, ${link.color.includes('pink') ? '#ec4899, #9333ea' : link.color.includes('blue-400') ? '#60a5fa, #2563eb' : link.color.includes('gray') ? '#374151, #111827' : link.color.includes('blue-600') ? '#2563eb, #1e40af' : link.color.includes('green') ? '#22c55e, #15803d' : link.color.includes('indigo') ? '#6366f1, #9333ea' : '#ef4444, #ec4899'})` }}>
                </div>
              </a>
            );
          })}
        </div>

        <footer className="mt-12 text-center text-white text-sm opacity-80 animate-fadeIn">
          <p>Made with ❤︎ by <a href="https://harys.is-a.dev/" target="_blank">harys722</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
