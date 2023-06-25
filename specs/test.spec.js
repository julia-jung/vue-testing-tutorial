import { mount, shallowMount } from '@vue/test-utils';
import TestComponent from '@/test';
import List from '@/list';

test('mount a vue component', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool',
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('ListComopnent', async () => {
  const wrapper = mount(List);
  const movies = wrapper.vm.marvelMovies;
  wrapper.setData({ marvelMovies: [...movies, 'Endgame'] });
  // console.log(wrapper.vm.marvelMovies);
  await wrapper.vm.$nextTick();
  expect(wrapper.html()).toMatchSnapshot();
})