// import { PersonalData } from "../../model/Data";

export function PersonalInfo() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // const form = event.target as HTMLFormElement;
  // const task = new Task(
  //   (form.elements.namedItem("title") as HTMLInputElement).value,
  //   (form.elements.namedItem("owner") as HTMLInputElement).value
  // );
  // console.log(task);

  return (
    <form aria-label="form">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
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
      <fieldset>
        <legend>Do you want to receive info from our newsletter?</legend>

        <div>
          <input type="radio" id="yes" name="drone" value="yes" checked></input>
          <label htmlFor="yes">Yes</label>
        </div>
      </fieldset>

      <button type="submit">Añadir</button>
    </form>
  );
}
