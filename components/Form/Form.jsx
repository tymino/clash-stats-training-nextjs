import s from './Form.module.sass';


export default function Form({
  value, handleChange, handleSubmit, handleHideAlert, error
}) {
  return (
    <div className={s.containerForm}>
      <form className={s.form}>
        <div className={s.formTitle}>Enter tag:</div>
        <div className={s.formInputWrapper}>
          <div className={s.formSimb}>#</div>
          <input
            className={s.formInput}
            type="text"
            onChange={handleChange}
            value={value}
            placeholder='PJP8LJUJP'
          />
        </div>
        
        <button
          className={s.formButton}
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <div
        className={error && s.errorMsg}
        onClick={handleHideAlert}
        title='Click me =)'
      >
        {error}
      </div>
    </div>
  )
}
