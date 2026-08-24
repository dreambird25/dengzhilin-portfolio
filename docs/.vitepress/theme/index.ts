import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import HomeHero from './components/HomeHero.vue';
import FocusGrid from './components/FocusGrid.vue';
import ProjectGrid from './components/ProjectGrid.vue';
import WritingList from './components/WritingList.vue';
import ContactCta from './components/ContactCta.vue';
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
  },
};
