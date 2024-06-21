const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h1>There are no Posts!</h1>
      <button
        className="btn btn-primary"
        type="button"
        onClick={onGetPostsClick}
      >
        Get Posts from Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
