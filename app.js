import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *      Logo
 *      Nav items
 * 
 * Body
 *     > Restaurent Container
 *         > Restaurent Card
 *              -Img
 *              -Name of res, Star rating, Cuisine, Delivery Time
 * 
 * Footer
 *      Copyrights
 *      Links
 *      Address
 *      Contact
 */
const Header = () => {
    return(
        <div className="header">
            <div className="Logo">
                <img src="https://static.thenounproject.com/png/4418279-200.png"></img>
            </div>

            <div className="NAV-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const restList = [
    {
  "storeUuid": "5319784a-bd3e-4156-bee8-ff4ac8e85c5d",
  "title": {
    "text": "Tahini's"
  },
  "meta": [
    {
      "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
      "badgeType": "MembershipBenefit",
      "badgeDataWithFallback": {
        "membership": {
          "brandingType": "UBER_ONE"
        },
        "type": "membership"
      }
    },
    {
      "text": "$1.99 Delivery Fee",
      "textFormat": "<span><span style=\"color:#3a3a48\">$1.99 Delivery Fee</span></span>",
      "badgeType": "FARE",
      "badgeData": {
        "fare": {
          "isSurge": false,
          "deliveryFee": "$1.99 Delivery Fee",
          "serviceFee": ""
        },
        "type": "fare"
      }
    },
    {
      "text": "15–30 min",
      "accessibilityText": "Delivered in 15 to 30 min",
      "badgeType": "ETD"
    }
  ],
  "rating": {
    "text": "4.5",
    "accessibilityText": "Rated 4.5 out of 5 stars based on 82 reviews.",
    "badgeType": "RATINGS"
  },
  "actionUrl": "/store/tahinis-whitby/Uxl4Sr0-QVa-6P9KyOhcXQ?diningMode=DELIVERY",
  "favorite": false,
  "image": {
    "items": [
      {
        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f1088bb60ae4aee7f49f5bf9e16887f2/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
        "width": 2880,
        "height": 2304
      },
      {
        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f1088bb60ae4aee7f49f5bf9e16887f2/719c6bd2757b08684c0faae44d43159d.jpeg",
        "width": 1080,
        "height": 864
      },
      {
        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f1088bb60ae4aee7f49f5bf9e16887f2/93b5fd796682c6d5302cd5bec164fe90.jpeg",
        "width": 750,
        "height": 600
      },
      {
        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f1088bb60ae4aee7f49f5bf9e16887f2/97e6648b3593c29cb4a6335f976e6d84.jpeg",
        "width": 640,
        "height": 512
      },
      {
        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f1088bb60ae4aee7f49f5bf9e16887f2/a70f5c9df440d10213e93244e9eb7cad.jpeg",
        "width": 550,
        "height": 440
      },
      {
        "url": "https://tb-static.uber.com/prod/image-proc/processed_images/f1088bb60ae4aee7f49f5bf9e16887f2/97ef7458dde62fa918635bc21265d9f5.jpeg",
        "width": 240,
        "height": 192
      }
    ]
  },
  "signposts": [
    {
      "backgroundColor": {
        "color": "#0E8345"
      },
      "text": "Buy 1, Get 1 Free",
      "textColor": {
        "color": "#FFFFFF"
      }
    }
  ],
  "tracking": {
    "metaInfo": {
      "pluginName": "StorefrontFeedPlugin",
      "analyticsLabel": "store_front",
      "verticalType": "UNKNOWN",
      "category": "",
      "subcategory": "",
      "surfaceAreaV2": "HOME_FEED"
    },
    "storePayload": {
      "storeUUID": "5319784a-bd3e-4156-bee8-ff4ac8e85c5d",
      "isOrderable": true,
      "score": {
        "breakdown": {
          "ConversionRate_boosting_factor": 1,
          "FinalScore": 0.2698987026421692,
          "PredictionScore": 0.05930740982294082,
          "conversion_rate_partial_score": 0.04799965023994446,
          "ctr_partial_score": 0.12338471412658691,
          "net_inflow_boosting_factor": 0.2334,
          "net_inflow_partial_score": 15.112607043155695,
          "service_quality_boosting_factor": 0,
          "service_quality_partial_score": 0.9763754606246948,
          "t120d_eyeball_count": 19432,
          "t120d_request_count": 1525,
          "ucb_bandit_boosting_factor": 0.774,
          "ucb_bandit_partial_score": 0.02944854780627363
        },
        "total": 0.2698987026421692
      },
      "etdInfo": {
        "dropoffETARange": {
          "min": 15,
          "max": 30,
          "raw": 25
        }
      },
      "fareInfo": {
        "serviceFee": 1.99,
        "dynamicBookingFeeTier": 0
      },
      "promotionUUID": "43bb9539-f363-4619-ab96-feff2c00ca94",
      "scheduleTimeSlots": null,
      "isDBF": true,
      "storeAvailablityState": "UNKNOWN",
      "offerMetadata": {
        "analyticsUUID": "d9131a0d-d2a9-4e5f-a5c9-ebec954ba635",
        "promotionUUIDs": [
          "43bb9539-f363-4619-ab96-feff2c00ca94"
        ],
        "offerTypeCount": 1,
        "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
      }
    }
  },
  "mapMarker": {
    "latitude": 43.9187,
    "longitude": -78.9598,
    "zIndex": 9919,
    "description": {
      "title": "Tahini's",
      "color": "CONTENT_PRIMARY",
      "backgroundColor": "BACKGROUND_PRIMARY",
      "selectedColor": "CONTENT_PRIMARY",
      "selectedBackgroundColor": "BACKGROUND_PRIMARY"
    },
    "markerContent": {
      "color": "CONTENT_PRIMARY",
      "selectedColor": "CONTENT_INVERSE_PRIMARY",
      "backgroundColor": "BACKGROUND_PRIMARY",
      "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
      "text": "4.5",
      "size": "SPACING_UNIT_4X"
    },
    "secondaryMarkerContent": {
      "color": "CONTENT_POSITIVE",
      "selectedColor": "CONTENT_INVERSE_PRIMARY",
      "backgroundColor": "BACKGROUND_PRIMARY",
      "selectedBackgroundColor": "BACKGROUND_POSITIVE",
      "icon": "TAG"
    }
  },
  "meta2": null,
  "storyIconPayload": {
    "isIconVisible": false
  },
  "endorsements": null,
  "meta4": null,
  "promotionConfiguration": {
    "regularPromotionConfiguration": {}
  }
    },

    {
    "storeUuid": "1b21154d-d433-59dd-9d26-c119d6857845",
    "title": {
        "text": "Extreme Burrito"
    },
    "meta": [
        {
            "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
            "badgeType": "MembershipBenefit",
            "badgeDataWithFallback": {
                "membership": {
                    "brandingType": "UBER_ONE"
                },
                "type": "membership"
            }
        },
        {
            "text": "$0.99 Delivery Fee",
            "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
            "badgeType": "FARE",
            "badgeData": {
                "fare": {
                    "isSurge": false,
                    "deliveryFee": "$0.99 Delivery Fee",
                    "serviceFee": ""
                },
                "type": "fare"
            }
        },
        {
            "text": "25–40 min",
            "accessibilityText": "Delivered in 25 to 40 min",
            "badgeType": "ETD"
        }
    ],
    "rating": {
        "text": "4.7",
        "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on more than 200 reviews.",
        "badgeType": "RATINGS"
    },
    "actionUrl": "/store/extreme-burrito/GyEVTdQzWd2dJsEZ1oV4RQ?diningMode=DELIVERY",
    "favorite": false,
    "image": {
        "items": [
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/057b612b1499f2159afb612941fb5429/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                "width": 2391,
                "height": 1912
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/057b612b1499f2159afb612941fb5429/719c6bd2757b08684c0faae44d43159d.jpeg",
                "width": 1080,
                "height": 863
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/057b612b1499f2159afb612941fb5429/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                "width": 750,
                "height": 599
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/057b612b1499f2159afb612941fb5429/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                "width": 640,
                "height": 511
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/057b612b1499f2159afb612941fb5429/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                "width": 550,
                "height": 439
            },
            {
                "url": "https://tb-static.uber.com/prod/image-proc/processed_images/057b612b1499f2159afb612941fb5429/97ef7458dde62fa918635bc21265d9f5.jpeg",
                "width": 240,
                "height": 191
            }
        ]
    },
    "signposts": [
        {
            "backgroundColor": {
                "color": "#0E8345"
            },
            "text": "Buy 1, Get 1 Free",
            "textColor": {
                "color": "#FFFFFF"
            }
        }
    ],
    "tracking": {
        "metaInfo": {
            "pluginName": "StorefrontFeedPlugin",
            "analyticsLabel": "store_front",
            "verticalType": "UNKNOWN",
            "category": "",
            "subcategory": "",
            "surfaceAreaV2": "HOME_FEED"
        },
        "storePayload": {
            "storeUUID": "1b21154d-d433-59dd-9d26-c119d6857845",
            "isOrderable": true,
            "score": {
                "breakdown": {
                    "ConversionRate_boosting_factor": 1,
                    "FinalScore": 0.05183584716913987,
                    "PredictionScore": 0.008541212975978851,
                    "conversion_rate_partial_score": 0.007485240697860718,
                    "ctr_partial_score": 0.014525055885314941,
                    "net_inflow_boosting_factor": 0.2334,
                    "net_inflow_partial_score": 21.557846673563837,
                    "service_quality_boosting_factor": 0,
                    "service_quality_partial_score": 0.9759699106216431,
                    "t120d_eyeball_count": 76838,
                    "t120d_request_count": 4388,
                    "ucb_bandit_boosting_factor": 0.774,
                    "ucb_bandit_partial_score": 0.039032027771795944
                },
                "total": 0.05183584716913987
            },
            "etdInfo": {
                "dropoffETARange": {
                    "min": 25,
                    "max": 40,
                    "raw": 35
                }
            },
            "fareInfo": {
                "serviceFee": 0.99,
                "dynamicBookingFeeTier": 0
            },
            "promotionUUID": "10db41a6-518c-4b5f-a2b9-35c936de3e3b",
            "scheduleTimeSlots": null,
            "isDBF": true,
            "storeAvailablityState": "UNKNOWN",
            "offerMetadata": {
                "analyticsUUID": "8791cd3c-82a9-4b68-96cb-b764a2220fe6",
                "promotionUUIDs": [
                    "10db41a6-518c-4b5f-a2b9-35c936de3e3b"
                ],
                "offerTypeCount": 1,
                "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
            }
        }
    },
    "mapMarker": {
        "latitude": 43.849,
        "longitude": -79.0716,
        "zIndex": 9765,
        "description": {
            "title": "Extreme Burrito",
            "color": "CONTENT_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedColor": "CONTENT_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_PRIMARY"
        },
        "markerContent": {
            "color": "CONTENT_PRIMARY",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
            "text": "4.7",
            "size": "SPACING_UNIT_4X"
        },
        "secondaryMarkerContent": {
            "color": "CONTENT_POSITIVE",
            "selectedColor": "CONTENT_INVERSE_PRIMARY",
            "backgroundColor": "BACKGROUND_PRIMARY",
            "selectedBackgroundColor": "BACKGROUND_POSITIVE",
            "icon": "TAG"
        }
    },
    "meta2": null,
    "storyIconPayload": {
        "isIconVisible": false
    },
    "endorsements": null,
    "meta4": null,
    "promotionConfiguration": {
        "regularPromotionConfiguration": {}
    }
    },

    {
        "storeUuid": "18b3d1c3-4b6f-50c0-b2b0-256ea19f5362",
        "title": {
            "text": "Chorizo Fresh Mex"
        },
        "meta": [
            {
                "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
                "badgeType": "MembershipBenefit",
                "badgeDataWithFallback": {
                    "membership": {
                        "brandingType": "UBER_ONE"
                    },
                    "type": "membership"
                }
            },
            {
                "text": "$0.99 Delivery Fee",
                "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$0.99 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "10–25 min",
                "accessibilityText": "Delivered in 10 to 25 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.1",
            "accessibilityText": "Rated 4.1 out of 5 stars based on 48 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/chorizo-fresh-mex-whitby/GLPRw0tvUMCysCVuoZ9TYg?diningMode=DELIVERY",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64a5682b2db8f714ce78c1d1f71d77ef/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64a5682b2db8f714ce78c1d1f71d77ef/719c6bd2757b08684c0faae44d43159d.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64a5682b2db8f714ce78c1d1f71d77ef/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64a5682b2db8f714ce78c1d1f71d77ef/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64a5682b2db8f714ce78c1d1f71d77ef/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/64a5682b2db8f714ce78c1d1f71d77ef/97ef7458dde62fa918635bc21265d9f5.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Buy 1, Get 1 Free</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "StorefrontFeedPlugin",
                "analyticsLabel": "store_front",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED"
            },
            "storePayload": {
                "storeUUID": "18b3d1c3-4b6f-50c0-b2b0-256ea19f5362",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRate_boosting_factor": 1,
                        "FinalScore": 0.051201352078084045,
                        "PredictionScore": 0.008475221693515778,
                        "conversion_rate_partial_score": 0.006663590669631958,
                        "ctr_partial_score": 0.018741130828857422,
                        "net_inflow_boosting_factor": 0.2334,
                        "net_inflow_partial_score": 21.34867862981256,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9556350708007812,
                        "t120d_eyeball_count": 26746,
                        "t120d_request_count": 703,
                        "ucb_bandit_boosting_factor": 0.774,
                        "ucb_bandit_partial_score": 0.06640576085479812
                    },
                    "total": 0.051201352078084045
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 10,
                        "max": 25,
                        "raw": 20
                    }
                },
                "fareInfo": {
                    "serviceFee": 0.99,
                    "dynamicBookingFeeTier": 0
                },
                "promotionUUID": "b189d9ec-686b-46ec-bb15-ad071ff3fdac",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN",
                "offerMetadata": {
                    "analyticsUUID": "bb487d6c-8606-470e-99e4-1ec815fdf771",
                    "promotionUUIDs": [
                        "b189d9ec-686b-46ec-bb15-ad071ff3fdac",
                        "5cc56c38-b162-49bd-a03b-32132bc6f0f0",
                        "7af6629c-e0df-4ad2-9699-e66f085b6265",
                        "91db458a-98c5-446d-8382-811de78e5a91"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 43.9196,
            "longitude": -78.9499,
            "zIndex": 9760,
            "description": {
                "title": "Chorizo Fresh Mex",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.1",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },

    {
        "storeUuid": "3289cd04-2a6d-5b53-8929-07ce4273a8c8",
        "title": {
            "text": "Wing Mania"
        },
        "meta": [
            {
                "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
                "badgeType": "MembershipBenefit",
                "badgeDataWithFallback": {
                    "membership": {
                        "brandingType": "UBER_ONE"
                    },
                    "type": "membership"
                }
            },
            {
                "text": "$0.99 Delivery Fee",
                "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$0.99 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "25–40 min",
                "accessibilityText": "Delivered in 25 to 40 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "3.9",
            "accessibilityText": "Rated 3.9 out of 5 stars based on 24 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/wing-mania-ajax/MonNBCptW1OJKQfOQnOoyA?diningMode=DELIVERY",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/808fd63540893b8b195fde2b279096b1/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/808fd63540893b8b195fde2b279096b1/719c6bd2757b08684c0faae44d43159d.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/808fd63540893b8b195fde2b279096b1/93b5fd796682c6d5302cd5bec164fe90.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/808fd63540893b8b195fde2b279096b1/97e6648b3593c29cb4a6335f976e6d84.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/808fd63540893b8b195fde2b279096b1/a70f5c9df440d10213e93244e9eb7cad.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/808fd63540893b8b195fde2b279096b1/97ef7458dde62fa918635bc21265d9f5.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "iconUrl": "https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png",
                "text": " Top Offer • Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                },
                "textFormat": "<span><img src=\"https://cn-geo1.uber.com/static/mobile-content/offers/trophy.png\" width=\"10\" height=\"11\" vertical-align=\"middle\"/> Top Offer • Buy 1, Get 1 Free</span>"
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "StorefrontFeedPlugin",
                "analyticsLabel": "store_front",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED"
            },
            "storePayload": {
                "storeUUID": "3289cd04-2a6d-5b53-8929-07ce4273a8c8",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRate_boosting_factor": 1,
                        "FinalScore": 0.05179750418347126,
                        "PredictionScore": 0.005963179469108581,
                        "conversion_rate_partial_score": 0.004770517349243164,
                        "ctr_partial_score": 0.012721598148345947,
                        "net_inflow_boosting_factor": 0.2334,
                        "net_inflow_partial_score": 31.476689326509344,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9399234056472778,
                        "t120d_eyeball_count": 940,
                        "t120d_request_count": 160,
                        "ucb_bandit_boosting_factor": 0.774,
                        "ucb_bandit_partial_score": 0.41992410131733654
                    },
                    "total": 0.05179750418347126
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 25,
                        "max": 40,
                        "raw": 35
                    }
                },
                "fareInfo": {
                    "serviceFee": 0.99,
                    "dynamicBookingFeeTier": 0
                },
                "promotionUUID": "27c3d507-019f-4777-b893-2b68037e5184",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN",
                "offerMetadata": {
                    "analyticsUUID": "83ee97e5-4566-4d8f-bd3b-d112ee713cfd",
                    "promotionUUIDs": [
                        "27c3d507-019f-4777-b893-2b68037e5184"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "offer_quality.top_offer,promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 43.8826,
            "longitude": -79.0196,
            "zIndex": 9764,
            "description": {
                "title": "Wing Mania",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "3.9",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },

    {
        "storeUuid": "a4ca2697-1947-4fe5-a34e-d94b195ff214",
        "title": {
            "text": "Vietnamese Pho"
        },
        "meta": [
            {
                "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
                "badgeType": "MembershipBenefit",
                "badgeDataWithFallback": {
                    "membership": {
                        "brandingType": "UBER_ONE"
                    },
                    "type": "membership"
                }
            },{
                "text": "$0.99 Delivery Fee",
                "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$0.99 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "30–45 min",
                "accessibilityText": "Delivered in 30 to 45 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.7",
            "accessibilityText": "A top rated restaurant with 4.7 out of 5 stars based on 135 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/vietnamese-pho/pMomlxlHT-WjTtlLGV_yFA?diningMode=DELIVERY",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/c4053bfa-106d-4be0-bd41-b6be5bda211d.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/a89c47f0-82fc-4510-a133-d6adae611b62.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/238140c4-d52d-482d-9174-6da6884789af.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/b1ea47cb-c4a7-4af0-8339-047dd8d233f8.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/fc2545d9-3968-46ec-985c-3f562edbe5df.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/32c23d09-e913-43e2-9035-953bd86aac60.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "StorefrontFeedPlugin",
                "analyticsLabel": "store_front",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED"
            },
            "storePayload": {
                "storeUUID": "a4ca2697-1947-4fe5-a34e-d94b195ff214",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRate_boosting_factor": 1,
                        "FinalScore": 0.05070614864511403,
                        "PredictionScore": 0.009592171013355254,
                        "conversion_rate_partial_score": 0.009364277124404907,
                        "ctr_partial_score": 0.010883569717407227,
                        "net_inflow_boosting_factor": 0.2334,
                        "net_inflow_partial_score": 18.090248986642298,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.97678142786026,
                        "t120d_eyeball_count": 18281,
                        "t120d_request_count": 1889,
                        "ucb_bandit_boosting_factor": 0.774,
                        "ucb_bandit_partial_score": 0.07549374105817415
                    },
                    "total": 0.05070614864511403
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 30,
                        "max": 45,
                        "raw": 40
                    }
                },
                "fareInfo": {
                    "serviceFee": 0.99,
                    "dynamicBookingFeeTier": 0
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 43.9322,
            "longitude": -78.8791,
            "zIndex": 9758,
            "description": {
                "title": "Vietnamese Pho",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.7",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },

    {
        "storeUuid": "edc2716e-4c9a-49ca-a8dc-43c034064d95",
        "title": {
            "text": "Manhattin"
        },
        "meta": [
            {
                "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
                "badgeType": "MembershipBenefit",
                "badgeDataWithFallback": {
                    "membership": {
                        "brandingType": "UBER_ONE"
                    },
                    "type": "membership"
                }
            },{
                "text": "$0.99 Delivery Fee",
                "textFormat": "<span><span style=\"color:#3a3a48\">$0.99 Delivery Fee</span></span>",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$0.99 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "25–40 min",
                "accessibilityText": "Delivered in 25 to 40 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "iconUrl": "https://d4p17acsd5wyj.cloudfront.net/bazaar/top_eats_badge.png",
            "text": "4.8",
            "accessibilityText": "A top rated restaurant with 4.8 out of 5 stars based on 35 reviews.",
            "badgeType": "TOP_EATS"
        },
        "actionUrl": "/store/manhattin/7cJxbkyaScqo3EPANAZNlQ?diningMode=DELIVERY",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/61c2f732-089e-48bc-9819-c2f840c3974a.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/dd28b4ee-4ef3-41d8-8057-ed146cbc735e.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/671cd84f-2bfb-4335-aa35-ba752e28bed9.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/e5b7228a-ba1d-4c50-afe2-cee20fceddbd.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/512139cd-cc51-4e44-8727-e7b42a5ef678.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://d1ralsognjng37.cloudfront.net/375e7de1-ac81-428c-bf5f-7cf4323d2ab9.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": null,
        "tracking": {
            "metaInfo": {
                "pluginName": "StorefrontFeedPlugin",
                "analyticsLabel": "store_front",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED"
            },
            "storePayload": {
                "storeUUID": "edc2716e-4c9a-49ca-a8dc-43c034064d95",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRate_boosting_factor": 1,
                        "FinalScore": 0.050637466342353395,
                        "PredictionScore": 0.009266182780265808,
                        "conversion_rate_partial_score": 0.008911818265914917,
                        "ctr_partial_score": 0.011274248361587524,
                        "net_inflow_boosting_factor": 0.2334,
                        "net_inflow_partial_score": 18.720562425626827,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9541410207748413,
                        "t120d_eyeball_count": 8062,
                        "t120d_request_count": 584,
                        "ucb_bandit_boosting_factor": 0.774,
                        "ucb_bandit_partial_score": 0.11561976769274783
                    },
                    "total": 0.050637466342353395
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 25,
                        "max": 40,
                        "raw": 35
                    }
                },
                "fareInfo": {
                    "serviceFee": 0.99,
                    "dynamicBookingFeeTier": 0
                },
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN"
            }
        },
        "mapMarker": {
            "latitude": 43.9688,
            "longitude": -78.9492,
            "zIndex": 9757,
            "description": {
                "title": "Manhattin",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "imageURL": "https://d4p17acsd5wyj.cloudfront.net/eatsfeed/other_icons/top_eats_cropped.png",
                "size": "SPACING_UNIT_4X"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null
    },

    {
        "storeUuid": "5fe587ac-c557-4c1a-a135-62f19a5b4d39",
        "title": {
            "text": "McDonald's"
        },
        "meta": [
            {
                "textFormat": "<span style=\"color:#9F6402\"><img src=\"https://dkl8of78aprwd.cloudfront.net/uber_one@3x.png\" width=\"14\" height=\"14\" vertical-align=\"middle\"/></span>",
                "badgeType": "MembershipBenefit",
                "badgeDataWithFallback": {
                    "membership": {
                        "brandingType": "UBER_ONE"
                    },
                    "type": "membership"
                }
            },{
                "text": "$1.99 Delivery Fee",
                "textFormat": "<span><span style=\"color:#3a3a48\">$1.99 Delivery Fee</span></span>",
                "badgeType": "FARE",
                "badgeData": {
                    "fare": {
                        "isSurge": false,
                        "deliveryFee": "$1.99 Delivery Fee",
                        "serviceFee": ""
                    },
                    "type": "fare"
                }
            },
            {
                "text": "10–25 min",
                "accessibilityText": "Delivered in 10 to 25 min",
                "badgeType": "ETD"
            }
        ],
        "rating": {
            "text": "4.4",
            "accessibilityText": "Rated 4.4 out of 5 stars based on 77 reviews.",
            "badgeType": "RATINGS"
        },
        "actionUrl": "/store/mcdonalds-4100-baldwin-st-south/X-WHrMVXTBqhNWLxmltNOQ?diningMode=DELIVERY",
        "favorite": false,
        "image": {
            "items": [
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2888a64de2c20949ce355dba8951be50/c9252e6c6cd289c588c3381bc77b1dfc.jpeg",
                    "width": 2880,
                    "height": 2304
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2888a64de2c20949ce355dba8951be50/50446f64f31cbefe66558fc47f50a9d6.jpeg",
                    "width": 1080,
                    "height": 864
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2888a64de2c20949ce355dba8951be50/f3376a06b92224efbe50167fb7cb61e4.jpeg",
                    "width": 750,
                    "height": 600
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2888a64de2c20949ce355dba8951be50/67b1ce06a25a64dc4a71581bb39c36c6.jpeg",
                    "width": 640,
                    "height": 512
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2888a64de2c20949ce355dba8951be50/7915c4a78a9f94ed56316c7c4dc0ec89.jpeg",
                    "width": 550,
                    "height": 440
                },
                {
                    "url": "https://tb-static.uber.com/prod/image-proc/processed_images/2888a64de2c20949ce355dba8951be50/e39556ef1e4c4565bc6c7dbd8b90869c.jpeg",
                    "width": 240,
                    "height": 192
                }
            ]
        },
        "signposts": [
            {
                "backgroundColor": {
                    "color": "#0E8345"
                },
                "text": "Buy 1, Get 1 Free",
                "textColor": {
                    "color": "#FFFFFF"
                }
            }
        ],
        "tracking": {
            "metaInfo": {
                "pluginName": "StorefrontFeedPlugin",
                "analyticsLabel": "store_front",
                "verticalType": "UNKNOWN",
                "category": "",
                "subcategory": "",
                "surfaceAreaV2": "HOME_FEED"
            },
            "storePayload": {
                "storeUUID": "5fe587ac-c557-4c1a-a135-62f19a5b4d39",
                "isOrderable": true,
                "score": {
                    "breakdown": {
                        "ConversionRate_boosting_factor": 1,
                        "FinalScore": 0.21344108263554748,
                        "PredictionScore": 0.04750246852636337,
                        "conversion_rate_partial_score": 0.04090633988380432,
                        "ctr_partial_score": 0.084880530834198,
                        "net_inflow_boosting_factor": 0.2334,
                        "net_inflow_partial_score": 14.873658519329535,
                        "service_quality_boosting_factor": 0,
                        "service_quality_partial_score": 0.9658198356628418,
                        "t120d_eyeball_count": 29124,
                        "t120d_request_count": 2863,
                        "ucb_bandit_boosting_factor": 0.774,
                        "ucb_bandit_partial_score": 0.026880317822841008
                    },
                    "total": 0.21344108263554748
                },
                "etdInfo": {
                    "dropoffETARange": {
                        "min": 10,
                        "max": 25,
                        "raw": 20
                    }
                },
                "fareInfo": {
                    "serviceFee": 1.99,
                    "dynamicBookingFeeTier": 0
                },
                "promotionUUID": "721eb3ba-9b96-48d6-b45d-39d40800e565",
                "scheduleTimeSlots": null,
                "isDBF": true,
                "storeAvailablityState": "UNKNOWN",
                "offerMetadata": {
                    "analyticsUUID": "c8744d6f-0c68-4df7-8c8d-9e14ce464dd8",
                    "promotionUUIDs": [
                        "721eb3ba-9b96-48d6-b45d-39d40800e565"
                    ],
                    "offerTypeCount": 1,
                    "concatSignpost": "promo.restaurant.free_item_with_cart_item_constraint"
                }
            }
        },
        "mapMarker": {
            "latitude": 43.9177,
            "longitude": -78.9595,
            "zIndex": 9717,
            "description": {
                "title": "McDonald's",
                "color": "CONTENT_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedColor": "CONTENT_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_PRIMARY"
            },
            "markerContent": {
                "color": "CONTENT_PRIMARY",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_INVERSE_PRIMARY",
                "text": "4.4",
                "size": "SPACING_UNIT_4X"
            },
            "secondaryMarkerContent": {
                "color": "CONTENT_POSITIVE",
                "selectedColor": "CONTENT_INVERSE_PRIMARY",
                "backgroundColor": "BACKGROUND_PRIMARY",
                "selectedBackgroundColor": "BACKGROUND_POSITIVE",
                "icon": "TAG"
            }
        },
        "meta2": null,
        "storyIconPayload": {
            "isIconVisible": false
        },
        "endorsements": null,
        "meta4": null,
        "promotionConfiguration": {
            "regularPromotionConfiguration": {}
        }
    },


] 

const RestaurentCard = ({restData}) => (
        <div className="res-card">
            <img 
            className="res-logo"
            alt = "dish image"
            src= {restData.image.items[3].url}>
            </img>
            <div className="Cardtext">
                <h3>{restData.title.text}</h3>
                <h4 className="Rating">Rating: {restData.rating.text} stars</h4>
                <h4 className="DeliveryTime">Delivery Time: {restData.meta[2].text}</h4>
                <h4 className="DeliveryCost">{restData.meta[1].badgeData.fare.deliveryFee}</h4>
            </div>
        </div>
);

const Body = () => (
	<div className="Body">
		<div className="SearchBar">Search</div>
        <div className="ResCardsContainer">
			{
                restList.map((x) => <RestaurentCard key = {x.storeUuid} restData={x} />)
            }
		</div>
	</div>
);
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);