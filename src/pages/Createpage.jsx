import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import  { toast } from 'react-hot-toast';

const Createpage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShow = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://uploadproducts.onrender.com/createnote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      toast.success("Product created successfully, wait for admin approval");
      console.log("Project created:", data);
      navigate('/');
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div data-theme="luxury" className="min-h-screen flex items-center justify-center bg-base-200 w-full">
      <form className="bg-base-100 p-6 rounded-lg shadow-md w-[70%]" onSubmit={handleShow}>
        <h2 className="text-2xl font-bold mb-4 text-base-content">Create a Project</h2>
        <div className="mb-4">
          <label className="block text-base-content mb-2" htmlFor="title">Title of Product</label>
          <input
            type="text"
            id="title"
            name='title'
            value={values.title}
            onChange={handleChange}
            className="w-full p-2 border border-base-300 rounded focus:outline-none focus:ring-2 focus:ring-base-300 bg-base-200 text-base-content"
            placeholder="Give a good name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content mb-2" htmlFor="content">Product Description</label>
          <textarea
            id="content"
            name="content"
            value={values.content}
            onChange={handleChange}
            className="w-full p-2 border border-base-300 rounded focus:outline-none focus:ring-2 focus:ring-base-300 bg-base-200 text-base-content"
            rows="4"
            placeholder="Your production details here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-base-content text-base-100 cursor-pointer py-2 px-4 rounded hover:bg-base-300"
        >
          Add
        </button>
        <div className="mt-4 text-center">
          <Link to="/" className="text-base-content underline hover:text-base-300">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Createpage;