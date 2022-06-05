import React, { Fragment } from "react";
import loading from '../../assets/spinner-loading.gif'
import "./style.css";
function Loader({
  fixed,
  overlay,
  children,
  isActive,
  hide
}) {
  return (
    <Fragment>
      {isActive && (
        <React.Fragment>


          <div className={`${hide}`}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              zIndex: 9999999999,
            }}
          >
            <div
              style={{
                backgroundImage: `url(${loading})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
                backgroundSize: 'contain',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                width: '20vw',
                height: '20vh',
                zIndex: 99999999999,
              }}
            />
          </div>
          <React.Fragment>
            {children}
          </React.Fragment>
        </React.Fragment>
      )}
      {!isActive && children}
    </Fragment>
  );
}

export default Loader;
