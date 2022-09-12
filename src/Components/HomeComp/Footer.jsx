const Footer = () => {
  return (
    <div className="bg-black min-h-[300px] py-10 border-b-8 border-[#222]  text-white grid md:grid-cols-4 grid-cols-2 gap-8 place-items-center">
      <div className="flex flex-col space-y-2">
        <h6>Questions? Contact us.</h6>
        <h6>FAQ</h6>
        <h6>Investor Relations</h6>
        <h6>Privacy</h6>
        <h6>Speed test</h6>
        <h6>Netflix Lebanon</h6>
      </div>
      <div className="flex flex-col space-y-4">
        <h6>Help Center</h6>
        <h6>Jobs</h6>
        <h6>Cookie Preference</h6>
        <h6>Legal Notices</h6>
      </div>
      <div className="flex flex-col space-y-4">
        <h6>Account</h6>
        <h6>Ways to watch</h6>
        <h6>Corporate Information</h6>
        <h6>Only on Netflix</h6>
      </div>
      <div className="flex flex-col space-y-4 t">
        <h6>Media Center</h6>
        <h6>Terms of Use</h6>
        <h6>Contact Us</h6>
      </div>
    </div>
  );
};

export default Footer;
