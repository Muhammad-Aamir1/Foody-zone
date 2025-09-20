//import React from "react";
import SearchResult from "./components/SearchResults/SearchResult";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const foodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setLoading(false);
        setData(data);
        setFilteredData(data);
        console.log(data);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
    foodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue == "") {
      setFilteredData(null);
    }
    
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
    
  };

  const buttonFilter = (type) => {
    if (type == "all") {
      setFilteredData(data);
    } else {
      const filter = data?.filter((food) => food.type === type);
      setFilteredData(filter);
    }
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;
  return (
    <>
      <Maincontainer>
        <Topcontainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search food"
            />
          </div>
        </Topcontainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button key={value.name} onClick={() => buttonFilter(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Maincontainer>
      <SearchResult data={filteredData} />
    </>
  );
}

export default App;

const Maincontainer = styled.section`
  max-width: 1200px;
  margin: 0px auto;
  height: 200px;
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Button = styled.span`
  background-color: #ff5454;
  border-radius: 5px;
  padding: 6px 12px;
  color: #ffff;
  border: none;
  &:hover {
    background-color: #f22f2f;
    cursor: pointer;
  }
`;

const Topcontainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: #ffff;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;
