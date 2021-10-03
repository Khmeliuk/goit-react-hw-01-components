import PropTypes from "prop-types";
import s from "./statistics.module.css";
export default function Statistics(prop) {
  const title = prop.title;
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{prop.title}</h2>}

      <ul className={s.statList}>
        {prop.stats.map((item) => (
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
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
