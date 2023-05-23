import { PersonalData } from "../../model/Data";

export function PersonalData: PersonalData () {


  return (
    <form aria-label="form" onSubmit={}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input type="text" name="lastName" id="lastName" required />
      </div>
      <div>
        <label htmlFor="birthDate">BirthDate</label>
        <input type="text" name="birthDate" id="birthDate" required />
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <input type="text" name="gender" id="gender" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>

      <button type="submit">Añadir</button>
    </form>
  )
}
