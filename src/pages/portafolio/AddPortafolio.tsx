import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {addEntry} from "../../state/features/portafolioSlice"
import '../../App.css'
import { v4 as uuid } from "uuid"



function Portafolio() {
  const [name, setNameInput] = useState("");
  const [url, setUrlInput] = useState("");
  const [description, setDescriptionInput] = useState("");
  const dispatch = useDispatch();
  return (
    <form action="">
      <div className="form-group row">
        <label className="col-sm-1 col-form-label">Name</label>
        <div className="col-sm-10">
          <input type="text" name="name" id="name" placeholder="Name" className="form-control mb-4" value={name} onChange={(e) => setNameInput(e.target.value)} />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-1 col-form-label">Url</label>
        <div className="col-sm-10">
          <input type="text" name="url" id="url" placeholder="Url" className="form-control mb-4" value={url} onChange={(e) => setUrlInput(e.target.value)} />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-1 col-form-label">Description</label>
        <div className="col-sm-10">
          <textarea name="description" id="description" placeholder="Description" className="form-control mb-4" value={description} onChange={(e) => setDescriptionInput(e.target.value)} />
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-success mb-4" onClick={() => {
          dispatch(
            addEntry({
              id:uuid(),
              name,
              url,
              description
            })
          )
          setNameInput("")
          setUrlInput("")
          setDescriptionInput("");
          
        }}>
          Add to Portfolio
        </button>
      </div>
    </form>
  )
}

export default Portafolio