import PropTypes, { shape } from "prop-types";
import s from "./statistics.module.css";
export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((item) => (
          <li key={item.id} className={s.item}>
            <span className="label">{item.label}</span>
            <span className="percentage">&nbsp;{item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.number,
  stats: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
