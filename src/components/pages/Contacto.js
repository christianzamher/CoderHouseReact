import React from 'react'

const Contacto = () => {
  return (
    <div className="form">
      <div className="title">Bienvenido</div>
      <div className="subtitle">Tu mensaje nos importa!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <p className="placeholder">
          Nombre
        </p>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">
          Last name
        </label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label htmlFor="email" className="placeholder">
          Email
        </label>
      </div>
      <button type="text" className="submit">
        submit
      </button>
    </div>
  )
}

export default Contacto