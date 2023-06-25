import Vuex from 'vuex'
import Vue from 'vue'
import { mount,  createLocalVue } from '@vue/test-utils'

import SaladBowlComponent from '@/salad-bowl'
import saladStore from '@/store/salad-store'

// Vue.use(Vuex); // this polluting global Vue instance

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);

const store = new Vuex.Store(saladStore);

test('store is loaded', () => {
  const wrapper = mount(SaladBowlComponent, {
    localVue: VueWithVuex,
    store
  });

  store.state.salad.push('cucumber');

  expect(wrapper.vm.salad).toEqual(['cucumber']);
});

test('store works', () => {
  const store = new Vuex.Store(saladStore);
  const wrapper = mount(SaladBowlComponent, {
    localVue: VueWithVuex,
    store
  });
  wrapper.vm.addIngredient('tomato');
  expect(wrapper.vm.salad).toEqual(['tomato']);
});