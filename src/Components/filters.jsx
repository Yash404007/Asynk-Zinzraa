import React from 'react'

const filters = () => {
  return (
    <div>
        <div className="overflow-hidden flex flex-row gap-8 w-full items-start">
  <div className="flex flex-col mb-6 gap-12 w-[269px] items-start">
    <div className="flex flex-col gap-6 w-3/5 items-start">
      <div className="text-3xl font-['Poppins'] font-medium leading-[42px]">
        Size
      </div>
      <div className="self-stretch flex flex-col justify-between gap-4">
        <div className="flex flex-row mr-8 gap-5 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Small</div>
        </div>
        <div className="flex flex-row gap-5 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Medium</div>
        </div>
        <div className="flex flex-row mr-8 gap-5 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Large</div>
        </div>
        <div className="self-start flex flex-row gap-5 w-20 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Xl</div>
        </div>
        <div className="self-start flex flex-row gap-5 w-24 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">2Xl</div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-col justify-between gap-6 items-start">
      <div className="text-3xl font-['Poppins'] font-medium leading-[42px]">
        Price
      </div>
      <div className="self-stretch flex flex-col gap-2 items-start">
        <div className="self-stretch relative flex flex-col items-end px-[108px]">
          <div className="w-[269px] h-2 bg-[#d9d9d9] absolute top-2 left-0 flex flex-col items-start rounded">
            <div className="bg-[#875a33] w-3/5 h-2 shrink-0 rounded" />
          </div>
          <div
            id="Ellipse"
            className="bg-[url(https://file.rendit.io/n/jfUe6FO8HWEbBI6d3Drd.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col w-6 items-center p-1"
          >
            <img
              src="https://file.rendit.io/n/CXerFVuyzvyXe0DAnAJC.svg"
              id="Ellipse1"
              className="w-4"
            />
          </div>
        </div>
        <div className="font-['Poppins'] leading-[24px] text-[#454545] ml-px">
          Price ₹0 - ₹2000
        </div>
      </div>
      <div className="text-3xl font-['Poppins'] font-medium leading-[42px] ml-px">
        Fabric
      </div>
      <div className="flex flex-col justify-between gap-4 w-1/2">
        <div className="self-start flex flex-row gap-5 w-24 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Silk</div>
        </div>
        <div className="flex flex-row gap-5 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Cotton</div>
        </div>
        <div className="flex flex-row mr-5 gap-5 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Linen</div>
        </div>
        <div className="flex flex-row mr-2 gap-5 items-start">
          <img
            src="https://file.rendit.io/n/0ieNEdPVTIaxLhdTDnzM.svg"
            className="w-8 shrink-0"
          />
          <div className="text-2xl font-['Poppins'] leading-[36px]">Rayon</div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-[rgba(135,_90,_51,_0.2)] mt-1 w-px shrink-0 h-[744px]" />
</div>
    </div>
  )
}

export default filters