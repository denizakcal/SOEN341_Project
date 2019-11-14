const React = require('react');
const {render, fireEvent} = require('@testing-library/react');
const Component = require('./App');

// describe('<Component /> spec', () => {it('renders the component', () => {
//     const container = render(<Component />)
//     expect(container.firstChild).toMatchSnapshot()
//   })
//   it('assert there are 6 regions', () => {
//     expect(document.querySelectorAll('.map-region').length).toBe(6)
//   })
//   it('assert there are 12 region items', () => {
//     expect(document.querySelectorAll('.region-item').length).toBe(12)
//   })
//   it('assert connect button renders the correct label', () => {
//     expect(document.querySelector('.connect-btn').innerHTML).toBe("Connect")
//   })
//   it('assert the first item link to be /somelink', () => {
//     const allAgent = document.querySelector('.region-item:first-child a')
//     expect(allAgent.getAttribute('href')).toBe('/somelink?id=123&name=link')
//   })
// });

const sum = require('./App');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});