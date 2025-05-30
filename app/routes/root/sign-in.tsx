import pkg from "@syncfusion/ej2-react-buttons";
import { Link, redirect } from "react-router";
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";
const { ButtonComponent } = pkg;
// export async function clientLoader() {
//   try {
//     const user = await account.get();
//     if (!user.$id) return redirect("/");
//   } catch (err) {
//     console.log("Error fetching users", err);
//   }
// }
const SignIn = () => {
  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              {" "}
              <img
                src="/assets/icons/logo.svg"
                alt="Logo"
                className="size-[30px]"
              />
            </Link>
            <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
          </header>
          <article>
            <h2 className="p-28-semibold text-dark-100 text-center">
              Start your travel journey
            </h2>
            <p className="p-18-regular text-center text-gray-100 !leading-7">
              Sign in Google to manage destination,itineraries and user
              activities with ease
            </p>
          </article>
          <ButtonComponent
            type="button"
            onClick={loginWithGoogle}
            iconCss="e-search-icon"
            className="button-class !h-11 !w-full"
          >
            <img src="/assets/icons/google.svg" alt="" className="size-5" />
            <span className="p-18-semibold text-white">
              Sign in with Google
            </span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default SignIn;
