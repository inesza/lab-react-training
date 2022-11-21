import visa from './../assets/images/visa.png';
import mastercard from './../assets/images/master-card.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let cardType;
  if (type === 'Visa') cardType = visa;
  if (type === 'Master Card') cardType = mastercard;
  const lastDigits = number.slice(-4);
  const cardNumber = '•••• •••• •••• ' + lastDigits;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: '15px',
        width: '30%',
        maxWidth: '400px',
        padding: '3em 2em',
      }}
    >
      <picture
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          marginBottom: '1em',
        }}
      >
        <img
          src={cardType}
          alt=""
          className="cardType"
          style={{ height: '25px', width: 'auto' }}
        />
      </picture>

      <div
        className="infos"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          textAlign: 'left',
        }}
      >
        <div className="cardNumber" style={{ width: '100%', fontSize: '2em' }}>
          {cardNumber}
        </div>
        <div className="expire" style={{ width: '40%' }}>
          Expires {expirationMonth}/{expirationYear}
        </div>
        <div className="bank" style={{ width: '60%' }}>
          {bank}
        </div>
        <div className="owner" style={{ width: '100%' }}>
          {owner}
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
