import Papa from 'papaparse';
import { useDispatch } from 'react-redux'
import { addData, addFile, clearData, addHeaderOptions } from '../slices/data.slice'
import DataSelector from './DataSelector';
import FileList from './FileList';

function Upload() {
  const dispatch = useDispatch()
  const changeHandler = (event: any) => {
    const file = event.target.files[0];
    if (!file) return;
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
        dispatch(addData(results.data));
        dispatch(addHeaderOptions(results.meta.fields));
        dispatch(addFile({
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          rowCount: results.data.length
        } as any));
        // TODO: auto set headers to good guesses?
      },
    });
    // allow re-uploading the same file
    event.target.value = '';
  };
  return (
    <>
      <div className="file-uploader">
        {/* File Uploader */}
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
        />
      </div>
      <div>
        <FileList />
      </div>
      <div>
        <DataSelector />
      </div>
      <div>
        <button onClick={() => dispatch(clearData())}>Clear All</button>
      </div>
    </>
  );
}

export default Upload;