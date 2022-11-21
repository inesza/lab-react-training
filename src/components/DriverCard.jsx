import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div
      className="DriverCard"
      style={{
        backgroundColor: '#455EB5',
        color: 'white',
        padding: '1em',
        borderRadius: '15px',
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1em',
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
