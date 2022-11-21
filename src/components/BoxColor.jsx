const BoxColor = ({ r, g, b }) => {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div
      style={{
        backgroundColor: ' rgb(' + r + ' ' + g + ' ' + b + ')',
        width: '80%',
        height: '100px',
        margin: '0 auto',
        border: '1 px solid black',
        padding: '1em',
      }}
    >
      rgb({r},{g},{b}) <br />#{rgbToHex(r, g, b)}
    </div>
  );
};
export default BoxColor;
