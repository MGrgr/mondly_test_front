import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from "react";

const DefaultLayout = (props) => {

  const router = useRouter();
  const handleLanguageChange = (event) => {
    router.push(router.route, null ,{
      locale: event.currentTarget.value
    })
  }

  useEffect(() => {
    console.log('language changed')
  }, [router.locale])
  return (
  <>
    <Head>
      <title>Default</title>
      <meta charSet="utf-8" />
    </Head>
    <div>
      <div className="topnav" id="myTopnav">
        <Link href="/" tag="a">
          Home
        </Link>
        <Link href="/page-one" tag="a">
          Page one
        </Link>
        <Link href="/page-two" tag="a">
          Page two
        </Link>
        <Link href="/admin" tag="a">
          Admin Panel
        </Link>
        <select className="changeLanguage" value={router.locale} onChange={handleLanguageChange}>
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ro">RO</option>
        </select>
      </div>
      <div>{props.children}</div>
    </div>
  </>
)};

export default DefaultLayout;
