const Random = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <p className="Random">
      Random value between {min} and {max} → {randomNumber}
    </p>
  );
};

export default Random;
