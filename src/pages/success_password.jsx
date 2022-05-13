import { CheckCircleIcon } from '@heroicons/react/outline';
import { NoAuthProvider } from "../providers/auth"; 
import { ButtonExit } from "../components/button";  

const RegistrationPage = () => {
    return (
      <>
        <NoAuthProvider>  
            <main className="w-full h-screen flex text-[#008C96] space-y-3 justify-center items-center bg-cover bg-center bg-[url('/blur_bg.png')]"> 
                
                <div className="shadow-md rounded-xl max-w-md bg-white flex flex-col font-Poppins text-3xl">
                <div className="flex justify-end"> 
                        <a href="#">
                            <ButtonExit />
                        </a>
                </div>
                <div className='p-7 h-72 flex flex-col justify-center items-center'>
                    <CheckCircleIcon className="w-20 h-20 mt-2 bg-white" />
                    <p className='mt-12 pb-3 max-w-md font-semibold text-center'>Selamat! Kata sandi Anda berhasil dirubah </p>
                </div>
                </div>
            </main> 
        </NoAuthProvider>  
      </>
    );
  };
  export default RegistrationPage;