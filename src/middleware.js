import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {

    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === "production" ? true : false,
    })


    if (token) {

        return NextResponse.next()
    } else {
        return NextResponse.rewrite(new URL('/signin', req.url))
    }

}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/contact',
    ],
}



// Programming-Hero Instructors
// 10:22 PM
// async function onSubmit(data: z.infer<typeof formSchema>) {
//     let redirectPathname = "/";
//     if (typeof window !== "undefined") {
//       redirectPathname = localStorage.getItem("redirectUrl") || "/";
//       localStorage.removeItem("redirectUrl");
//     }
//     setIsLoading(true);
//     const res = await signIn("credentials", {
//       email: data.email,
//       password: data.password,
//       redirect: false,
//       callbackUrl: "/",
//     });
//     setIsLoading(false);
//     if (res?.error) {
//       const error
// = JSON.parse(res.error);
//       // console.log(error, error.statusCode);
//       if (error.statusCode === 403) {
//         setStep("verify-otp");
//         setRegisteredData({ email: data.email, password: data.password });
//         form.reset();
//       }
//       return toast({
//         title: error?.message || "Invalid Credentials!",
//         variant: "destructive",
//       });
//     } else if (res?.status === 200) {
//       return router.replace(redirectPathname);
//     }
//   }