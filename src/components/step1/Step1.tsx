import { SyntheticEvent } from "react";

// import { PersonalData } from "../../model/Data";
type PropsType = {
  changeStep: (step: 1 | 2 | 3 | 4) => void;
  updateUser: (user: User) => void;
};

export function Step1({ changeStep }: PropsType) {
  const handleClick = (event: SyntheticEvent) => {
    const user = {};
    updateUser(user);
    changeStep(2);
  };
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
        <input type="date" name="birthDate" id="birthDate" required />
      </div>
      <label htmlFor="gender">Gender</label>
      <div>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Other</label>
      </div>
      <div>
        <input type="radio" id="refuse" name="gender" value="refuse" />
        <label htmlFor="refuse">Refuse to response</label>
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

      <button onClick={handleClick}>Next</button>
    </form>
  );
}
