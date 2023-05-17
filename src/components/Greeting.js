import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingReducer';

export default function Greetings() {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const handler = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="container mt-3">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Greetings</h1>
        {loading
          && (
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
          )}
        {error && <h2>Something went wrong!</h2>}
        {!loading && <p>{greeting}</p>}
        {!loading && !error && <button type="button" className="btn btn-primary" onClick={handler}>Click the button to fetch a greeting</button>}
      </div>
    </div>

  );
}
