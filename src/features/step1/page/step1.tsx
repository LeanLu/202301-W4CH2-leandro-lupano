import { Button } from "../../../core/components/button/button";
import "./step1.scss";

export default function Step1() {
  return (
    <form className="step1">
      <label>
        Name
        <input type="text" />
      </label>

      <label>
        Last name
        <input type="text" />
      </label>

      <label>
        BirthDate
        <input type="text" />
      </label>

      <fieldset>
        <legend>Gender</legend>
        <label>
          {" "}
          Male <input type="radio" name="gender" value="male" />
        </label>
        <label>
          {" "}
          Female <input type="radio" name="gender" value="female" />
        </label>
      </fieldset>

      <label>
        Email
        <input type="text" />
      </label>

      <label>
        ¿Desea recibir información de nuestra newsletter?
        <input type="checkbox" />
      </label>
      <Button></Button>
    </form>
  );
}
