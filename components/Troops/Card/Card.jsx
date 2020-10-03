import s from './Card.module.sass';


export default function Card({ title, data }) {
  return (
    <div className={s.sectionContainer}>
      <h2 className={s.sectionTitle}>{title}</h2>
      <div className={s.cardsContainer}>
      {data.map((e, index) => {
        return (
          <div
            key={`${index}_${e.name}`}
            className={s.cardWrapper}
          >
            <img
              className={s.cardImage}
              src={`/images/troops/${e.name}.png`}
              alt={e.name}
            />
            <div className={s.cardLevel}>{e.level}</div>
          </div>
        )
          })}
      </div>
    </div>
  )
}