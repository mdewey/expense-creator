import React from 'react';
import { useSelector } from 'react-redux';

function FileList() {
  const { files } = useSelector((state: any) => state.data);

  if (!files || files.length === 0) {
    return <div className="file-list">No CSV files uploaded yet</div>;
  }

  return (
    <div className="file-list">
      <h3>Uploaded CSV files ({files.length})</h3>
      <ul>
        {files.map((file: any) => (
          <li key={file.id}>
            {file.name} — {file.rowCount} rows
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
