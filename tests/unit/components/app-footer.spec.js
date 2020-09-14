import {shallowMount} from '@vue/test-utils';
import AppFooter from '@/components/AppFooter.vue';
import Vuetify from "vuetify";
import VueRouter from 'vue-router';
import Vue from "vue";
describe('In appFooterWapper Component ',() => {
    let appfooterWrapper;
beforeEach(() => {
Vue.use(Vuetify);
Vue.use(VueRouter);

appfooterWrapper = shallowMount(AppFooter,{
     Vue
})
});
afterEach(() => {
    appfooterWrapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(appfooterWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a <v-footer-stub>', () => {
    expect(appfooterWrapper.html()).toContain("v-footer-stub")
});

it('should find <v-col-stub>', () => {
    expect(appfooterWrapper.html()).toContain("v-col-stub")
});

});