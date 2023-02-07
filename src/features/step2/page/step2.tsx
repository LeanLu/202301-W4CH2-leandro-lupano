import { Button } from "../../../core/components/button/button";
import "./step2.scss";

export default function Step2() {
  return (
    <>
      <form className="step2">
        <label>
          User Name
          <input type="text" />
        </label>

        <label>
          Password
          <input type="password" />
        </label>

        <label>
          Repeat Password
          <input type="password" />
        </label>

        <label>
          Account type
          <select name="account" id="account-type">
            <option value="">--Please choose an option--</option>
            <option value="personal">personal</option>
            <option value="pro">pro</option>
            <option value="business">business</option>
          </select>
        </label>
      </form>
    </>
  );
}
