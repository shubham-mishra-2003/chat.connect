"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "./ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import Image from "next/image";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import toast from "react-hot-toast";

const Home = () => {
  const [showRegister, setShowRegister] = useState("login");

  const {
    signIn,
    isLoaded: isSignInLoaded,
    setActive: setActiveSessionLogin
  } = useSignIn();
  const {
    signUp,
    isLoaded: isSignUpLoaded,
    setActive: setActiveSessionRegister
  } = useSignUp();

  const [loginForm, setLoginForm] = useState({
    email: ""
  });

  const [loginVerification, setLoginVerification] = useState({
    state: "",
    error: "",
    code: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const useAuthHandlers = () => {
    const handlesignInPress = async () => {
      if (!isSignInLoaded) return;

      if (!loginForm.email) {
        toast.error("Please enter a valid email.");
        return;
      }
      setIsLoading(true);
      try {
        const signInAttempt = await signIn.create({
          identifier: loginForm.email,          
          strategy: "email_code"
        });

        if (signInAttempt.status === "needs_first_factor") {
          setLoginVerification({ state: "pending", error: "", code: "" });
          toast.success("OTP sent to your email!");
        } else {
          throw new Error("Unexpected sign-in status.");
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred";
        setLoginVerification((prev) => ({
          ...prev,
          state: "failed",
          error: errorMessage
        }));
        toast.error(`Error: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    };

    const handleSignUpPress = async () => {
      if (!isSignUpLoaded) return;
      try {
        await signUp.create({
          emailAddress: registerForm.email,
          firstName: registerForm.firstName,
          lastName: registerForm.lastName,
          username: registerForm.username
        });
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code"
        });
        setRegisterVerification((prev) => ({
          ...prev,
          state: "pending"
        }));
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred";
        toast.error(errorMessage);
      }
    };

    return { handlesignInPress, handleSignUpPress };
  };
  const handleOtpLoginVerification = async () => {
    if (!isSignInLoaded) return;

    if (!loginVerification.code) {
      toast.error("Please enter the OTP.");
      return;
    }

    setIsLoading(true);
    try {
      const completesignIn = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code: loginVerification.code
      });

      if (completesignIn.status === "complete") {
        await setActiveSessionLogin({
          session: completesignIn.createdSessionId
        });
        setLoginVerification({ state: "success", error: "", code: "" });
        toast.success("Login successful!");
      } else {
        throw new Error("Verification failed. Please try again.");
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setLoginVerification((prev) => ({
        ...prev,
        state: "failed",
        error: errorMessage
      }));
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  const [registerForm, setRegistrationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: ""
  });

  const [registerVerification, setRegisterVerification] = useState({
    state: "",
    error: "",
    code: ""
  });

  const handleOtpRegistrationVerification = async () => {
    if (!isSignUpLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: registerVerification.code
      });

      if (completeSignUp.status === "complete") {
        await setActiveSessionRegister({
          session: completeSignUp.createdSessionId
        });
        setRegisterVerification((prev) => ({
          ...prev,
          state: "success",
          error: ""
        }));
        toast.success("Sign-up successful!");
      } else {
        setRegisterVerification((prev) => ({
          ...prev,
          state: "failed",
          error: "Verification failed"
        }));
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setRegisterVerification((prev) => ({
        ...prev,
        state: "failed",
        error: errorMessage
      }));
      toast.error(errorMessage);
    }
  };

  const { handlesignInPress, handleSignUpPress } = useAuthHandlers();

  return (
    <div className="flex overflow-hidden size-full justify-center items-center p-4">
      <div className="flex flex-col w-full h-full justify-center items-center p-5 gap-4 text-white">
        <Image src="/icons/Logo.png" alt="Logo" width={150} height={150} />
        <h1 className="dark:text-slate-300 text-slate-700 font-bold text-2xl">
          Chat.Connect | Shubham mishra
        </h1>
        <h3 className="dark:text-slate-300 text-slate-400 font-bold text-xl">
          Secured with peer to peer encryption
        </h3>
      </div>
      <div className="h-full w-1 bg-slate-500"></div>
      <div className="flex size-full overflow-y-auto flex-col justify-center p-5 gap-5">
        <h1 className="text-6xl font-extrabold text-slate-800 dark:text-slate-100 w-fit">
          {showRegister == "login" ? "Login" : "Register"}
          <span className="text-2xl ml-2 text-slate-600 dark:text-slate-400 w-fit">
            to continue
          </span>
        </h1>
        <div className="flex flex-col gap-3 justify-center items-center">
          {showRegister == "register" && (
            <>
              <div className="w-full flex gap-3 justify-center items-center">
                <input
                  type="text"
                  className="auth-input"
                  autoFocus={true}
                  placeholder="Enter your first name"
                  value={registerForm.firstName}
                  onChange={(e) =>
                    setRegistrationForm((prev) => ({
                      ...prev,
                      firstName: e.target.value
                    }))
                  }
                />
                <input
                  type="text"
                  className="auth-input"
                  autoFocus={true}
                  placeholder="Enter your last name"
                  value={registerForm.lastName}
                  onChange={(e) =>
                    setRegistrationForm((prev) => ({
                      ...prev,
                      lastName: e.target.value
                    }))
                  }
                />
              </div>
              <input
                type="text"
                className="auth-input"
                autoFocus={true}
                placeholder="Enter username"
                value={registerForm.username}
                onChange={(e) =>
                  setRegistrationForm((prev) => ({
                    ...prev,
                    username: e.target.value
                  }))
                }
              />
            </>
          )}
          <input
            type="email"
            className="auth-input"
            placeholder="Enter your Email"
            autoFocus={true}
            value={
              showRegister == "login" ? loginForm.email : registerForm.email
            }
            onChange={(e) => {
              if (showRegister === "login") {
                setLoginForm((prev) => ({
                  ...prev,
                  email: e.target.value
                }));
              } else {
                setRegistrationForm((prev) => ({
                  ...prev,
                  email: e.target.value
                }));
              }
            }}
          />
          <button
            onClick={
              showRegister === "login" ? handlesignInPress : handleSignUpPress
            }
            disabled={isLoading}
            className={`w-full p-2 text-slate-600 font-bold text-xl dark:text-slate-700 rounded-lg shadow-md shadow-slate-500 dark:shadow-slate-400 ${
              isLoading
                ? "bg-slate-400 text-white"
                : "bg-green-400 hover:bg-green-500"
            }`}
          >
            {isLoading
              ? "Processing..."
              : showRegister === "login"
              ? "Login"
              : "Register"}
          </button>
          <h2 className="text-xl text-slate-500 dark:text-slate-400">
            {showRegister == "login"
              ? "Don't have an account ?"
              : "Already have an account ?"}
            <span
              className="dark:text-red-400 text-red-600 ml-1 cursor-pointer"
              onClick={() =>
                showRegister == "login"
                  ? setShowRegister("register")
                  : setShowRegister("login")
              }
            >
              {showRegister == "login" ? "Register" : "Login"}
            </span>
          </h2>
        </div>
        <div>
          {(loginVerification.state === "pending" ||
            registerVerification.state === "pending") && (
            <Dialog defaultOpen>
              <DialogContent className="border-none dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-50 p-5">
                <DialogTitle className="text-3xl">
                  Email verification
                </DialogTitle>
                <DialogDescription className="text-xl dark:text-slate-400 text-slate-500">
                  <div>
                    Type OTP to verify
                    <InputOTP
                      autoFocus={true}
                      maxLength={6}
                      value={
                        showRegister == "login"
                          ? loginVerification.code
                          : registerVerification.code
                      }
                      onChange={(value: string) => {
                        if (showRegister == "login") {
                          setLoginVerification((prev) => ({
                            ...prev,
                            code: value
                          }));
                        } else if (showRegister == "register") {
                          setRegisterVerification((prev) => ({
                            ...prev,
                            code: value
                          }));
                        }
                      }}
                      className="w-full"
                    >
                      <InputOTPGroup className="w-full p-8">
                        <InputOTPSlot
                          className="w-full h-14 text-3xl"
                          index={0}
                        />
                        <InputOTPSlot
                          className="w-full h-14 text-3xl"
                          index={1}
                        />
                        <InputOTPSlot
                          className="w-full h-14 text-3xl"
                          index={2}
                        />
                        <InputOTPSlot
                          className="w-full h-14 text-3xl"
                          index={3}
                        />
                        <InputOTPSlot
                          className="w-full h-14 text-3xl"
                          index={4}
                        />
                        <InputOTPSlot
                          className="w-full h-14 text-3xl"
                          index={5}
                        />
                      </InputOTPGroup>
                    </InputOTP>
                    <button
                      onClick={
                        showRegister == "login"
                          ? handleOtpLoginVerification
                          : handleOtpRegistrationVerification
                      }
                      className="whitespace-nowrap w-full p-2 rounded-[10px] border-[2px] dark:bg-slate-700 bg-slate-300 border-green-600 dark:border-green-400"
                      disabled={isLoading}
                    >
                      {isLoading ? "Verifying..." : "Verify OTP"}
                    </button>
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
