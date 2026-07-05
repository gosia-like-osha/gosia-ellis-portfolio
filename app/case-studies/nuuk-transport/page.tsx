import { redirect } from "next/navigation";

/** Legacy route — Usisaat hidden; send to case studies overview */
export default function NuukTransportRedirectPage() {
  redirect("/case-studies");
}
