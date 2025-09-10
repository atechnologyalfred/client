import { Link, useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const NoteDetailPage = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [values, setValues] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    const fetchNote = async () => {
      const res = await fetch(`https://uploadproducts.onrender.com/getnote/${id}`, {
        method: 'GET',
      });
      const data = await res.json();
      setValues({
        title: data.title,
        content: data.content
      });

    };
    fetchNote();
  }, [id]);


const handleUpdate = async () => {
  const res = await fetch(`https://uploadproducts.onrender.com/updatenote/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });
  const data = await res.json();
  toast.success('Note updated successfully');
  navigation('/');
  console.log(data);
};

  return (
    <div data-theme="luxury" className="min-h-screen flex items-center justify-center bg-base-200 w-full">
      <form className="bg-base-100 p-6 rounded-lg shadow-md w-[70%]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-base-content">Note Details</h2>
          <button
            onClick={handleUpdate}
            type="button"
            className="btn btn-primary"
            // onClick={handleUpdate} // Add your update handler here
          >
            Update
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-base-content mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            className="w-full p-2 border border-base-300 rounded focus:outline-none bg-base-200 text-base-content"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-base-content mb-2" htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={values.content}
            onChange={(e) => setValues({ ...values, content: e.target.value })}
            className="w-full p-2 border border-base-300 rounded focus:outline-none bg-base-200 text-base-content"
            rows="4"
            placeholder="Content"
          ></textarea>
        </div>
        <div className="mt-4 text-center">
          <Link to="/" className="text-base-content underline hover:text-base-300">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NoteDetailPage;