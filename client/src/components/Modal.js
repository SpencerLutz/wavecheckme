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
    document.getElementById("name").innerHTML = data.results[0]["trackName"];
    document.getElementById("artist").innerHTML = "by "+data.results[0]["artistName"];
    document.getElementById("alb").src = data.results[0]["artworkUrl100"];
    document.getElementById("link").href = data.results[0]["trackViewUrl"];
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
          <img id="alb" className={styles.album} src="" alt=""/>
          <div id="name" className={styles.modalContent}>
            
          </div>
          <div id="artist" className={styles.modalContent2}>
            
          </div>
          <a id="link" className={styles.modalContent3} href="">
            Find on iTunes
          </a>
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