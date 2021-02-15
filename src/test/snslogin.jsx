import axios from "axios";
import { OldSocialLogin as SocialLogin } from "react-social-login";
import TwitterLogin from "react-twitter-login";

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

const handleTwitterLogin = (err, data) => {
  console.log(err);
  console.log(data);

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
      <TwitterLogin
        authCallback={handleTwitterLogin}
        consumerKey="u8y7oyXuB8jhfU0zZcXAec11o"
        consumerSecret="vLo1lmSeoCvfG2uiamqRP7Jbe0KjgNLY4Pr9v4xbt8BZIY54LL"
      >
        <button>Login with Twitter</button>
      </TwitterLogin>
    </div>
  );
};

export default App;
