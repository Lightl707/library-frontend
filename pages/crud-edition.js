import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateEdition from "../components/CreateEdition";
import DeleteEdition from "../components/DeleteEdition";
import EditEdition from "../components/EditEdition";
import axios from "axios";


const CrudEdition = () => { 

  useEffect(() => {
    axios.get("http://localhost:17071/edition/").then(res => {
      setEditions(res.data);
    })
  }, [])

    const [editions, setEditions] = useState([]);
    const [showModalEdition, setModalEdition] = useState(false);
    const [showModalEditionEdit, setModalEditionEdit] = useState(false);
    const [showModalEditionDelete, setModalEditionDelete] = useState(false);

    const closeModalEditionDelete = () => {
        setModalEditionDelete(false);
      };

    const closeModalEdition = () => {
        setModalEdition(false);
      };
    
      const closeModalEditionEdit = () => {
        setModalEditionEdit(false);
      };

    return (
   <div className="content">
             {showModalEdition ? <CreateEdition close={closeModalEdition} /> : null}
             {showModalEditionDelete ? <DeleteEdition close={closeModalEditionDelete} /> : null}
             {showModalEditionEdit ? <EditEdition close={closeModalEditionEdit} /> : null}


       <h2>Изменить/Создать Издания</h2>
       <button className = "crud_btn-green" onClick={() => setModalEdition(true)}>
       <FontAwesomeIcon icon={faPlus} size="1x" className = "crud_icon" />
           Добавить Издание
       </button>
       <input className = "input" type="text" placeholder="Поиск..." />
       <table className = "table">
       <thead>
           <tr>               
                <th>Издание</th>
                <th>Издатель</th>
                <th>Компания</th>
                <th>Год</th>
                <th>Действие</th>
           </tr>
      </thead>
           {editions.map((item, index) => {
          return (
            <tbody key={index}>
            <tr>
            <td>
                <p>{item.title}</p>
              </td>
               <td>
                <p>{item.publisher.name}</p>
              </td>
              <td>
                <p>{item.company.name}</p>
              </td>
              <td>
                <p>{item.year}</p>
              </td>
              <td>
            <div className="crud-book_buttons">
              <button
                className="crud_btn-green"
                onClick={() => setModalEditBook(true)}
              >
                Изменить
              </button>
              <button
                className="crud_btn-red"
                onClick={() => setModalDeleteBook(true)}
              >
                Удалить
              </button>
            </div>
          </td>
            </tr>
          </tbody>
          );
        })}
       </table>
   </div>
)
}

export default CrudEdition