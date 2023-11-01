import React from 'react'

const addDetail = () => {
  return (
    <div>
        <div
  id="AdddetailsRoot"
  className="overflow-hidden bg-white flex flex-col justify-between gap-32 w-full"
>
  <div className="flex flex-col justify-between gap-[109px]">
    <div className="flex flex-col gap-24 items-start">
      <div className="self-stretch flex flex-col gap-6 items-center">
        <div className="bg-[#032b2a] self-stretch flex flex-row justify-between h-20 shrink-0 items-center px-12">
          <div className="flex flex-row justify-between w-1/2 items-center">
            <div className="flex flex-row justify-between w-[412px] items-start">
              <div className="font-['Poppins'] font-light text-white">
                Products
              </div>
              <div className="font-['Poppins'] font-light text-white">
                Saree
              </div>
              <div className="font-['Poppins'] font-light text-white">
                Kurtas
              </div>
              <div className="font-['Poppins'] font-light text-white">
                Dresses
              </div>
              <div className="font-['Poppins'] font-light text-white">
                Contact us
              </div>
            </div>
            <img src="" id="ZinzraaLogo" className="self-start w-20 shrink-0" />
          </div>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="bg-[#d9d9d9] self-start flex flex-row gap-5 w-[211px] shrink-0 h-6 items-center pt-1 px-4 rounded-sm">
              <img
                src="https://file.rendit.io/n/S7InNPSTDapRPhrBONDy.svg"
                id="Search"
                className="w-4 shrink-0"
              />
              <div className="text-xs font-['Poppins'] font-light text-[#848484] self-start mt-px">
                search your product
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/fgObB9WQEtDEdD5xuryC.svg"
              id="Userfill"
              className="w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/QA58bC13Jc7GVkl7X84f.svg"
              id="Favoritefill"
              className="w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/iSq9X0i6cbFubOaXVXX1.svg"
              id="Bagaltfill"
              className="w-6 shrink-0"
            />
          </div>
        </div>
        <div className="flex flex-row items-start">
          <img
            src="https://file.rendit.io/n/aBc3jWlSg1R75HAq0RLW.svg"
            id="Bagaltfill1"
            className="w-8 shrink-0 mt-2 mr-[-27px]"
          />
          <div className="text-xs font-['Poppins'] font-light text-[#032b2a] self-end mr-40">
            Bag
          </div>
          <img
            src="https://file.rendit.io/n/2vWdcBbw8Kbf6d9yDuaV.svg"
            id="LocationOn"
            className="w-8 shrink-0 mt-2 mr-[-60px]"
          />
          <div className="text-xs font-['Poppins'] font-light text-[#032b2a] self-end mr-[147px]">
            Delivery Details
          </div>
          <div className="text-right text-3xl font-['Inter'] font-medium leading-[45px] text-[#848484] mb-4 mr-[-36px]">
            ₹
          </div>
          <div className="text-xs font-['Poppins'] font-light text-[#7c7c7c] self-end mr-[-400px]">
            Payment
          </div>
          <img
            src="https://file.rendit.io/n/3iWKJ4srI9HqTXFsXyAW.svg"
            className="mt-8 mr-20"
          />
          <img
            src="https://file.rendit.io/n/gEFJU7ama6n0ATdBUH44.svg"
            className="self-end mb-5"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between ml-12 gap-8 w-3/5 items-start">
        <div className="flex flex-col gap-6 items-start">
          <div className="text-center text-4xl font-['Lora'] font-bold leading-[57px] text-[#875a33]">
            Add details
          </div>
          <div className="text-xl font-['Open_Sans'] underline font-semibold text-[#232321] ml-px">
            Login and Checkout faster
          </div>
        </div>
        <div className="flex flex-col ml-px gap-2 w-3/5 items-start">
          <div className="text-3xl font-['Poppins'] font-semibold text-[#232321]">
            Contact Details
          </div>
          <div className="font-['Open_Sans'] font-semibold text-[#232321]">
            We will use these details to keep you inform about your delivery.
          </div>
        </div>
        <div
          id="Inputinitial"
          className="border-solid border-[#232321] flex flex-col justify-center ml-px pl-4 w-2/5 h-12 shrink-0 items-start border rounded-lg"
        >
          <div
            id="Placeholder"
            className="font-['Inter'] tracking-[0.5] text-[#79767c]"
          >
            Email
          </div>
        </div>
        <div className="text-3xl font-['Poppins'] font-semibold text-[#232321] ml-px">
          Shipping Address
        </div>
        <div className="self-stretch flex flex-col justify-between gap-5 ml-px mr-20">
          <div className="flex flex-row gap-5 items-start">
            <div
              id="Inputinitial1"
              className="border-solid border-[#232321] flex flex-col justify-center pl-4 w-1/2 h-12 items-start border rounded-lg"
            >
              <div
                id="Placeholder1"
                className="font-['Inter'] tracking-[0.5] text-[#79767c]"
              >
                First Name*
              </div>
            </div>
            <div
              id="Inputinitial2"
              className="border-solid border-[#232321] flex flex-col justify-center pl-4 w-1/2 h-12 items-start border rounded-lg"
            >
              <div
                id="Placeholder2"
                className="font-['Inter'] tracking-[0.5] text-[#79767c]"
              >
                Last Name*
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <div
              id="Inputinitial3"
              className="border-solid border-[#232321] self-stretch flex flex-col justify-center pl-4 h-12 shrink-0 items-start border rounded-lg"
            >
              <div
                id="Placeholder3"
                className="font-['Inter'] tracking-[0.5] text-[#79767c]"
              >
                Find Delivery Address*
              </div>
            </div>
            <div
              id="HelperTextHere"
              className="text-xs font-['Inter'] tracking-[0.4] text-[#36323b]"
            >
              Start typing your street address or zip code for suggestion
            </div>
          </div>
          <div className="self-start flex flex-col gap-1 w-1/2 items-start">
            <div
              id="Inputinitial4"
              className="border-solid border-[#232321] self-stretch flex flex-col justify-center pl-4 h-12 shrink-0 items-start border rounded-lg"
            >
              <div
                id="Placeholder4"
                className="font-['Inter'] tracking-[0.5] text-[#79767c]"
              >
                Phone Number*
              </div>
            </div>
            <div
              id="HelperTextHere1"
              className="text-xs font-['Inter'] tracking-[0.4] text-[#36323b]"
            >
              E.g. (+91) 456-7890-123
            </div>
          </div>
        </div>
        <div className="text-3xl font-['Poppins'] font-semibold text-[#232321] ml-px">
          Delivery Options
        </div>
        <div className="self-stretch flex flex-col ml-px gap-6">
          <div className="bg-[#fafafa] flex flex-row justify-between h-24 shrink-0 items-center pt-4 px-4 rounded-lg">
            <div className="flex flex-col gap-2 w-1/2 items-start">
              <div className="text-2xl font-['Poppins'] font-semibold text-[#232321]">
                Standard Delivery
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[#232321]">
                Enter your address to see when you’ll get your order
              </div>
            </div>
            <div className="text-xl font-['Rubik'] font-semibold text-[#7c7c7c] self-start">
              Free
            </div>
          </div>
          <div className="border-solid border-[#232321] flex flex-row justify-between h-24 shrink-0 items-center pt-4 px-4 border rounded-lg">
            <div className="flex flex-col gap-2 items-start">
              <div className="text-2xl font-['Poppins'] font-semibold text-[#232321]">
                Cash on delivery
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[#232321]">
                Pay now, collect in store
              </div>
            </div>
            <div className="text-xl font-['Rubik'] font-semibold text-[#4a69e2] self-start">
              Rs:6.00
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between ml-px w-3/5 h-[147px] shrink-0">
          <div className="flex flex-row mr-24 gap-2 items-center">
            <div className="self-start relative flex flex-col w-6 shrink-0 items-start">
              <div
                id="Checkmark"
                className="w-4 h-4 bg-white absolute top-1 left-1"
              />
              <img
                src="https://file.rendit.io/n/kJtpS0OI3DCO2M8tKiZz.svg"
                id="Checkbox1"
                className="relative w-6"
              />
            </div>
            <div className="font-['Open_Sans'] font-semibold text-[#232321]">
              My billing and delivery information are the same{" "}
            </div>
          </div>
          <div className="self-start flex flex-row gap-2 items-center">
            <div className="self-start relative flex flex-col w-6 shrink-0 items-start">
              <div
                id="Checkmark1"
                className="w-4 h-4 bg-white absolute top-1 left-1"
              />
              <img
                src="https://file.rendit.io/n/kJtpS0OI3DCO2M8tKiZz.svg"
                id="Checkbox3"
                className="relative w-6"
              />
            </div>
            <div className="font-['Open_Sans'] font-semibold text-[#232321]">
              I’m 13+ year old
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start">
            <div className="font-['Rubik'] font-semibold text-[#232321]">
              Also want product updates with our newsletter?
            </div>
            <div className="self-stretch flex flex-row gap-2 items-center">
              <div className="self-start relative flex flex-col w-6 shrink-0 items-start">
                <div
                  id="Checkmark2"
                  className="w-4 h-4 bg-white absolute top-1 left-1"
                />
                <img
                  src="https://file.rendit.io/n/kJtpS0OI3DCO2M8tKiZz.svg"
                  id="Checkbox5"
                  className="relative w-6"
                />
              </div>
              <div className="font-['Open_Sans'] font-semibold text-[#232321]">
                Yes, I’d like to receive emails about exclusive sales and more.
              </div>
            </div>
          </div>
        </div>
        <button id="Button2" className="flex flex-col ml-px w-1/2 rounded-lg">
          <div
            id="Stylelayer"
            className="bg-[#032b2a] flex flex-col justify-center h-12 shrink-0 items-center rounded-lg"
          >
            <button
              id="Button1"
              className="text-sm font-['Rubik'] font-medium tracking-[0.25] uppercase text-white"
            >
              Review AND PAY
            </button>
          </div>
        </button>
      </div>
    </div>
    <div className="flex flex-row justify-between items-start ml-24 mr-40">
      <div className="flex flex-col gap-4 items-start">
        <img
          src="https://file.rendit.io/n/gWwOaYZfH7wJJ2jMhE7o.svg"
          id="FetherIconsAward"
          className="self-end w-10"
        />
        <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33] mr-1">
          High Quality
        </div>
      </div>
      <div className="flex flex-row gap-40 w-[729px] items-start">
        <div className="flex flex-col mr-1 gap-6 items-start">
          <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33]">
            Secure payment
          </div>
          <img src="" id="CoinInHand" className="self-end mr-8 w-10" />
        </div>
        <div className="flex flex-col gap-4 items-start">
          <img src="" id="Banknotes" className="self-end mr-8 w-10" />
          <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33]">
            Cash on delivery
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <img
            src="https://file.rendit.io/n/taxpU1m5A984JFkpAJFR.svg"
            id="FetherIconsTruck"
            className="self-end w-10"
          />
          <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33] mr-3">
            Easy return
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    id="Footer"
    className="bg-[#032b2a] flex flex-col justify-center gap-6 items-center px-12 py-4"
  >
    <img src="" id="ZinzraaLogo1" />
    <div className="self-stretch flex flex-col justify-between gap-4 items-center">
      <div className="self-stretch flex flex-row justify-between ml-px items-center">
        <div className="self-start flex flex-row justify-between w-3/5 items-center">
          <div className="self-start flex flex-col gap-1 w-1/2 items-center">
            <div className="self-stretch flex flex-col items-start">
              <div className="text-2xl font-['Poppins'] font-medium leading-[36px] text-white self-center">
                Follow us on Social media
              </div>
              <div className="text-center text-xl font-['Poppins'] leading-[30px] text-white ml-6">
                Email: Zinzraa@gmail.com
              </div>
              <div className="text-center text-xl font-['Poppins'] leading-[30px] text-white ml-4">
                Contact: +91 1234-4567-890
              </div>
              <div className="text-center text-xl font-['Poppins'] leading-[30px] text-white">
                Address: abc, abc road, Ahmdebad
                <br />
                India, 1546{" "}
              </div>
            </div>
            <div className="flex flex-row items-start">
              <img src="" id="Instagram" className="w-8 shrink-0" />
              <img src="" id="Facebook" className="w-8 shrink-0" />
              <img src="" id="TwitterX" className="w-8 shrink-0" />
            </div>
          </div>
          <div className="text-center text-2xl font-['Poppins'] font-medium leading-[36px] text-white">
            Important Links
            <br />
            <span className="text-xl leading-[30px]">
              My Profile
              <br />
              My Orders
              <br />
              Refund policy
              <br />
              Privacy policy
              <br />
              Terms and conditions
            </span>
          </div>
        </div>
        <div className="text-center text-2xl font-['Poppins'] font-medium leading-[36px] text-white">
          Shop by Category
          <br />
          <span className="text-xl leading-[30px]">
            Western
            <br />
            Ethnic
            <br />
            Sarees
            <br />
            Kurta
            <br />
            Dresses
          </span>
        </div>
      </div>
      <div className="text-center font-['Poppins'] font-light leading-[24px] text-[#c2c2c2]">
        We accept all major credit cards / debit cards and Netbanking
      </div>
      <div className="bg-[rgba(217,_217,_217,_0.5)] self-stretch h-px shrink-0" />
      <div className="text-center font-['Poppins'] font-light leading-[24px] text-white">
        © 2023 Zinzraa Fashion Pvt. Ltd. All Rights Reserved
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default addDetail