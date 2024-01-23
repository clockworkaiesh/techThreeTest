/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
const PrimaryButton = ({ buttonText, onClick, isDisabled, classname }) => {
  return (
    <button
      className={`primary-btn ${classname}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
      {!isDisabled && <div className="transition"></div>}
    </button>
  );
};
const SecondaryButton = ({ buttonText, onClick }) => {
  return (
    <button className="secondary-btn" onClick={onClick}>
      {buttonText}
    </button>
  );
}


export { PrimaryButton, SecondaryButton };

