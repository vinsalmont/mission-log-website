import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timer, Target, TrendingUp, Brain, Sparkles, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Nebula from './components/Nebula';
import IllustrationFeature from './components/IllustrationFeature';
import Testimonial from './components/Testimonial';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-space-blue via-space-purple to-space-blue text-white overflow-hidden">
      <Nebula />
      
      {/* Header */}
      <header className="backdrop-blur-md bg-space-blue/80 sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-space-violet animate-bounce" />
            <span className="text-xl font-orbitron">MissionControl</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#features" className="hover:text-space-violet transition-colors">{t('header.features')}</a>
            <a href="#testimonials" className="hover:text-space-violet transition-colors">{t('header.stories')}</a>
            <a href="#about" className="hover:text-space-violet transition-colors">{t('header.about')}</a>
            <LanguageSwitcher />
            <button className="glass-card px-6 py-2 rounded-full transition-all transform hover:scale-105 hover:bg-space-violet/30">
              {t('header.download')}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-space-violet font-medium mb-6">{t('hero.tagline')}</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-8 bg-gradient-to-r from-white via-space-violet to-space-yellow bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex justify-center gap-6 mb-16">
              <button className="store-button-apple px-8 py-3 rounded-xl flex items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" 
                     alt="App Store" 
                     className="w-8 h-8" />
                {t('hero.cta.appStore')}
              </button>
              <button className="store-button-google px-8 py-3 rounded-xl flex items-center gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                     alt="Google Play" 
                     className="w-8 h-8" />
                {t('hero.cta.googlePlay')}
              </button>
            </div>

            <div className="flex justify-center gap-12">
              <div className="text-center">
                <Brain className="w-12 h-12 text-space-violet mx-auto mb-4" />
                <p className="text-xl font-semibold">{t('hero.stats.adhd')}</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-space-violet mx-auto mb-4" />
                <p className="text-xl font-semibold">{t('hero.stats.users')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 relative max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-space-violet/20 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800" 
              alt="MissionControl App" 
              className="relative z-10 rounded-3xl shadow-2xl phone-shadow"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <IllustrationFeature
            icon={Timer}
            title={t('features.focus.title')}
            description={t('features.focus.description')}
            benefits={t('features.focus.benefits', { returnObjects: true })}
            illustration="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800"
          />
          
          <IllustrationFeature
            icon={Target}
            title={t('features.achievement.title')}
            description={t('features.achievement.description')}
            benefits={t('features.achievement.benefits', { returnObjects: true })}
            illustration="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800"
            reverse
          />
          
          <IllustrationFeature
            icon={TrendingUp}
            title={t('features.missions.title')}
            description={t('features.missions.description')}
            benefits={t('features.missions.benefits', { returnObjects: true })}
            illustration="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-space-purple/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-orbitron text-center mb-16">
            {t('testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial
              quote={t('testimonials.stories.alex.quote')}
              author={t('testimonials.stories.alex.author')}
              title={t('testimonials.stories.alex.title')}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
            />
            <Testimonial
              quote={t('testimonials.stories.sarah.quote')}
              author={t('testimonials.stories.sarah.author')}
              title={t('testimonials.stories.sarah.title')}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
            />
            <Testimonial
              quote={t('testimonials.stories.jordan.quote')}
              author={t('testimonials.stories.jordan.author')}
              title={t('testimonials.stories.jordan.title')}
              image="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=200"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Sparkles className="w-16 h-16 text-space-violet mx-auto mb-8" />
          <h2 className="text-4xl font-bold font-orbitron mb-8">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-space-purple/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-orbitron mb-8">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <button className="glass-card px-8 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 hover:bg-space-violet/30">
            {t('cta.button')}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-space-blue/80">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Rocket className="w-6 h-6 text-space-violet" />
              <span className="font-orbitron">MissionControl</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.links.terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.links.contact')}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;