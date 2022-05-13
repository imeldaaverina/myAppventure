import AuthProvider from "../../providers/auth/AuthProvider"; 
import MyProfileLayout from "../../components/layout/MyProfileLayout"; 
import { Icon } from '@iconify/react';
import { ButtonMyProfile, ButtonMyProfileSandi, Button } from "../../components/button";
import { useAccountDispatcher } from '../../redux/reducers/account';  
import { Profiler, useState } from 'react';
import { useFormik, getIn } from "formik";  
import { CameraIcon } from '@heroicons/react/outline';
import { useRouter }  from "next/router";
import useAccount from "./hooks/useAccount"
import { data } from "autoprefixer";

const initialValues = { 
  files: null,  
};  

const AccountContainer = () => {
  const { profile } = useAccount();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('data');
    localStorage.removeItem('username');
    localStorage.removeItem('foto');
    window.location.reload();
  }

  const {push} = useRouter();
      const { account: { loading }, doAccount } = useAccountDispatcher(); 


  const onSubmit = async (values) => {
    try {  
      const payload = {  
          // username: values.username,
          // email: values.email,  
          // password: values.password,  
          filename: values.fileName,
      };  
      await doAccount(payload);  
      push('/success_registration');
      // window.location.href = "/";  
  } catch (error) {  
      alert(error);  
  }  
  setLoading(true);
        const formData = new FormData();
      formData.append('files', formValues.files);
      const upload = await callAPI({
        url: '/v1/upload',
        method: 'post',
        data: formData,
        headers: {
          Authorization: `Bearer ${getJwt()}`,
        
        },
      });
    
      const fileUrl = upload.data[0].url;
      
      const payload = {
        data: {
          photo: `${fileUrl}`,
          isPublish: true,
          postedBy: `${getUser().username}`,
        },
      };
      const submitAccount = await callAPI({
        url: '/user/daftar',
        method: 'post',
        data: payload,
        headers: {
          Authorization: `Bearer ${getJwt()}`,
        },
      });
      if (submitAccount.status === 200) {
        setLoading(false);
        alert('Create posts success!');
        push('/success_registration');
      }

  }

  const {  
            handleChange,  
            handleBlur,  
            handleSubmit,  
            errors,  
            touched,  
            setFieldValue,
        } = useFormik({  
            initialValues,  
            // validationSchema,  
            onSubmit  
        });  

  const [preview, setPreview] = useState();
      const handleChangeFile = (e) => {
        const files = e.target.files;
        if (files) {
          setPreview(URL.createObjectURL(files[0]));
          setFieldValue('files', files[0]);
        }
      };


  return (
    <AuthProvider> 
      <MyProfileLayout>
        <section> 
          <div className="font-Poppins min-h bg-cover bg-[url('../../public/homepage-bg.jpg')] w-full mx-auto">
            <div className="max-w-md mx-auto h-full pt-40 px-2">
              <div className="text-white">
                <a href="./home">
                  <Icon icon="eva:arrow-circle-left-outline" width="40"/>     
                </a>         
              </div>
              <div className="">
                <label
                  htmlFor="files"
                  className="w-40 h-40 m-auto flex justify-center items-center rounded-full cursor-pointer bg-white">
                  {preview ? <img className="h-full w-full object-cover rounded-full bg-white" src={preview} /> : <CameraIcon className="h-12 w-12 text-gray-600" />}
                  <input id="files" type="file" name="files" className="hidden" accept=".jpg, .png, .jpeg" onChange={handleChangeFile} dataTestId="input-files"   />
                </label>
              </div>
              <div className="text-white pt-8 font-medium text-2xl flex justify-center">
                {profile}
              </div>
              <div className="flex justify-center text-white py-4">
                <div className="px-2">
                  <a href="./following-list">
                  800 Mengikuti
                  </a>
                </div>
                <div className="px-2">
                  <a href="./follower-list">
                  1.000 Pengikut 
                  </a>
                </div>
              </div>
            </div>
          </div>
              
          <div className="py-10 min-h-screen max-w-md mx-auto">
            <div className="pt-4">
              <ButtonMyProfile type="" label="Profil Saya" icon={<Icon icon="akar-icons:person" width="25" height="25"/>}/>
            </div>
            <div className="pt-3">
              <ButtonMyProfile type="" label="Unggahan Saya" icon={<Icon icon="clarity:copy-line" width="26" height="26" />}/>
            </div>
            <div className="pt-3">
              <ButtonMyProfile type="" label="Komunitas Saya" icon={<Icon icon="ic:round-groups" width="28" height="28" />}/>
            </div>
            <div className="pt-3">
              <ButtonMyProfile type="" label="Transaksi Saya" icon={<Icon icon="cil:wallet" width="26" height="26"/>}/>
            </div>
            <div className="pt-14">
              <ButtonMyProfileSandi type="" label="About Us"/>
            </div>
            <div className="pt-3">
              <button onClick={() => handleLogout()} type="button" 
              className="text-white bg-[#329D9C] text-xl font-semibold w-full h-full rounded-xl py-3 px-3 flex justify-center items-center">Keluar</button>
            </div>

          </div>
        </section> 
      </MyProfileLayout> 
    </AuthProvider>  )
  }

export default AccountContainer;