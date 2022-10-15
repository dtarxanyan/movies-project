import React from "react";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="New password" />

        <form action="/action_page.php">
          <label for="birthday" />
          <input type="date" id="birthday" name="birthday" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
