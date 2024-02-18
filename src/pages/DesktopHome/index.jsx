import React from "react";

import { Button, Img, Line, List, Text } from "components";

const DesktopHomePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-900 h-[729px] md:px-5 px-[121px] relative rounded-lg w-full">
            <div className="absolute h-[729px] inset-[0] justify-center m-auto w-[81%] md:w-full">
              <Img
                className="absolute h-[729px] inset-y-[0] my-auto object-cover right-[0] w-[62%]"
                src="images/img_bitmap.png"
                alt="bitmap"
              />
              <div className="absolute bottom-[22%] flex flex-col items-start justify-start left-[0] w-[35%]">
                <Text
                  className="text-sm text-white-A700_87 tracking-[10.00px] uppercase"
                  size="txtManropeRegular14"
                >
                  NEW PRODUCT
                </Text>
                <Text
                  className="leading-[58.00px] mt-[23px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[2.00px] uppercase"
                  size="txtManropeBold56"
                >
                  <>
                    XX99 Mark II
                    <br />
                    Headphones
                  </>
                </Text>
                <Text
                  className="leading-[25.00px] mt-6 text-[15px] text-white-A700_9e w-[88%] sm:w-full"
                  size="txtManropeMedium15"
                >
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[160px] mt-10 text-[13px] text-center tracking-[1.00px] uppercase"
                  color="deep_orange_400"
                  variant="fill"
                >
                  See Product
                </Button>
              </div>
              <header className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto top-[4%] w-full">
                <Img
                  className="h-[25px] md:mt-0 mt-[3px]"
                  src="images/img_audiophile2.svg"
                  alt="audiophileTwo"
                />
                <ul className="flex md:flex-1 sm:flex-col flex-row gap-[34px] sm:hidden items-center justify-center md:ml-[0] ml-[197px] md:mt-0 mt-[3px] pr-0.5 py-0.5 w-[39%] md:w-full common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                    >
                      <Text size="txtManropeBold13">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                    >
                      <Text size="txtManropeBold13">HEADPHONES</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                    >
                      <Text size="txtManropeBold13">SPEAKERS</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                    >
                      <Text size="txtManropeBold13">EARPHONES</Text>
                    </a>
                  </li>
                </ul>
                <Img
                  className="h-5 mb-2 md:ml-[0] ml-[317px]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              </header>
              <Line className="absolute bg-white-A700_6c h-px inset-x-[0] mx-auto top-[13%] w-[97%]" />
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1110px] mt-[120px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="md:h-[203px] h-[284px] relative w-full">
              <div className="absolute bg-gray-200 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[30px] sm:px-5 rounded-lg w-full">
                <div className="backdrop-opacity-[0.5] bg-black-900 blur-[43.00px] h-[18px] mt-[35px] rounded-[61px] w-[43%]"></div>
                <Text
                  className="mt-[33px] text-black-900 text-center text-lg tracking-[1.29px] uppercase"
                  size="txtManropeBold18"
                >
                  HEADPHONES
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-center mt-3.5 w-1/5 md:w-full">
                  <Text
                    className="text-[13px] text-black-900_87 tracking-[1.00px] uppercase"
                    size="txtManropeBold13Black90087"
                  >
                    Shop
                  </Text>
                  <Img
                    className="h-2.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <Img
                className="absolute h-40 inset-x-[0] mx-auto object-cover top-[0] w-[35%]"
                src="images/img_imageremovebgpreview41.png"
                alt="imageremovebgpr"
              />
            </div>
            <div className="md:h-[203px] h-[276px] relative w-full">
              <div className="absolute bg-gray-200 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[30px] sm:px-5 rounded-lg w-full">
                <div className="backdrop-opacity-[0.5] bg-black-900 blur-[43.00px] h-[18px] mt-[35px] rounded-[61px] w-[43%]"></div>
                <Text
                  className="mt-[33px] text-black-900 text-center text-lg tracking-[1.29px] uppercase"
                  size="txtManropeBold18"
                >
                  SPEAKERS
                </Text>
                <div className="flex flex-row gap-[13px] items-center justify-center mt-3.5 w-1/5 md:w-full">
                  <Text
                    className="text-[13px] text-black-900_87 tracking-[1.00px] uppercase"
                    size="txtManropeBold13Black90087"
                  >
                    Shop
                  </Text>
                  <Img
                    className="h-2.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <Img
                className="absolute h-[146px] inset-x-[0] mx-auto object-cover top-[0] w-[35%]"
                src="images/img_imageremovebgpreview38.png"
                alt="imageremovebgpr"
              />
            </div>
            <div className="md:h-[202px] h-[263px] relative w-full">
              <div className="md:h-[202px] h-[263px] m-auto w-full">
                <div className="absolute bg-gray-200 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[29px] sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start mt-[86px] w-[41%] md:w-full">
                    <Text
                      className="text-black-900 text-center text-lg tracking-[1.29px] uppercase"
                      size="txtManropeBold18"
                    >
                      EARPHONES
                    </Text>
                    <div className="flex flex-row gap-[13px] items-center justify-center w-[49%] md:w-full">
                      <Text
                        className="text-[13px] text-black-900_87 tracking-[1.00px] uppercase"
                        size="txtManropeBold13Black90087"
                      >
                        Shop
                      </Text>
                      <Img
                        className="h-2.5"
                        src="images/img_arrowright.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[125px]">
                  <Img
                    className="h-[126px] md:h-auto object-cover w-[125px] sm:w-full"
                    src="images/img_imageremovebgpreview42.png"
                    alt="imageremovebgpr"
                  />
                </div>
              </div>
              <div className="absolute backdrop-opacity-[0.5] bg-black-900 blur-[43.00px] h-[18px] inset-[0] justify-center m-auto rounded-[61px] w-[35%]"></div>
            </div>
          </List>
          <div className="bg-deep_orange-400_01 flex max-w-[1110px] mt-[168px] mx-auto pr-[95px] md:px-5 relative rounded-lg w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[560px] items-start justify-end my-auto pt-24 md:px-10 px-24 sm:px-5 rounded-lg w-[72%]"
              style={{ backgroundImage: "url('images/img_group4.svg')" }}
            >
              <Img
                className="h-[464px] md:h-auto md:ml-[0] ml-[21px] object-cover rounded-lg w-[68%]"
                src="images/img_imageremovebgpreview38_464x410.png"
                alt="imageremovebgpr"
              />
            </div>
            <div className="flex flex-col items-start justify-start ml-[-129px] my-auto rounded-lg w-[32%] z-[1]">
              <Text
                className="leading-[58.00px] md:text-5xl sm:text-[42px] text-[56px] text-white-A700 tracking-[2.00px] uppercase"
                size="txtManropeBold56"
              >
                <>
                  ZX9
                  <br />
                  SPEAKER
                </>
              </Text>
              <Text
                className="leading-[25.00px] mt-6 text-[15px] text-white-A700_9e w-full"
                size="txtManropeMedium15WhiteA7009e"
              >
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </Text>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[160px] mt-10 text-[13px] text-center tracking-[1.00px] uppercase"
                shape="round"
                variant="fill"
              >
                See Product
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1110px] mt-12 mx-auto md:px-5 w-full">
            <div className="bg-gray-200 flex flex-col items-center justify-start rounded-lg w-full">
              <div className="h-80 relative w-full">
                <Img
                  className="h-80 m-auto object-cover rounded-lg w-full"
                  src="images/img_bitmap_320x1110.png"
                  alt="bitmap_One"
                />
                <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-start justify-start left-[9%] my-auto w-[19%]">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[2.00px] uppercase"
                    size="txtManropeBold28"
                  >
                    ZX7 SPEAKER
                  </Text>
                  <Button className="cursor-pointer font-bold leading-[normal] min-w-[160px] text-[13px] text-center tracking-[1.00px] uppercase">
                    See Product
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1110px] mt-12 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-50 flex flex-col items-center justify-start rounded-lg w-full">
                  <Img
                    className="h-80 md:h-auto object-cover rounded-lg w-full"
                    src="images/img_bitmap_320x540.png"
                    alt="bitmap_Two"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 flex md:flex-1 flex-col items-start justify-center p-[95px] md:px-10 sm:px-5 rounded-lg w-[49%] md:w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start my-1.5 w-[71%] md:w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[2.00px] uppercase"
                  size="txtManropeBold28"
                >
                  YX1 EARPHONES
                </Text>
                <Button className="cursor-pointer font-bold leading-[normal] min-w-[160px] text-[13px] text-center tracking-[1.00px] uppercase">
                  See Product
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1110px] mt-[200px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <Text
                  className="leading-[44.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[1.43px] uppercase w-full"
                  size="txtManropeBold40"
                >
                  <span className="text-black-900 font-manrope text-left font-bold">
                    Bringing you the{" "}
                  </span>
                  <span className="text-deep_orange-400 font-manrope text-left font-bold">
                    best{" "}
                  </span>
                  <span className="text-black-900 font-manrope text-left font-bold">
                    audio gear
                  </span>
                </Text>
                <Text
                  className="leading-[25.00px] text-[15px] text-black-900_87 w-full"
                  size="txtManropeMedium15Black90087"
                >
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
                </Text>
              </div>
            </div>
            <div className="bg-gray-200 flex md:flex-1 flex-col items-center justify-start rounded-lg w-[49%] md:w-full">
              <Img
                className="h-[588px] md:h-auto object-cover rounded-lg w-full"
                src="images/img_bitmap_588x540.png"
                alt="bitmap_Three"
              />
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[365px] items-center justify-start mt-[200px] pb-12 md:px-10 px-12 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group13.svg')" }}
          >
            <div className="flex flex-col items-start justify-start max-w-[1110px] mx-auto w-full">
              <Line className="bg-deep_orange-400 h-1 w-[10%]" />
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[71px] pr-0.5 w-full">
                <Img
                  className="h-[25px]"
                  src="images/img_audiophile2.svg"
                  alt="audiophileTwo_One"
                />
                <Text
                  className="sm:ml-[0] ml-[538px] text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                  size="txtManropeBold13"
                >
                  Home
                </Text>
                <Text
                  className="sm:ml-[0] ml-[34px] text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                  size="txtManropeBold13"
                >
                  HEADPHONES
                </Text>
                <Text
                  className="sm:ml-[0] ml-[34px] text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                  size="txtManropeBold13"
                >
                  SPEAKERS
                </Text>
                <Text
                  className="sm:ml-[0] ml-[34px] text-[13px] text-white-A700 tracking-[2.00px] uppercase"
                  size="txtManropeBold13"
                >
                  EARPHONES
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-9 w-full">
                <Text
                  className="sm:flex-1 leading-[25.00px] text-[15px] text-white-A700_87 w-[49%] sm:w-full"
                  size="txtManropeMedium15WhiteA70087"
                >
                  <>
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We&#39;re a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                  </>
                </Text>
                <Img
                  className="h-6 md:ml-[0] ml-[466px] md:mt-0 mt-[69px] w-6"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-[19px] ml-4 md:ml-[0] md:mt-0 mt-[71px]"
                  src="images/img_trash.svg"
                  alt="trash"
                />
                <Img
                  className="h-6 ml-4 md:ml-[0] md:mt-0 mt-[69px] w-6"
                  src="images/img_info.svg"
                  alt="info"
                />
              </div>
              <Text
                className="mt-[59px] text-[15px] text-white-A700_87"
                size="txtManropeBold15"
              >
                Copyright 2021. All Rights Reserved
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopHomePage;
