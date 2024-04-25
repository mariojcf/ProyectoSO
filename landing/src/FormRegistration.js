import './FormRegistration.css'

const FormRegistration = () => {
  return (
    <form>
      <div>
        <label>Nombre: </label>
        <input type="text" />
      </div>
      <div>
        <label>Edad: </label>
        <input type="text" />
      </div>
      <div>
        <label>¿Asistirá? </label>
        <select>
          <option>Si</option>
          <option>No</option>
        </select>
      </div>
      <div>
        <button>Registrar</button>
      </div>
    </form>
  );
}

export default FormRegistration;