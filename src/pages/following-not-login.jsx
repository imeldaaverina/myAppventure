import Head from 'next/head';
import NoAuthProvider from '../providers/auth/NoAuthProvider';
import { FollowingNotLoginLayout } from '../components/layout';

const FollowingNotLoginContainer = () => {
  return (
    <>
    <Head>
      <title>Following not login - My Appventure</title>
    </Head>
    <NoAuthProvider>
      <FollowingNotLoginLayout>
      </FollowingNotLoginLayout>
    </NoAuthProvider>
    </>
  );
};
export default FollowingNotLoginContainer;
