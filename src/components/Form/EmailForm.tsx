import Button from "../UI/Button";
import Input from "../UI/Input";

import logo from "../../assets/soft-logo.png";
import background from "../../assets/background.png";


const EmailForm = ({ formData, handleInputChange, errors, handleNext, handleBlur }) => {
  
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    <div style={backgroundStyle} className="min-h-screen flex-1 flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-100">
      <div className="bg-white rounded-md shadow-xl w-sm md:w-lg p-8">

        <div className="flex mb-4">
          <img src={logo} alt="company logo" className="w-36 h-8" />
        </div>

        <div className="flex pb-3 pt-1">
          <h1 className="text-xl font-semibold text-left">Sign in</h1>
        </div>

        <Input
          label=""
          name="email"
          type="email"
          value={formData.email}
          placeholder="Email, phone, or Skype"
          onChange={handleInputChange}
          error={errors.email}
          onBlur={handleBlur}
          className="border-2"
        />

        <div className="flex flex-col">
          <p className="text-sm pt-2">No account? <a href="#" className="text-blue-600" target="_blank">create one!</a></p>
          <p className="text-sm py-2"><a href="#" className="text-blue-600" target="_blank">can't access your account?</a></p>
        </div>

        <div className="flex justify-end py-4">
          
            <Button
              onClick={handleNext}
              disabled={errors.email}
              className="bg-blue-500 px-10 py-1 text-sm text-white hover:bg-blue-600 transition-colors"
            >
              Next
            </Button>
        </div>

      </div>

      <div className="flex fixed bottom-1 right-3">
          <p className="text-sm mr-3">Terms of use</p>
          <p className="text-sm">Privacy & cookies</p>
      </div>
    </div>
  );
};

export default EmailForm;
