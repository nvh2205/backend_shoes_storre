module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Products',
      [
        {
          title: 'ULTRA BOOST DNA CTY',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/ULTRA-BOOST-DNA-CTY.png',
          price: 2690000,
        },
        {
          title: 'ULTRA BOOST 2021 VIVID RED',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/ULTRA-BOOST-2021-VIVID-RED.jpg',
          price: 2690000,
        },
        {
          title: 'ULTRA BOOST 2021 COREBLACK',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/ULTRA-BOOST-2021-COREBLACK.jpg',
          price: 2690000,
        },
        {
          title: 'Air Force 1 Low White',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/Air-Force-1-Low-White.jpg',
          price: 2500000,
        },
        {
          title: 'Nike Waffle One',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/Nike-Waffle-One.jpg',
          price: 2100000,
        },
        {
          title: 'Nike Blazer Low White Black',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/Nike-Blazer-Low-White-Black.jpg',
          price: 2100000,
        },
        {
          title: 'Puma RS-X3 Puzzle White',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/Puma-RS-X3-Puzzle-White.jpg',
          price: 2100000,
        },
        {
          // 8,
          title: 'Puma RS-X3 Puzzle Black White',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/Puma-RS-X3-Puzzle-Black-White.jpg',
          price: 2700000,
        },
        {
          // 9,
          title: 'Puma Mule White ',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/Puma-Mule-White.jpg',
          price: 1300000,
        },
        {
          // 10,
          title: 'Adidas YEEZY BOOST 350 V2 - Dazzing Blue',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_YEEZY_BOOST_350_V2.png',
          price: 7000000,
        },
        {
          // 11,
          title: 'Adidas UltraBOOST 21 - Crew Navy/Core Black',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_UltraBOOST_21_CrewNavy_CoreBlack.jpg',
          price: 2800000,
        },
        {
          // 12,
          title: 'Adidas UltraBOOST 20 W - Signal Pink/Copper Metallic',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_UltraBOOST_20W_Signal_Pink.jpg',
          price: 2500000,
        },
        {
          // 14,
          title: 'Adidas Superstar - Paint Splatter',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_Superstar_Paint_Splatter.png',
          price: 1500000,
        },
        {
          // 15,
          title:
            'Adidas by Stella McCartney Barricade Boost - Silver Metallic/Solar Red',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_Stella_McCartney_BarricadeBoost.jpg',
          price: 2500000,
        },
        {
          // 16,
          title: 'Adidas NMD R1 - Lush Red',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_NMD_R1_LushRed.png',
          price: 1500000,
        },
        {
          // 17,
          title: 'Adidas Stan Smith Vintage - Royal Blue',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_Stan_Smith_Vintage_Royal_Blue.png',
          price: 1500000,
        },
        {
          // 18,
          title: 'Adidas Forum Low - White/Black',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_Forum_Low_White_Black.png',
          price: 2000000,
        },
        {
          // 19,
          title: 'Adidas Breaknet - White',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_Breaknet_White.jpg',
          price: 1500000,
        },
        {
          // 20,
          title: 'Adidas Alphamagma - Black/Green',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 2,
          imgURL: '/apidocs/img/adidas_Alphamagma_Black_Green.jpg',
          price: 2000000,
        },
        {
          // 21,
          title: 'Nike Dunk Low GS - Toasty Green',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/NikeDunkLowGS_ToastyGreen.png',
          price: 3500000,
        },
        {
          // 22,
          title: 'Nike SB Dunk Low - Mummy',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/NikeSBDunkLow_Mummy.png',
          price: 10000000,
        },
        {
          // 23,
          title: 'Nike Waffle One - Black',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/NikeWaffleOne_Black.png',
          price: 2200000,
        },
        {
          // 24,
          title: 'Air Jordan 1 Low - Rivals',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/AirJordan1Low_Rivals.png',
          price: 4000000,
        },
        {
          // 25,
          title: 'Nike Air Monarch IV - White/Metallic Silver',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 1,
          imgURL: '/apidocs/img/NikeAirMonarchIV_WhiteMetallicSilver.jpg',
          price: 1800000,
        },
        {
          // 26,
          title: 'Puma Basket Heart - White Sequin',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/PumaBasketHeart_WhiteSequin.png',
          price: 750000,
        },
        {
          // 27,
          title: 'Puma Basket x Pepsi Max - Blue',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/PumaBasket_PepsiMax_Blue.png',
          price: 750000,
        },
        {
          // 28,
          title: 'Puma R698 Knit Speckle',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/PumaR698KnitSpeckle.jpg',
          price: 1000000,
        },
        {
          // 29,
          title: 'Puma Amp XT - Black/Gold',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/PumaAmpXT_BlackGold.png',
          price: 750000,
        },
        {
          // 30,
          title: 'Puma Thunder Spectra Glacier Gray-Indigo Bunting',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 3,
          imgURL: '/apidocs/img/PumaThunderSpectra.png',
          price: 1500000,
        },
        {
          // 31,
          title:
            'Comme des Garcons PLAY x Converse Chuck Taylor 1970s High - Black',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 4,
          imgURL: '/apidocs/img/converse_heart_black.jpg',
          price: 3500000,
        },
        {
          // 32,
          title:
            'Comme des Garcons PLAY x Converse Chuck Taylor 1970s Low - Off White',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 4,
          imgURL: '/apidocs/img/converse_heart_white.png',
          price: 1500000,
        },
        {
          // 33,
          title: 'Converse Chuck 70 Vintage Canvas Low - Red',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
          `,
          BrandId: 4,
          imgURL: '/apidocs/img/converse_chuck_red.png',
          price: 1200000,
        },
        {
          // 34,
          title: 'Vans Old Skool Black White',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
      `,
          BrandId: 5,
          imgURL: '/apidocs/img/VansOldSchool_BlackWhite.png',
          price: 1500000,
        },
        {
          // 35,
          title: 'Vans Old Skool Navy',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
      `,
          BrandId: 5,
          imgURL: '/apidocs/img/VansOldSchool_Navy.png',
          price: 1300000,
        },
        {
          // 36,
          title: 'Vans Old Skool Krooked By Natas For Ray Skate',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
      `,
          BrandId: 5,
          imgURL: '/apidocs/img/VansOldSkool_KrookedByNatasForRaySkate.png',
          price: 1600000,
        },
        {
          // 37,
          title: 'Vans Old Skool Twill Zip',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
      `,
          BrandId: 5,
          imgURL: '/apidocs/img/VansOldSkool_TwillZip.png',
          price: 1550000,
        },
        {
          // 38,
          title: 'Vans Old Skool Waxed Canvas Sentry WC',
          description: `-Hàng chính hãng-Giao hàng Toàn Quốc-Thanh Toán khi nhận hàng-Bảo hành chính hãng trọn đời sản phẩm-Bảo hành keo , chỉ trọn đời sản phẩm-Giao hàng Nhanh 60p tại Sài Gòn/ Biên Hoà
      `,
          BrandId: 5,
          imgURL: '/apidocs/img/VansOldSkool_WaxedCanvasSentryWC.png',
          price: 2000000,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
