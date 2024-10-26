import React from 'react';

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    favoriteGenres: ["Fiction", "Science Fiction", "Mystery"],
    recommendedBooks: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "1984", author: "George Orwell" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" },
    ],
  };

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
