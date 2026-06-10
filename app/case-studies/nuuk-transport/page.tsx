import { redirect } from "next/navigation";

/** Legacy route — renamed to Usisaat */
export default function NuukTransportRedirectPage() {
  redirect("/case-studies/usisaat");
}
