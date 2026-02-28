import Button from "../UI/Button";
import logo from "../../assets/soft-logo.png";
import PasswordInput from "../UI/PasswordInput";
import background from "../../assets/background.png";


const PasswordForm = ({ formData, handleInputChange, errors, handleNext, handleBlur, handleBack, loading }) => {

  
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    <div style={backgroundStyle} className="min-h-screen flex-col flex-1 flex items-center justify-center bg-gradient-to-br from-blue-100 to-black-100">
      <div className="bg-gray-800 rounded-xl shadow-xl w-sm md:w-lg p-8">

        <div className="flex justify-between mt-8 mb-4">
          <Button
            onClick={handleBack}
              disabled={false}
            className="transition-colors -mt-10 -ml-3"
          >          
            {/* <img src={arrow} className="text-white w-8 h-8" alt="company logo" /> */}
              <svg fill="#ffff" className="w-5 h-5" viewBox="-128 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></g></svg>
          </Button>
          <img src={logo} alt="company logo" className="w-36 h-8 -mt-8" />
          <div></div>
        </div>

        <div className="flex align-center justify-center pb-6 px-1 pt-2">
          <p className="text-sm font-semibold text-gray-300 text-center border rounded-lg border-gray-300 px-1">{formData.email}</p>
        </div>

        <div className="flex align-center justify-center pb-6 px-1 pt-1">
          <h1 className="text-xl text-white font-black text-center">Enter your password</h1>
        </div>

        <PasswordInput
          // label="Email"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleInputChange}
          error={errors.password}
          onBlur={handleBlur}
          className="border-2 placeholder:text-gray-600 text-white"
        />

        <div className="flex justify-end py-4">
          
          {loading ?
          
            <Button
              onClick={() => {}}
              disabled={true}
              className="bg-gray-500 rounded-2xl mt-2 px-10 py-2 text-sm text-white w-full "
            >
              Sign in
            </Button>
            :
            <Button
              onClick={handleNext}
              disabled={errors.email}
              className="bg-blue-500 px-10 py-1 text-sm text-white hover:bg-blue-600 transition-colors w-full"
            >
              Sign in
            </Button>
          }

        </div>

      </div>

      {/* <div className="flex flex-col mt-8 items-center justify-center"> */}
      <div className="flex flex-col text-gray-300 items-center justify-center fixed bottom-6">
        <div className="flex">
          <p className="text-sm mr-3">Help and feedback</p>
          <p className="text-sm mr-3">Terms of use</p>
          <p className="text-sm">Privacy & cookies</p>
        </div>

        <div className="flex">
          <p className="text-sm mr-3">Use private browsing if this is not your device.</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
