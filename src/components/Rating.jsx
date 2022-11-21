const Rating = ({ children }) => {
  let rounded = Math.round(children);
  let stars = '';
  for (let i = 0; i < rounded; i++) {
    stars += '★';
  }
  let rate = stars.padEnd(5, '☆');
  return <div style={{ fontSize: '2em' }}>{rate}</div>;
};

export default Rating;
