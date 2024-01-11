"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../components/button/button";
import { Container } from "./not-found.style";

const Page404 = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <Container>
      <Image src={"/imgs/404.webp"} alt="no-result" width={512} height={512} />
      <Button
        caption={"Go Home"}
        height={60}
        style={{ maxWidth: 300, marginTop: 70 }}
        onClick={goHome}
      />
    </Container>
  );
};

export default Page404;
