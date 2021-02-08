import axios from "axios";
import { OldSocialLogin as SocialLogin } from "react-social-login";

const handleGoogleLogin = (user, err) => {
  axios
    .post(
      "http://localhost:3100/auth/login",
      {
        user: {
          profile_img: user._profile.profilePicURL,
          name: user._profile.name,
          email: user._profile.email,
          token: user._token.idToken,
          sns_type: "G",
        },
      },
      {
        withCredentials: true,
      }
    )
    .then((value) => {
      console.log(value);
    });
};

const handleTwitterLogin = (user, err) => {
  console.log(user);
  console.log(err);

  // axios
  //   .post(
  //     "http://localhost:3100/auth/login",
  //     {
  //       user: {
  //         profile_img: user._profile.profilePicURL,
  //         name: user._profile.name,
  //         email: user._profile.email,
  //         token: user._token.accessToken,
  //         sns_type: "G",
  //       },
  //     },
  //     {
  //       withCredentials: true,
  //     }
  //   )
  //   .then((value) => {
  //     console.log(value);
  //   });
};

const App = () => {
  return (
    <div className="App">
      <SocialLogin
        provider="google"
        appId="877368108051-njs176h3vplr4pe19opg32v0tb799gh3.apps.googleusercontent.com"
        callback={handleGoogleLogin}
      >
        <button>Login with Google</button>
      </SocialLogin>
      {/* <SocialLogin
        provider="twitter"
        appId=""
        callback={handleTwitterLogin}
      >
        <button>Login with Twitter</button>
      </SocialLogin> */}
    </div>
  );
};

export default App;