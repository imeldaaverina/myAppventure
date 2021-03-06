import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

const UploadLayout = ({children}) => {

  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen max-w-md mx-auto py-20">
        {children}
      </main>
      <Footer />
    </>
  );

};

export default UploadLayout;