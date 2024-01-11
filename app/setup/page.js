"use client";
import {Layout} from "@/ui/layout/Layout";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

const Setup = () => {
  const router = useRouter();
  useEffect(()=>{
    router.push("/setup/step-1");
  },[])

  return <></>;
};

export default Setup;
