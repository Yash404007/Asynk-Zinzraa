import React from 'react'

const bank = () => {
  return (
    <div>
        <div
  id="BankRoot"
  className="overflow-hidden bg-white flex flex-col justify-between gap-32 w-full"
>
  <div className="flex flex-col justify-between gap-[108px]">
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
            <img
              src=""
              id="ZinzraaLogo1"
              className="self-start w-20 shrink-0"
            />
          </div>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="bg-[#d9d9d9] self-start flex flex-row gap-5 w-[211px] shrink-0 h-6 items-center pt-1 px-4 rounded-sm">
              <img
                src="https://file.rendit.io/n/2hiNYR8zfaR1TKPg85nu.svg"
                id="Search"
                className="w-4 shrink-0"
              />
              <div className="text-xs font-['Poppins'] font-light text-[#848484] self-start mt-px">
                search your product
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/HkMUeRjMw0LMYrjxtReI.svg"
              id="Userfill"
              className="w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/QjYcFq80OlHbJ8lZF0v2.svg"
              id="Favoritefill"
              className="w-6 shrink-0"
            />
            <img
              src="https://file.rendit.io/n/iPq5DFe73C0tQweVtSIy.svg"
              id="Bagaltfill1"
              className="w-6 shrink-0"
            />
          </div>
        </div>
        <div className="flex flex-row items-start">
          <img
            src="https://file.rendit.io/n/bPqpzSPzgc2nAKuXcjoU.svg"
            id="Bagaltfill"
            className="w-8 shrink-0 mt-2 mr-[-27px]"
          />
          <div className="text-xs font-['Poppins'] font-light text-[#032b2a] self-end mr-40">
            Bag
          </div>
          <img
            src="https://file.rendit.io/n/z9LLB3dEN4cGghutZWVF.svg"
            id="LocationOn"
            className="w-8 shrink-0 mt-2 mr-[-60px]"
          />
          <div className="text-xs font-['Poppins'] font-light text-[#032b2a] self-end mr-[147px]">
            Delivery Details
          </div>
          <div className="text-right text-3xl font-['Inter'] font-medium leading-[45px] text-[#032b2a] mb-4 mr-[-36px]">
            ₹
          </div>
          <div className="text-xs font-['Poppins'] font-light text-[#032b2a] self-end mr-[-400px]">
            Payment
          </div>
          <img
            src="https://file.rendit.io/n/0Egfd9ezewzXTirrEfyI.svg"
            className="mt-8 mr-24"
          />
          <img
            src="https://file.rendit.io/n/U2kK4u71jlPRbwZpxW5Z.svg"
            className="self-end mb-5"
          />
        </div>
      </div>
      <div className="flex flex-col ml-12 gap-20 w-2/5 items-start">
        <div className="text-center text-4xl font-['Lora'] font-bold leading-[57px] text-[#875a33]">
          Add details
        </div>
        <div className="self-stretch flex flex-col ml-1 gap-8">
          <div className="flex flex-col gap-8 h-48 shrink-0">
            <div className="flex flex-col mr-0 gap-6 h-20 shrink-0 items-start">
              <div className="text-sm font-['Poppins'] underline font-bold text-[#2b2c28]">
                Choose payment Method
              </div>
              <div className="self-stretch flex flex-row ml-3 gap-20 items-center">
                <img
                  src="https://file.rendit.io/n/eRA4kDIPYhcaUkEh49ua.svg"
                  id="MasterCard"
                  className="self-start w-16 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/l0QVwz790S6nAIPkePgv.svg"
                  id="GooglePay"
                  className="self-start w-16 shrink-0 mt-1 mr-px"
                />
                <img
                  src="https://file.rendit.io/n/krTryCootb1nyosltp9D.svg"
                  id="Visa"
                  className="mr-px w-16 shrink-0"
                />
                <img
                  src="https://file.rendit.io/n/pVBpOGvKjiQdDRu2CKlG.svg"
                  id="Paypal"
                  className="w-20 shrink-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <div className="text-sm font-['Poppins'] font-bold text-[#131515]">
                Name on card
              </div>
              <div className="border-solid border-[#d8d8d8] bg-white self-stretch flex flex-col justify-center pl-5 h-12 shrink-0 items-start border rounded">
                <div className="text-sm font-['Open_Sans'] text-[rgba(43,_44,_40,_0.2)]">
                  John Doe
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <div className="text-sm font-['Poppins'] font-bold text-[#131515]">
              Card Number
            </div>
            <div className="border-solid border-[#d8d8d8] bg-white self-stretch flex flex-row justify-between items-center pt-1 px-5 border rounded">
              <div
                id="Digits"
                className="text-sm font-['Open_Sans'] text-[rgba(43,_44,_40,_0.2)] self-start mt-3"
              >
                00000000000
                {"    "}
                10 digits
              </div>
              <div className="flex flex-row mb-1 gap-3 w-24 shrink-0 items-start">
                <img
                  src="https://file.rendit.io/n/pVhkqBOKOfNz57aDKEju.svg"
                  className="w-0 shrink-0"
                />
                <div className="text-sm font-['Open_Sans'] text-[#131515] mt-3">
                  MM/YY / CVC
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-px gap-1 items-start">
            <div className="text-sm font-['Poppins'] font-bold text-[#131515]">
              Email address
            </div>
            <div className="border-solid border-[#d8d8d8] bg-white self-stretch flex flex-col justify-center pl-4 h-12 shrink-0 items-start border rounded">
              <div className="text-sm font-['Open_Sans'] text-[#bac0c2]">
                something@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="shadow-[0px_8px_16px_-4px_rgba(36,_36,_38,_0.08),_0px_0px_2px_0px_rgba(143,_141,_166,_0.1)] flex flex-row mb-px gap-1 items-start">
              <div className="border-solid border-[#d8d8d8] bg-white flex flex-col justify-center pl-4 w-[401px] h-12 items-start border rounded">
                <div className="text-sm font-['Open_Sans'] text-[#bac0c2]">
                  Discount coupon
                </div>
              </div>
              <div className="bg-[#032b2a] flex flex-col justify-center h-12 items-center rounded-lg">
                <div className="text-sm font-['Poppins'] font-bold text-white mx-10">
                  APPLY
                </div>
              </div>
            </div>
            <div className="flex flex-row mr-20 gap-2 items-start">
              <div className="border-solid border-[#ff5e5b] mb-px w-5 shrink-0 h-5 border rounded-sm" />
              <div className="text-sm font-['Open_Sans'] text-[#131515] mt-1">
                by confirming the order, I accept the
                <span className="underline text-[#7de2d1]"> </span>
                <span className="underline text-[#ff5e5b]">
                  terms of the user
                </span>
                <span className="underline text-[#7de2d1]"> </span>
                <span className="underline">a</span>greement
              </div>
            </div>
            <div className="flex flex-row mr-[171px] gap-3 items-start">
              <div className="shadow-[0px_16px_56px_0px_rgba(3,_7,_30,_0.08)] bg-[#032b2a] flex flex-col justify-center w-1/2 h-20 items-center rounded-lg">
                <div className="font-['Poppins'] font-bold text-white">
                  CHECKOUT
                </div>
              </div>
              <div className="border-solid border-[#bac0c2] flex flex-col justify-center w-2/5 h-20 items-center border rounded-lg">
                <div className="font-['Poppins'] font-bold text-[#1e1e1e]">
                  Cancel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-4 ml-20 mr-40">
      <div className="flex flex-row justify-between ml-16 items-start">
        <img
          src="https://file.rendit.io/n/ceLxNhb3ZZKnG1zaYn5R.svg"
          id="FetherIconsAward"
          className="w-10 shrink-0"
        />
        <img src="" id="CoinInHand" className="w-10 shrink-0" />
        <img src="" id="Banknotes" className="w-10 shrink-0" />
        <img
          src="https://file.rendit.io/n/zioS17VO2v6WD9KxyEUT.svg"
          id="FetherIconsTruck"
          className="w-10 shrink-0"
        />
      </div>
      <div className="flex flex-row justify-between mr-3 items-start">
        <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33]">
          High Quality
        </div>
        <div className="flex flex-row gap-40 w-[718px] items-start">
          <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33] mr-1">
            Secure payment
          </div>
          <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33]">
            Cash on delivery
          </div>
          <div className="text-center text-lg font-['Inter'] font-bold leading-[27px] text-[#875a33]">
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
    <img src="" id="ZinzraaLogo" />
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

export default bank