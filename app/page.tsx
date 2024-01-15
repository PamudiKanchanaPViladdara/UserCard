"use client";

import React, { useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState<any | null>(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error("Error fetching random user:", error);
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-4 xl:mx-auto mt-16 bg-gray-400 shadow-xl rounded-lg text-gray-900 flex flex-col">
        <div className="flex flex-row">
          <div className="p-4">
            <div className="mx-auto w-42 border-4 border-white rounded-full overflow-hidden">
              {userData && (
                <img src={userData.picture.large} alt="Random User" />
              )}
            </div>
          </div>
          <div className="text-start text-black w-full p-4">
            {userData && (
              <div>
                <p>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</p>
                <p>{userData.gender}</p>
                <p>{userData.dob.date}</p>
                <p>{userData.email}</p>
                <p>{`${userData.location.street.number} ${userData.location.street.name}, ${userData.location.city}, ${userData.location.state}, ${userData.location.country},  ${userData.location.postal}`}</p>
              </div>
            )}
          </div>
        </div>
          <button className="p-4" onClick={fetchRandomUser}>Fetch Random User</button>
      </div>
    </div>
  );
};

export default Home;
