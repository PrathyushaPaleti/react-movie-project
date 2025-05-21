import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import './dialog.css';

const Dialog = ({ title, children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="dialog-overlay">
      <FocusTrap>
        <div className="dialog">
          {/* Dialog Header */}
          <div className="dialog__header">
            <h2 className="dialog__title">{title}</h2>
            <button className="dialog__close" onClick={onClose}>
              &times;
            </button>
          </div>

          {/* Dialog Body */}
          <div className="dialog__body">{children}</div>
        </div>
      </FocusTrap>
    </div>,
    document.body // Renders the dialog in the body using a portal
  );
};

export default Dialog;