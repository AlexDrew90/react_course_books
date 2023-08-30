import { useState } from "react";
let BookCreate = ({onCreate}) => {

  const [title, setTitle] = useState([]);

  const handleChange = (event) => {
      setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
};

  return <div>
    <form onSubmit={handleSubmit}>
      <label>Book title</label>
        <input value={title} onChange={handleChange}/>
        <button>Create</button>
    </form>
  </div>
};

export default BookCreate;
