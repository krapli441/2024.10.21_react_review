import { useState, useEffect } from "react";
import A from "./A";
import B from "./B";

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div
      className="App"
      style={{
        padding: "1rem",
      }}
    >
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <div style={{ display: "flex" }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
