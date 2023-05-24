import { DifferentAccountTypes } from "../account-type/AccountType";

export function AccessData() {
  return (
    <form aria-label="form">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <label htmlFor="password">Repeat your Password Please</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div>
        <DifferentAccountTypes />
      </div>
      <button type="submit">Next</button>
    </form>
  );
}
