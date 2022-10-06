import PropTypes from "prop-types";
Loading.propTypes = {
  message: PropTypes.string,
  showBackground: PropTypes.bool,
};
Loading.defaultProps = {
  message: "Loading...",
  showBackground: true,
};
/**
 * @typedef Prop
 * @property {string} message
 * @property {boolean} showBackground
 * @param {Prop} props
 */
function Loading(props) {
  const { message, showBackground } = props;
  return (
    <div className="shadow-none">
      <span className="text-primary">{message}</span>
      <span className="sn"></span>
    </div>
  );
}
export default Loading;
