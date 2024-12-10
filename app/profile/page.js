export default function Profile() {
  const user = {
    name: "John Doe",
    comments: [
      { movie: "Inception", comment: "Amazing plot and visuals!" },
      { movie: "The Godfather", comment: "A timeless classic." },
    ],
    favorites: ["Inception", "The Matrix", "The Godfather"],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{user.name} Profile Page</h1>
      <h2 className="text-xl font-semibold mt-4">Comments</h2>
      <ul>
        {user.comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.movie}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Favorites</h2>
      <ul>
        {user.favorites.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}
