"use client";
import SelectForm from "@/components/SelectForm";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [telNo, setTelno] = useState("");
  const [country, setCountry] = useState("");
  const [sex, setSex] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  async function handleSignUp() {
    try {
      if (
        !email ||
        !password ||
        !hotelId ||
        !name ||
        !telNo ||
        !country ||
        !sex
      ) {
        return toast.error("Please fill required fields!");
      }
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          telNo: telNo,
          name: name,
          sex: sex,
          country: country,
          hotelId: hotelId,
        }),
      });
      if (res.ok) {
        router.push("/auth/signin");
      }
      return toast.error(
        "An Error happened while signing in!. Please try again.",
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 h-screen">
        <section className="sm:none md:col-span-1 h-full flex flex-col items-center justify-center bg-teal-600 text-teal-50">
          <div className="font-semibold">EasyHotel</div>
        </section>
        <section className="md:col-span-3 sm:col-span-1 h-full flex flex-col items-center justify-center relative">
          <div className="absolute top-12 right-12">
            <Link
              href={"/auth/signin"}
              className="underline underline-offset-2"
            >
              Already have an account? Sign in.
            </Link>
          </div>
          <div className="w-1/2 flex flex-col gap-3 text-center">
            <h1 className="mb-4 font-semibold uppercase text-xl">
              Welcome to EasyHotel
            </h1>
            <section className="flex items-center justify-between gap-2">
              <Input
                label="Name"
                className="text-left"
                isRequired
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="HotelID"
                isRequired
                className="text-left"
                onChange={(e) => setHotelId(e.target.value)}
              />
            </section>
            <section className="flex items-center justify-between gap-2">
              <Input
                label="Tel No"
                className="text-left"
                isRequired
                onChange={(e) => setTelno(e.target.value)}
              />
              <Input
                label="Country"
                className="text-left"
                isRequired
                onChange={(e) => setCountry(e.target.value)}
              />
            </section>
            <SelectForm
              label="Sex"
              options={sexes}
              isRequired
              onChange={(e) => setSex(e.target.value)}
            />
            <Input
              label="Email"
              className="text-left"
              isRequired
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              isRequired
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="text-left"
            />
            <div className="flex items-center justify-between">
              <Checkbox color="success" className="my-2">
                Show Password
              </Checkbox>
            </div>
            <Button
              className="w-full bg-teal-600 text-teal-50 font-semibold"
              isLoading={isLoading}
              onClick={handleSignUp}
            >
              {isLoading ? "Please Wait" : "Signup"}
            </Button>
          </div>
        </section>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

const sexes = [
  {
    label: "Male",
    value: "MALE",
  },
  {
    label: "Female",
    value: "FEMALE",
  },
];

export default SignUp;
