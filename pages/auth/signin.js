/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-32 object-cover"
                src="https://i0.wp.com/socodigital.com/wp-content/uploads/2021/03/Instagram.png?fit=3500%2C3393&ssl=1"
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
