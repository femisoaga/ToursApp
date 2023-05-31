import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getPost = async () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <main>
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div>
          <h1>No tours left</h1>
          <button className="btn" onClick={getPost}>
            refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </main>
  );
}

export default App;
