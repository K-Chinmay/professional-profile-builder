import React, { useRef, useState } from "react";
import axios from "axios";
import styles from "./FileUpload.module.css";
import { toast } from "react-hot-toast";
import { BiCloudUpload } from "react-icons/bi";
const FileUpload = () => {
  const [file, setFile] = useState(null);
  const fileInput = useRef();
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/upload", formData);
      console.log(response.data);
      // Add any success message or redirect to another page if needed
    } catch (error) {
      console.error(error);
      // Handle error response
    }
  };

  const handleUploadClick = () => {
    if (!fileInput.current) return;
    fileInput.current.click();
  };

  return (
    <div>
      
      <div className={styles.Admin}>
        <div className={styles.wrapper}>
          <header>Upload File</header>
          <form>
            <div className={styles.container} onClick={handleUploadClick}>
              <input
                ref={fileInput}
                className={styles.fileInput}
                type="file"
                name="file"
                onChange={handleFileChange}
                hidden
              />
              <BiCloudUpload />
              <div>Click to Upload Excel</div>
              {file ? <p className={styles.fileName}>{file.name}</p> : null}
            </div>
            <button onClick={handleSubmit}>Upload</button>
          </form>
          <section className={styles.progressArea}></section>
          <section className={styles.uploadedArea}></section>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
