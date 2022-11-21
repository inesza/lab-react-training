import React from 'react';

const Greetings = ({ lang, children }) => {
  let greet;
  if (lang === 'fr') greet = 'Bonjour';
  if (lang === 'de') greet = 'Hallo';
  if (lang === 'en') greet = 'Hello';
  if (lang === 'es') greet = 'Hola';
  return (
    <div className="Greetings" lang={lang}>
      {greet} {children}
    </div>
  );
};

export default Greetings;
