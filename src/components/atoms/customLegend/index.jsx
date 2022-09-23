import './index.css';
import PropTypes from 'prop-types';

/**
 * Component for showing a custom legend list
 * @component
 *
 * @param {Array} data A array of item to create li elements
 *
 * @returns {JSX.Element} CustomLegend for chart.
 */
const CustomLegendChart = ({ data }) => {
    return (
        <ul className="custom-legend">
            {data.map((item) =>
                item === 'day' ? null : (
                    <li key={item} className={`${item}-li circle`}>
                        {item === 'kilogram'
                            ? 'Poids (en kg)'
                            : 'Calories brûlées (kCal)'}
                    </li>
                )
            )}
        </ul>
    );
};

CustomLegendChart.propTypes = {
    /**
     * CustomLegendChart's children
     */
    data: PropTypes.array.isRequired
};

export default CustomLegendChart;
