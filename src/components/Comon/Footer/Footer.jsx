import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
 <footer className="footer bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-col md:flex-row justify-around items-center mx-5 px-5">
    <div className="address mb-4 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Address</h2>
      <p className="text-base">
        61, Motijheel C/A, Level: 5,<br />
        Red Crescent House Dhaka. 1000
      </p>
      <p className="text-base">Email: shelterhousinglimited@gmail.com</p>
    </div>
    <div className="company mb-4 md:mb-0">
      <h2 className="text-lg font-bold mb-2">Company</h2>
      <nav>
        <a href="#" className="block mb-2 hover:underline">About us</a>
        <a href="#" className="block mb-2 hover:underline">Contact</a>
        <a href="#" className="block hover:underline">Jobs</a>
      </nav>
    </div>
    <div className="legal">
      <h2 className="text-lg font-bold mb-2">Legal</h2>
      <nav>
        <a href="#" className="block mb-2 hover:underline">Terms of use</a>
        <a href="#" className="block mb-2 hover:underline">Privacy policy</a>
        <a href="#" className="block hover:underline">Cookie policy</a>
      </nav>
    </div>
  </div>
</footer>

      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
        <img className='h-16 w-96' src='https://shelterhousingltd.com/wp-content/uploads/2019/10/logo1.png'></img>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook size={24} className="fill-current" />
            </a>
            <a>
              <FaTwitter size={24} className="fill-current" />
            </a>
            <a>
              <FaInstagram size={24} className="fill-current" />
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
