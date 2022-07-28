import React from "react";

const Module = () => {
  return (
    
      <div className="modal" tabIndex="-1"  id="deneme">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ">Attention</h5>
              <button
                type="button"
                className="btn-close btn-warning"
                data-bs-dismiss="modal"
                aria-label="Close"
                
              ></button>
            </div>
            <div className="modal-body">
              <p >
                Please fill releated information to login.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Module;
