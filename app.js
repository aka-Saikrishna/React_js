import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

/*
* Header
* - logo
  - Nav items
* Body
* - Search
  - RestaurantContainer
    - RestaurantCard
        - Name of restaurant
        - Star Rating
        - cuisine
        - delivery time
* Footer
  - Copyright
  - links
  - Address
  - Constact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const svg = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    role="img"
    aria-hidden="true"
    strokecolor="rgba(2, 6, 12, 0.92)"
    fillcolor="rgba(2, 6, 12, 0.92)"
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
    ></circle>
    <path
      d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
      fill="white"
    ></path>
    <defs>
      <linearGradient
        id="StoreRating20_svg__paint0_linear_32982_71567"
        x1="10"
        y1="1"
        x2="10"
        y2="19"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#21973B"></stop>
        <stop offset="1" stop-color="#128540"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const ReataurantCard = (props) => {
  const { restrauntData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = restrauntData?.info;
  return (
    <div className="res-card">
      <img
        className="card-1"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="card-1"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <div className="rating">
        {svg}
        <h4>{avgRating}</h4>
        <h4 className="timing">{deliveryTime}</h4>
      </div>

      <h4>{costForTwo}</h4>
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "259458",
      name: "Oven Story Pizza",
      cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
      deliveryTime: "26-36 mins",
      locality: "Katedan",
      areaName: "Shamshabad",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "259458",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "3534",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/oven-story-pizza-katedan-shamshabad-hyderabad-259458",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "528319",
      name: "Pista House Restaurant & Bakery",
      deliveryTime: "31 mins",
      cloudinaryImageId: "e5yaxzwpd9vjvmxwjwpx",
      locality: "Shivarampally",
      areaName: "Aaramghar",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "528319",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 6200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6200,
      },
      parentId: "319765",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pista-house-restaurant-and-bakery-shivarampally-aaramghar-hyderabad-528319",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "377929",
      name: "Baskin Robbins - Ice Cream Desserts",
      deliveryTime: "26 mins",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Katedan",
      areaName: "Shamshabad",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 3.7,
      veg: true,
      feeDetails: {
        restaurantId: "377929",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "5588",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-katedan-shamshabad-hyderabad-377929",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "259461",
      name: "The Good Bowl",
      deliveryTime: "27 mins",
      cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
      locality: "Katedan",
      areaName: "Shamshabad",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "259461",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "7918",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-good-bowl-katedan-shamshabad-hyderabad-259461",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "259460",
      name: "Sweet Truth - Cake and Desserts",
      deliveryTime: "25 mins",
      cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
      locality: "Katedan",
      areaName: "Shamshabad",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "259460",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4444",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",

        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-katedan-shamshabad-hyderabad-259460",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "259463",
      name: "LunchBox - Meals and Thalis",
      deliveryTime: "27 mins",
      cloudinaryImageId: "cbaahw0lq7q3a9ombs8y",
      locality: "Katedan",
      areaName: "Shamshabad",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "259463",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "4925",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",

        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-katedan-shamshabad-hyderabad-259463",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "259457",
      name: "Behrouz Biryani",
      deliveryTime: "29 mins",
      cloudinaryImageId: "jexq7ehruufirq1vawmz",
      locality: "Katedan",
      areaName: "shamshabaad",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "259457",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4600,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4600,
      },
      parentId: "1803",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/behrouz-biryani-katedan-shamshabaad-hyderabad-259457",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "259456",
      name: "Faasos - Wraps & Rolls",
      deliveryTime: "26 mins",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Katedan",
      areaName: "shamshabad",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "259456",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "21809",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",

        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-katedan-shamshabad-hyderabad-259456",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "93468",
      name: "Mehfil",
      deliveryTime: "59 mins",
      cloudinaryImageId: "nqjtklympvqgiywhrtfe",
      locality: "Uddamgudda Circle",
      areaName: "Chandrayangutta",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "North Indian", "Tandoor", "Chinese", "Kebabs"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "93468",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "637",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 59,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",

        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-1d5819ff-afb5-416e-aab3-0c6a5cf89822",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mehfil-uddamgudda-circle-chandrayangutta-hyderabad-93468",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <ReataurantCard restrauntData={restaurantList[8]} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
