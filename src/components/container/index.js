import AgContainer from './Container.vue';
import AgAside from './Aside.vue';
import AgHeader from './Header.vue';
import AgMain from './Main.vue';
import AgFooter from './Footer.vue';
export default {
    install(app) {
        app.component(AgContainer.name, AgContainer);
        app.component(AgAside.name, AgAside);
        app.component(AgHeader.name, AgHeader);
        app.component(AgMain.name, AgMain);
        app.component(AgFooter.name, AgFooter);
    }
};
//# sourceMappingURL=index.js.map