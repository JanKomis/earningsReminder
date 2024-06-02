import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-96 mx-auto">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Button variant="link">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
