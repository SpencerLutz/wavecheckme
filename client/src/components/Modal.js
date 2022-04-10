import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, searchQuery }) => {

  async function submit(query) {
    const responses = await fetch('/getsong?search='+query)
  .then(response => response.json());
    setIsOpen(true);
    return responses;
  }

  submit(searchQuery).then(data => {
    var audio = new Audio(data.results[0]["previewUrl"]);
    audio.play();
  });

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Your recommendation...</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <img className={styles.album} src="favicon_io/albumExample.png" alt=""/>
          <div className={styles.modalContent}>
            [song name]
          </div>
          <div className={styles.modalContent2}>
            by, [artist name]
          </div>
          <div className={styles.modalContent3}>
            [iTunes Link]
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                &lt;
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;