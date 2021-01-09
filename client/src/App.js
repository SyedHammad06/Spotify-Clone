import { useState, useEffect } from 'react';

const App = () => {
  const [apiText, setApiText] = useState('');

  const apiReq = () => {
    fetch('http://localhost:8080/api')
      .then((res) => res.text())
      .then((res) => setApiText(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiReq();
  }, []);

  return (
    <div>
      <p>{apiText}</p>
    </div>
  );
};
export default App;
