import React from 'react';

const IdCard = ({ lastName, firstName, gender, birth, height, picture }) => {
  const birthDate = new Intl.DateTimeFormat('fr-FR').format(new Date(birth));
  return (
    <article className="IdCard">
      <div>
        <img src={picture} alt={lastName} />
      </div>
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}cm</p>
        <p>Birth: {birthDate}</p>
      </div>
    </article>
  );
};

export default IdCard;
