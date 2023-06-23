import { useEffect, useState } from "react";
import "./styles/App.css";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // fetching api
  const fetchApi = async () => {
    try {
      await fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((data) => setList(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // search by name
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredEmployees = list.filter((employee) =>
        employee.first_name.toLowerCase().includes(query.toLowerCase())
      );
      setList(filteredEmployees);
    } else {
      fetchApi();
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-center font-semibold text-lg md:text-2xl mb-4">
        INTERNSHIP ASSIGNMENT
      </h1>
      <div className="mt-5 mb-14">
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[95%] md:w-[400px] mx-auto"
          placeholder="Search here..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <List list={list} />
    </div>
  );
}

export default App;
