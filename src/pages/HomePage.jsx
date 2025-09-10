import { useState, useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import NoteComponent from '../components/noteComponent.jsx';

const LoadingDots = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      Loading{'.'.repeat(dotCount)}
    </span>
  );
};

const HomePage = () => {
  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      const res = await fetch("https://uploadproducts.onrender.com/getnote");
      const data = await res.json();
      setNote(data);
      setLoading(false);
    };
    fetchNote();
  }, []);

  return (
    <div>
      <Nav />
      {loading ? (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh"
        }}>
          <LoadingDots />
        </div>
      ) : (
        <NoteComponent notes={note} setnote={setNote} />
      )}
    </div>
  );
};

export default HomePage;