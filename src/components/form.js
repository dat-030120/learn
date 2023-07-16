import react from "react";
import "./form.css";
export default function Form() {
  return (
    <div className="form-service">
      <form action method>
        <input type="text" name="name" placeholder="Full name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="tel" placeholder="Phone Number" />
        <textarea
          type="text"
          name="postContent"
          rows={5}
          cols={30}
          placeholder="Message"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
