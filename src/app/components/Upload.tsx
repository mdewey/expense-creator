import Papa from 'papaparse';
import { useDispatch } from 'react-redux'
import { addData, addHeaderOptions } from '../slices/data.slice'
import DataSelector from './DataSelector';

function Upload() {
  const dispatch = useDispatch()
  const changeHandler = (event: any) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: any) {
        dispatch(addData(results.data));
        dispatch(addHeaderOptions(results.meta.fields));
        // TODO: auto set headers to good guesses? 
      },
    });
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
        <DataSelector />
      </div>
    </>
  );
}

export default Upload;