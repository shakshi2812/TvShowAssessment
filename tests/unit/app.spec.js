import { shallowMount} from '@vue/test-utils';
import App from '@/App.vue';
import Vuetify from "vuetify";
import Vue from "vue";
import AppHeader from '@/components/AppHeader.vue'; 
import VueRouter from "vue-router";
import AppFooter from '@/components/AppFooter.vue';

describe('In App Component', () => {
    let appWrapper;
    
    beforeEach(() => {
      Vue.use(Vuetify);
      Vue.use(VueRouter);
appWrapper = shallowMount(App, {
        Vue
      });
    });
    afterEach(() => {
      appWrapper.destroy();
    });
   
    it('is a Vue instance', () => {
      expect(appWrapper.isVueInstance).toBeTruthy();
    });
  
    it('it should have a v-app', () => {
      expect(appWrapper.html()).toContain("v-app");
    });
  
      it("it should load the app-header", () => {
        expect(AppHeader).toBeTruthy();
      });
  
      it("it should load the app-header", () => {
        expect(AppFooter).toBeTruthy();
      });
  
    it('it should have a v-content', () => {
      expect(appWrapper.html()).toContain("v-content");
    });
  
  });
  