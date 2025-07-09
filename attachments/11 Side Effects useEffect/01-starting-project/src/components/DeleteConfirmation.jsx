import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
 

  

  useEffect(() => {
    console.log("TIMER SET");

    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      // this is a clean up function
      console.log();

      clearTimeout(timer);
    };
  }, [onConfirm]); // there is a problem when adding functions as dependencies, there is a danger of creating an infinite loop

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER}/>
    </div>
  );
}
