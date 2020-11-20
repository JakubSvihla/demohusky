import { render } from '@testing-library/vue'
import HelloWorld from '@/components/HelloWorld.vue'

test('finds correct text 1', () => {
 
  const { getByText } = render(HelloWorld)
  getByText('Installed CLI Plugins');

});

test('finds correct text 2', () => {
 
  const { getByText } = render(HelloWorld)
  getByText('Essential Links');
 
});

test('finds correct text 3', () => {
 
  const { getByText } = render(HelloWorld)
  getByText('Ecosystem');
 
});
