import  FruitBasket from '@/fruit-basket'
import { mount } from '@vue/test-utils'

test('can add fruits to basket with DOM', async () => {
  const wrapper = mount(FruitBasket);

  const input = wrapper.find('input');
  const button = wrapper.find('button');
  expect(wrapper.findAll('li').length).toBe(0);

  input.element.value = 'banana';
  input.trigger('input');  //send input event manually
  expect(wrapper.vm.fruit).toBe('banana');
  
  button.trigger('click');
  expect(wrapper.vm.fruit).toBe('');
  expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']));
  await wrapper.vm.$nextTick();
  expect(wrapper.findAll('li').length).toBe(1);
  
  input.element.value = 'strawberry';
  input.trigger('input');
  button.trigger('click');
  // console.log(wrapper.vm.basket);
  await wrapper.vm.$nextTick();
  expect(wrapper.findAll('li')).toHaveLength(2);
  expect(wrapper).toMatchSnapshot();
});