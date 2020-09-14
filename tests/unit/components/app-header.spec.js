import {shallowMount} from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';
import Vuetify from "vuetify";
import Vue from "vue";
import VueRouter from 'vue-router';

describe('In AppHeader Component ',() => {
    let appheaderWapper;
beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);

appheaderWapper = shallowMount(AppHeader,{
     Vue
})
});
    afterEach(() => {
    appheaderWapper.destroy();
  });
 
  it('is a Vue instance', () => {
    expect(appheaderWapper.isVueInstance).toBeTruthy();
  });

  it('it should have a <v-app-bar-stub>', () => {
    expect(appheaderWapper.html()).toContain("v-app-bar-stub")
});

it('should find <v-toolbar-title-stub>', () => {
    expect(appheaderWapper.html()).toContain("v-toolbar-title-stub")
});

it('should find <v-btn-stub>', () => {
    expect(appheaderWapper.html()).toContain("v-btn-stub")
});

it('should find v-icon-stub', () => {
    expect(appheaderWapper.html()).toContain("v-icon-stub")
});

});