import React from 'react'
import ReactDOM from 'react-dom';
import '../../node_modules/uikit/dist/js/uikit-core';

const Modal = (props) => {

  return ReactDOM.createPortal(
    <React.Fragment>
    <a className="uk-button uk-button-default" href="#modal-center" data-uk-toggle>Open</a>
    <div id="modal-center" className="uk-flex-top" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
</React.Fragment>,
document.querySelector("#modalz")
  );
};

export default Modal;