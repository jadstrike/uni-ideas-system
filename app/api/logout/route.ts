import { NextResponse } from "next/server";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export async function GET() {
  const router = useRouter();
  try {
    const response = NextResponse.json({
      message: "Successfully logged out",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    router.push("/");
    toast("Successfully logged out");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
