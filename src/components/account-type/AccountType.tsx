import { AccountType } from "../../model/Data";

export function DifferentAccountTypes(props: AccountType) {
  return (
    <>
      <label htmlFor="account">Account type:</label>

      <select name="account" id="account">
        <option value="">--Please choose an option--</option>
        <option value="personal">{props.personal}</option>
        <option value="pro">{props.pro}</option>
        <option value="business">{props.business}</option>
      </select>
    </>
  );
}
