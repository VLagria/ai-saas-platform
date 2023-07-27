import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return ( 
        <div>
            This is a landing page (Unprotected)
            <div>
                <Link href="/sign-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
     );
}
 
export default LandingPage;