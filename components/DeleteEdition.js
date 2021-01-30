import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const DeleteEdition = ({ close }) => {
  useEffect(() => {
    axios.get("http://localhost:17071/edition/").then(res => {
      setEditions(res.data);
    })
  }, [])
  
  const [editions, setEditions] = useState([]);
  
  const handleClick = () => {
    request.delete('/edition/{item.id}').then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error)
    })
  }

  return (
  <div className="modal-wrapper">
    <div className="modal_close" onClick={close}>
      <img src="/close.svg" alt="" />
    </div>
    <div className="book_delete">
        <FontAwesomeIcon icon={faTrash} size="4x" />
      <h2>Удаление Издания</h2>
        <p>Вы уверены в том, что хотите удалить Издание?</p>
      <div className="book_delete-answers">
      <button className="book_delete-yes" onClick={() => handleClick()}>
      <FontAwesomeIcon icon={faCheck} size="1x" className="book_delete_icon"/>
        Да
      </button>
      <button className="book_delete-no" onClick={close}>
        <FontAwesomeIcon icon={faCheck} size="1x" className="book_delete_icon" />
        Нет
      </button>
      </div>
    </div>
  </div>
);
  }

export default DeleteEdition;