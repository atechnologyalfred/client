
import { Link } from 'react-router';
import { SquarePen, Trash } from 'lucide-react';
import { toast } from 'react-hot-toast';
const noteComponent = ({notes, setnote}) => {


  const handleDelete = async (e, id) => {
    e.preventDefault()
    toast.loading("Deleting...")
    if (!window.confirm("Are you sure you want to delete this note?")) {
      toast.dismiss();
      return;
    }

    try {
      const del  = await fetch(`https://uploadproducts.onrender.com/deletenote/${id}`, {
        method: 'DELETE'
      })
      const res = await del.json()
      toast.dismiss();
      toast.success("Note deleted successfully")
      console.log(res)
      setnote((prevNotes) => prevNotes.filter((note) => note._id !== id))
    } catch (error) {
      console.error(error)
    }
  }
  return (
    
    <div className="flex gap-4 p-8 mx-auto flex-wrap justify-center">
      {notes.map((note, index) => (
        <Link to={`/getnote/${note._id}`} key={index}  data-theme="luxury">
          <div className="card w-96 shadow-sm shadow-base-50">
            <div className="card-body">
              <h2 className="card-title">{note.title}</h2>
              <p>{note.content}</p>
              <p><span>{note.createdAt}</span></p>
              <p><span>{note.UpdatedAt}</span></p>
              <div className="card-actions justify-end">
                <div className="flex gap-1 justify-end text">
                  <span  onClick={(e) => handleDelete(e,  note._id)}><Trash   size="1.2rem" className="text-red-500" /></span>
                  <span ><SquarePen size="1.2rem " className="text-green-200" /></span>
                </div>
              </div>
            </div>
          </div>
</Link>
      ))}
    </div>
    
  )
}

export default noteComponent;