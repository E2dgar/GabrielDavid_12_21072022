import { Rectangle } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Component for showing a customCursor Rect
 */
const AverageCustomCursor = (prop) => {
    const x = prop.points[0].x;
    const y = prop.points[0].y;
    const calcWidth = prop.width - x;

    return (
        <Rectangle
            width={calcWidth}
            height={263}
            x={x}
            y={y}
            style={{ background: 'var(--color-black)', opacity: 0.1 }}
        />
    );
};

export default AverageCustomCursor;
