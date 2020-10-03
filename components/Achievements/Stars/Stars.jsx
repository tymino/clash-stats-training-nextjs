import s from './Stars.module.sass';

export default function Stars({ stars }) {
  let arr = [];
  let count = stars;

  for(let i = 0; i < 3; i++) {
    if (count > 0) {
      arr.push('star');
      count--;
    } else {
      arr.push('star_border');
    }
  }

  return (
    <div className={s.rating}>
      {arr.map((el, index) => (
        <img
          key={`${index}-${el}`}
          className={s.starImg}
          src={`/images/stars/${el}.svg`}
          alt={`${el}`}
        />
      ))}
    </div>
  )
}