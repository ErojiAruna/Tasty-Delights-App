import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <a href="/">
    <img
      alt="Tasty Delights Logo"
      className="logo"
      src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t39.30808-6/243074583_280245397287740_7524579202904818768_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ibA-3TtEjBsAX9ru3Ny&_nc_ht=scontent.fhyd2-1.fna&oh=00_AfAGXxnb5fpdWc9lZQD69DNVuhG36MBDbLoqnb8iROKGcQ&oe=64C2EE90"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav__items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Config Driven UI

const restaurantList = [
  {
    cardType: 'restaurant',
    layoutAlignmentType: 'VERTICAL',
    data: {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '107827',
        name: 'Asoka Restaurant',
        uuid: '967d3934-4c3a-4a95-84a5-d3481868ddfb',
        city: '3',
        area: 'Abids & Koti',
        totalRatingsString: '',
        cloudinaryImageId: 'fegei0e2nqd7svcdpwa0',
        cuisines: [
          'North Indian',
          'Chinese',
          'Hyderabadi',
          'Fast Food',
          'Tandoor',
          'Seafood',
          'Snacks',
        ],
        tags: [],
        costForTwo: 45000,
        costForTwoString: '₹450 FOR TWO',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        slaString: '21 MINS',
        lastMileTravel: 0,
        slugs: {
          restaurant: 'asoka-restaurant-ameerpet-ameerpet',
          city: 'Hyderabad',
        },
        cityState: '3',
        address: '',
        locality: 'Osmangunj',
        parentId: 19704,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfoV2: {
          header: '',
          shortDescriptionList: [],
          descriptionList: [],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'BASE_TIME',
              fee: 0,
              message: '',
            },
            {
              name: 'BASE_DISTANCE',
              fee: 3100,
              message: '',
            },
            {
              name: 'ANCILLARY_SURGE_FEE',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3100,
          message: '',
          title: 'Delivery Charge',
          amount: '3100',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID:
          'cid=7555939~p=1~eid=00000189-84cc-c4fb-3080-e4a0008a015d~srvts=1690150159611~83649',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.6 kms',
        hasSurge: false,
        cta: {
          link: 'swiggy://menu?restaurant_id=107827&source=collection&query=Biryani',
          type: 'DEEPLINK',
          text: 'RESTAURANT_MENU',
        },
        sla: {
          restaurantId: '',
          deliveryTime: 21,
          minDeliveryTime: 21,
          maxDeliveryTime: 21,
          lastMileTravel: 0,
          lastMileDistance: 1.6,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: true,
        avgRating: '3.7',
        totalRatings: 0,
        new: false,
      },
      subtype: 'basic',
    },
    parentWidget: false,
  },
  {
    cardType: 'restaurant',
    layoutAlignmentType: 'VERTICAL',
    data: {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '214809',
        name: 'Hotel Niagara - Since 1969',
        uuid: 'd8a51204-2047-4372-820f-7c0885e4130c',
        city: '3',
        area: 'Chaderghat',
        totalRatingsString: '',
        cloudinaryImageId: 'btea7jwuwkbgd0nebcyd',
        cuisines: ['Biryani', 'Kebabs', 'Mughlai'],
        tags: [],
        costForTwo: 45000,
        costForTwoString: '₹450 FOR TWO',
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        slaString: '21 MINS',
        lastMileTravel: 0,
        slugs: {
          restaurant: 'hotel-niagara-new-area-sainikpuri---test',
          city: 'Hyderabad',
        },
        cityState: '3',
        address: '',
        locality: 'Himayath Nagar',
        parentId: 19244,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfoV2: {
          header: '',
          shortDescriptionList: [],
          descriptionList: [],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'BASE_TIME',
              fee: 0,
              message: '',
            },
            {
              name: 'BASE_DISTANCE',
              fee: 3100,
              message: '',
            },
            {
              name: 'ANCILLARY_SURGE_FEE',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 3100,
          message: '',
          title: 'Delivery Charge',
          amount: '3100',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '1.2 kms',
        hasSurge: false,
        cta: {
          link: 'swiggy://menu?restaurant_id=214809&source=collection&query=Biryani',
          type: 'DEEPLINK',
          text: 'RESTAURANT_MENU',
        },
        sla: {
          restaurantId: '',
          deliveryTime: 21,
          minDeliveryTime: 21,
          maxDeliveryTime: 21,
          lastMileTravel: 0,
          lastMileDistance: 1.2,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '3.8',
        totalRatings: 0,
        new: false,
      },
      subtype: 'basic',
    },
    parentWidget: false,
  },
  {
    cardType: 'restaurant',
    layoutAlignmentType: 'VERTICAL',
    data: {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '71645',
        name: 'Hotel City Diamond',
        uuid: '41225a16-5caf-438f-bb35-4e58e44b6cc3',
        city: '3',
        area: 'Mehdipatnam',
        totalRatingsString: '',
        cloudinaryImageId: 'aazgbauddvyymntsmtm7',
        cuisines: ['Biryani', 'Hyderabadi'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 54,
        minDeliveryTime: 54,
        maxDeliveryTime: 54,
        slaString: '54 MINS',
        lastMileTravel: 0,
        slugs: {
          restaurant: 'hotel-city-diamond-mehdipatnam-mehdipatnam',
          city: 'Hyderabad',
        },
        cityState: '3',
        address: '',
        locality: 'Mehdipatnam X Roads',
        parentId: 398972,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'BASE_DISTANCE',
              fee: 7400,
              message: '',
            },
            {
              name: 'BASE_TIME',
              fee: 0,
              message: '',
            },
            {
              name: 'ANCILLARY_SURGE_FEE',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 7400,
          message: '',
          title: 'Delivery Charge',
          amount: '7400',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '6.5 kms',
        hasSurge: false,
        cta: {
          link: 'swiggy://menu?restaurant_id=71645&source=collection&query=Biryani',
          type: 'DEEPLINK',
          text: 'RESTAURANT_MENU',
        },
        sla: {
          restaurantId: '',
          deliveryTime: 54,
          minDeliveryTime: 54,
          maxDeliveryTime: 54,
          lastMileTravel: 0,
          lastMileDistance: 6.5,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.2',
        totalRatings: 0,
        new: false,
      },
      subtype: 'basic',
    },
    parentWidget: false,
  },
  {
    cardType: 'restaurant',
    layoutAlignmentType: 'VERTICAL',
    data: {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '661672',
        name: 'Hotel City Diamond',
        uuid: 'f229c037-017a-4695-ae05-98b760420fd0',
        city: '3',
        area: 'Asif Nagar',
        totalRatingsString: '',
        cloudinaryImageId: 'b328134beb7b0f5fe017b0cbf3515595',
        cuisines: ['Indian', 'Biryani'],
        tags: [],
        costForTwo: 25000,
        costForTwoString: '₹250 FOR TWO',
        deliveryTime: 48,
        minDeliveryTime: 48,
        maxDeliveryTime: 48,
        slaString: '48 MINS',
        lastMileTravel: 0,
        slugs: {
          restaurant: 'hotel-city-diamond-mehdipatnam-mehdipatnam-2',
          city: 'Hyderabad',
        },
        cityState: '3',
        address: '',
        locality: 'Jagadamba Nagar',
        parentId: 19812,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'BASE_DISTANCE',
              fee: 4700,
              message: '',
            },
            {
              name: 'BASE_TIME',
              fee: 0,
              message: '',
            },
            {
              name: 'ANCILLARY_SURGE_FEE',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 4700,
          message: '',
          title: 'Delivery Charge',
          amount: '4700',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '4.7 kms',
        hasSurge: false,
        cta: {
          link: 'swiggy://menu?restaurant_id=661672&source=collection&query=Biryani',
          type: 'DEEPLINK',
          text: 'RESTAURANT_MENU',
        },
        sla: {
          restaurantId: '',
          deliveryTime: 48,
          minDeliveryTime: 48,
          maxDeliveryTime: 48,
          lastMileTravel: 0,
          lastMileDistance: 4.7,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.0',
        totalRatings: 0,
        new: false,
      },
      subtype: 'basic',
    },
    parentWidget: false,
  },
  {
    cardType: 'restaurant',
    layoutAlignmentType: 'VERTICAL',
    data: {
      type: 'restaurant',
      data: {
        type: 'F',
        id: '83598',
        name: 'Sultan Darbar',
        uuid: '6104a99f-a10c-479a-906c-548960b30113',
        city: '3',
        area: 'Mehdipatnam',
        totalRatingsString: '',
        cloudinaryImageId: 'bzhrjueur3fkldiryfdf',
        cuisines: ['Biryani', 'Chinese', 'Tandoor', 'North Indian', 'Desserts'],
        tags: [],
        costForTwo: 30000,
        costForTwoString: '₹300 FOR TWO',
        deliveryTime: 52,
        minDeliveryTime: 52,
        maxDeliveryTime: 52,
        slaString: '52 MINS',
        lastMileTravel: 0,
        slugs: {
          restaurant: 'sultan-darbar-masab-tank-mehdipatnam',
          city: 'Hyderabad',
        },
        cityState: '3',
        address: '',
        locality: 'Asif Nagar',
        parentId: 19769,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfoV2: {
          header: '',
          shortDescriptionList: [],
          descriptionList: [],
          subHeader: '',
          headerType: 0,
          superFreedel: '',
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: 'BASE_DISTANCE',
              fee: 6400,
              message: '',
            },
            {
              name: 'BASE_TIME',
              fee: 0,
              message: '',
            },
            {
              name: 'ANCILLARY_SURGE_FEE',
              fee: 0,
              message: '',
            },
          ],
          totalFees: 6400,
          message: '',
          title: 'Delivery Charge',
          amount: '6400',
          icon: '',
        },
        availability: {
          opened: true,
          nextOpenMessage: '',
          nextCloseMessage: '',
        },
        longDistanceEnabled: 0,
        rainMode: 'NONE',
        thirdPartyAddress: false,
        thirdPartyVendor: '',
        adTrackingID: '',
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: '5 kms',
        hasSurge: false,
        cta: {
          link: 'swiggy://menu?restaurant_id=83598&source=collection&query=Biryani',
          type: 'DEEPLINK',
          text: 'RESTAURANT_MENU',
        },
        sla: {
          restaurantId: '',
          deliveryTime: 52,
          minDeliveryTime: 52,
          maxDeliveryTime: 52,
          lastMileTravel: 0,
          lastMileDistance: 5,
          serviceability: 'SERVICEABLE',
          rainMode: 'NONE',
          preferentialService: false,
          iconType: 'EMPTY',
        },
        promoted: false,
        avgRating: '4.1',
        totalRatings: 0,
        new: false,
      },
      subtype: 'basic',
    },
    parentWidget: false,
  },
];

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/54af338bf7ebf530280e8fea413ed449' +
          restaurantList.cloudinaryImageId
        }
      />
      <h2>{restaurantList[0].data?.name}</h2>
      <h3>{restaurantList[0].data?.cuisines}</h3>
      <h4>{restaurantList[0].data?.avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant__list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(<AppLayout />);
