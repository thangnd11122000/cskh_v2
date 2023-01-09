import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, []);
  return <>abc</>;
}
