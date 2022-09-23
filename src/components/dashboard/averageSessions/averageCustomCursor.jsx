import { Rectangle } from 'recharts';

/**
 * Component for showing a custom cursor for chart
 * @component
 *
 * @param {Object} prop The props of the cursor
 *
 * @returns {JSX.Element} Custom cursor for chart.
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
