"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth");
  }, []);

  return null; // atau tampilkan loading spinner sementara
}
