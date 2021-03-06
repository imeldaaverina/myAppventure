import Footer from "./elements/Footer";
import Jumbotron from "./elements/Jumbotron";
import NavbarFollowing from "./elements/NavbarFollowing";
import Posts from '../../containers/home/elements/Posts';
import HomeProvider from '../../containers/home/HomeProvider';
import Navbarlogin from "./elements/Navbarlogin";
import Image from 'next/image'
import Link from 'next/link'

const FollowingLayout = () => {

  return (
    <>
      <Navbarlogin />
        <Jumbotron />
        <main className="min-h-screen max-w-md mx-auto">
          <NavbarFollowing/>
          <div className="flex justify-end sticky top-24 right-10 mr-10 mt-10">
                <Link href="/upload" className="" passHref>
                <a>
                  <Image src="/postIcon.svg" className="w-16" width={65} height={65} alt=""/>
                </a>
                </Link>
              </div>
          {/* <HomeProvider>
            <Posts />
          </HomeProvider> */}
        </main>
      <Footer />
    </>
  );

};

export default FollowingLayout;