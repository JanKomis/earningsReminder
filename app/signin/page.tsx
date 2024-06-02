import { auth, signIn } from "@/auth";
import { providerMap } from "@/auth.config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SignInPage() {
  return (
    <Card className="w-96 m-auto">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        {Object.values(providerMap).map((provider, index) => (
          <form
            key={index}
            action={async () => {
              "use server";
              await signIn(provider.id);
            }}
          >
            <Button type="submit" className="w-full" variant="secondary">
              <span>Sign in with {provider.name}</span>
            </Button>
          </form>
        ))}
      </CardContent>
    </Card>
  );
}
