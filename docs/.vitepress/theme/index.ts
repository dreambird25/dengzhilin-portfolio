import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import HomeHero from './components/HomeHero.vue';
import FocusGrid from './components/FocusGrid.vue';
import ProjectGrid from './components/ProjectGrid.vue';
import WritingList from './components/WritingList.vue';
import ContactCta from './components/ContactCta.vue';
import AboutPage from './components/AboutPage.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import BlogPage from './components/BlogPage.vue';
import NowPage from './components/NowPage.vue';
import ServicesPage from './components/ServicesPage.vue';
import ServicesTeaser from './components/ServicesTeaser.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero);
    app.component('FocusGrid', FocusGrid);
    app.component('ProjectGrid', ProjectGrid);
    app.component('WritingList', WritingList);
    app.component('ContactCta', ContactCta);
    app.component('AboutPage', AboutPage);
    app.component('ProjectsPage', ProjectsPage);
    app.component('BlogPage', BlogPage);
    app.component('NowPage', NowPage);
    app.component('ServicesPage', ServicesPage);
    app.component('ServicesTeaser', ServicesTeaser);
  },
};
