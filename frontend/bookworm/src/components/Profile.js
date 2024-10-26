import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mock fetch function to simulate getting user data
    const fetchUserData = async () => {
      // Replace this with actual API call to fetch user data after OAuth login
      const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        favoriteGenres: ["Fiction", "Science Fiction", "Mystery"],
        recommendedBooks: [
          { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
          { title: "1984", author: "George Orwell" },
          { title: "To Kill a Mockingbird", author: "Harper Lee" },
        ],
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Loading state while fetching user data
  }

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Favorite Genres:</strong> {user.favoriteGenres.join(", ")}</p>

      <h2>Recommended Books</h2>
      <ul>
        {user.recommendedBooks.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
