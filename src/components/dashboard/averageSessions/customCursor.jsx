import { Rectangle } from 'recharts';

const CustomCursor = (prop) => {
    const { width, points } = prop;
    const X = points[0].x;
    const Y = points[0].y;
    const sum = width - X;
    return (
        <Rectangle
            width={sum}
            height={263}
            x={X}
            y={Y}
            style={{ background: 'red', opacity: 0.1 }}
        />
    );
};

/*CustomCursor.propTypes = {
  prop: PropTypes.shape({
    width: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired,
    ).isRequired,
  }),
};*/

export default CustomCursor;
