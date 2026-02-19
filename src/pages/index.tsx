import { SignInButton } from "@clerk/clerk-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1>Sign In</h1>
      <SignInButton />
    </>
  );
};

export default Home;
