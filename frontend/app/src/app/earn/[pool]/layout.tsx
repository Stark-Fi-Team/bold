import { EarnPoolScreen } from "@/src/screens/EarnPoolScreen/EarnPoolScreen";
import { SboldPoolScreen } from "@/src/screens/EarnPoolScreen/SboldPoolScreen";

export function generateStaticParams() {
  return [
    { pool: "tcent" },
    { pool: "weth" },
    { pool: "wcent" },
    { pool: "sbold" },
  ];
}

export default async function Layout({
  params,
}: {  
  params: Promise<{
    pool: "tcent" | "weth" | "wcent" | "sbold";
  }>;
}) {  
  const { pool } = await params;
  return pool === "sbold"
    ? <SboldPoolScreen />
    : <EarnPoolScreen />;
}
