import LoginPassCopy from "../../scripts/LoginPassCopy";

export default function PasswordBlock(props) {
  return (
    <div>
      <div className="login-and-pass">
        <div>
          <img
            width="30px"
            src="https://avatars.mds.yandex.net/i?id=d83e2997b81d39afde783ab328b6ea7f-5277835-images-thumbs&ref=rim&n=33&w=220&h=150"
            alt="..."
            onClick={() => {
              LoginPassCopy(
                props.keyId + props.login + props.password + "login"
              );
            }}
          />
          <input
            id={props.keyId + props.login + props.password + "login"}
            type="text"
            placeholder="login"
            defaultValue={props.login}
          />
        </div>
        <div>
          <img
            width="30px"
            src="https://avatars.mds.yandex.net/i?id=d83e2997b81d39afde783ab328b6ea7f-5277835-images-thumbs&ref=rim&n=33&w=220&h=150"
            alt="..."
            onClick={() => {
              LoginPassCopy(
                props.keyId + props.login + props.password + "password"
              );
            }}
          />
          <input
            id={props.keyId + props.login + props.password + "password"}
            type="password"
            placeholder="password"
            defaultValue={props.password}
          />
        </div>
      </div>
    </div>
  );
}
