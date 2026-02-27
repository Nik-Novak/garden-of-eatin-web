//preload.ts
import { database } from "../database/database";
import { Prisma } from "@prisma/client";

export default async function preloadDatabase(){
  console.log('STARTING MIGRATION');

  const meals:Prisma.MealCreateInput[] = [
    {
      approved: true,
      name: "Serve Love - Sunday Night",
      place:{
        address: '1675 Garnet ave, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2417596, 32.7998966] },
      },
      location: { type:'Point', coordinates:[-117.239094, 32.799691] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-18T00:00:00.000+00:00',
        reference_dates:[],
        times:[
          {
            start: 57_600_000,  //4pm
            end: 68_400_000     //7pm
          }
        ],
        recurrence_rules:[
          {
            weekday:'Sunday'
          }
        ]
      },
      service: 'ServedToYou',
      parking: 'OnPremise',
      setting: ['Indoors', 'Outdoors'],
      features: ['VeganOptions', 'WifiAvailable', 'Outlets', 'Seating', 'Coffee', 'Snacks', 'Donations', 'Entertainment', 'Medical', 'PetFriendly', 'PetSupplies'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "CCSA - Weekday Lunch",
      place:{
        address: '1675 Garnet ave, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2417596, 32.7998966] },
      },
      location: { type:'Point', coordinates:[-117.23944681500103, 32.79956874884409] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-19T00:00:00.000+00:00',
        reference_dates:[],
        times:[
          {
            start: 36_000_000,  //10am
            end: 54_900_000     //3:15pm
          }
        ],
        recurrence_rules:[
          {
            weekday:'Monday'
          },
          {
            weekday:'Tuesday'
          },
          {
            weekday:'Wednesday'
          },
          {
            weekday:'Thursday'
          },
          {
            weekday:'Friday'
          },
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: ['Outdoors'],
      features: ['VeganOptions', 'WifiAvailable', 'Snacks', 'Donations', 'PetFriendly', 'PetSupplies'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "La Jolla Presbyterian - Sack Lunch",
      place:{
        address: '7715 Draper Ave, La Jolla, CA 92037',
        location: { type:'Point', coordinates:[-117.2793661, 32.843035] },
      },
      location: { type:'Point', coordinates:[-117.27660890204675, 32.84324224724147] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-12T00:00:00.000+00:00',
        reference_dates:[],
        times:[
          {
            start: 34_200_000,  //9:30am
            end: 37_800_000     //10:30am
          }
        ],
        recurrence_rules:[
          {
            weekday:'Monday'
          },
          {
            weekday:'Thursday'
          },
        ]
      },
      service: 'ServedInLine',
      parking: 'Street',
      setting: [],
      features: ['Snacks'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "St Brigid - Meatloaf Monday",
      place:{
        address: '1001 Missouri St, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2547083, 32.8010646] },
      },
      location: { type:'Point', coordinates:[-117.25217638327793, 32.80106184706389] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Monthly',
        every: 1,
        start_date: '2026-01-12T00:00:00.000+00:00',
        reference_dates:[],
        times:[
          {
            start: 64_800_000,  //6pm
            end: 70_200_000     //7:30pm
          }
        ],
        recurrence_rules:[
          {
            ordinal: 2,
            weekday: 'Monday'
          },
          {
            ordinal: 4,
            weekday: 'Monday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: ['Indoors'],
      features: ['Seating', 'Donations', 'Snacks'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "Sacred Heart - Sack Dinner & Groceries",
      place:{
        address: '4776 Saratoga Ave, San Diego, CA 92107',
        location: { type:'Point', coordinates:[-117.2481749, 32.7464126] },
      },
      location: { type:'Point', coordinates:[-117.24576347362918, 32.746343913558775] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 2,
        start_date: '2025-07-22T00:00:00.000+00:00',
        reference_dates:[],
        times:[
          {
            start: 61_200_000,  //5pm
            end: 63_000_000     //5:30pm
          }
        ],
        recurrence_rules:[
          {
            weekday: 'Tuesday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'Street',
      setting: [],
      features: ['PetFriendly', 'Groceries', 'Snacks'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "St Andrews - Dinner by the Sea",
      place:{
        address: '1050 Thomas Ave, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2528206, 32.7949122] },
      },
      // address: '1050 Thomas Ave, San Diego, CA 92109',
      location: { type:'Point', coordinates:[-117.24973871856234, 32.794895473126964] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-13T00:00:00.000+00:00',
        reference_dates: [],
        times:[
          {
            start: 66_600_000,  //6:30pm
            end: 70_200_000     //7:30pm
          }
        ],
        recurrence_rules:[
          {
            weekday: 'Tuesday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'Street',
      setting: ['Indoors'],
      features: ['WifiAvailable', 'Seating', 'Coffee', 'Snacks', 'PetFriendly'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "God's Kitchen - Wednesday Breakfast",
      place:{
        address: '3209 Gleason Rd, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2468395, 32.7700926] },
      },
      location: { type:'Point', coordinates:[-117.243949, 32.769971] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-14T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 28_800_000,  //8am
            end: 30_600_000     //8:30am
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Wednesday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: ['Outdoors'],
      features: ['WifiAvailable', 'Seating', 'Coffee', 'PetFriendly'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "United Methodist - Grab n Go",
      place:{
        address: '1561 Thomas Ave, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2427479, 32.7965371] },
      },
      location: { type:'Point', coordinates:[-117.24048144407413, 32.7964886287792] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-14T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 57_600_000,  //4pm
            end: 59_400_000     //4:30pm
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Wednesday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: [],
      features: ['VeganOptions', 'Coffee', 'PetFriendly', 'Donations', 'Groceries', 'Snacks'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "EDSD - Dinner n Groceries",
      place:{
        address: '2083 Sunset Cliffs Blvd, San Diego, CA 92107',
        location: { type:'Point', coordinates:[-117.2473319, 32.7476276] },
      },
      location: { type:'Point', coordinates:[-117.244824, 32.747794] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-14T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 64_800_000,  //6pm
            end: 70_200_000     //7:30pm
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Wednesday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'Street',
      // setting: [],
      features: ['Outlets', 'Seating', 'Coffee', 'PetFriendly', 'Donations', 'Groceries', 'Snacks', 'Entertainment'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "God's Kitchen - Thursday Soup n Sandwich",
      place:{
        address: '3209 Gleason Rd, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2468395, 32.7700926] },
      },
      location: { type:'Point', coordinates:[-117.243596, 32.769974] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-15T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 39_600_000,  //11am
            end: 41_400_000     //11:30am
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Thursday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: ['Outdoors'],
      features: ['WifiAvailable', 'Seating', 'PetFriendly'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "God's Kitchen - Thursday Grill n Chill",
      place:{
        address: '3209 Gleason Rd, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2468395, 32.7700926] },
      },
      // address: '3209 Gleason Rd, San Diego, CA 92109',
      location: { type:'Point', coordinates:[-117.243596, 32.769974] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-15T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 55_800_000,  //3:30pm
            end: 57_600_000     //4pm
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Thursday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: ['Outdoors'],
      features: ['Outlets', 'WifiAvailable', 'Seating', 'Entertainment', 'PetFriendly'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "Lutheran Church - Friday Lunch",
      place:{
        address: '4761 Cass St, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2552861, 32.8016305] },
      },
      // address: '4761 Cass St, San Diego, CA 92109',
      location: { type:'Point', coordinates:[-117.252585, 32.801619] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-16T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 41_400_000,  //11:30am
            end: 45_000_000     //12:30pm
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Friday'
          }
        ]
      },
      service: 'ServedToYou',
      parking: 'OnPremise',
      setting: ['Indoors'],
      features: ['Outlets', 'Seating', 'Coffee'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "Small Potatoes - Saturday Brunch",
      place:{
        address: '1050 Thomas Ave, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2528206, 32.7949122] },
      },
      // address: '1050 Thomas Ave, San Diego, CA 92109',
      location: { type:'Point', coordinates:[-117.249986, 32.794860] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Weekly',
        every: 1,
        start_date: '2026-01-17T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 37_800_000,  //10:30am
            end: 39_600_000     //11:30am
          }
        ],
        recurrence_rules: [
          {
            weekday: 'Saturday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'Street',
      setting: ['Outdoors'],
      features: ['VeganOptions', 'WifiAvailable', 'Coffee', 'PetFriendly', 'PetSupplies'],
      stats: {views:0, navigations:0}
    },
    {
      approved: true,
      name: "Saturday Grill n Giftcards",
      place:{
        address: '3209 Gleason Rd, San Diego, CA 92109',
        location: { type:'Point', coordinates:[-117.2468395, 32.7700926] },
      },
      location: { type:'Point', coordinates:[-117.24322922399266, 32.770384421812274] },
      timezone: 'America/Los_Angeles',
      schedule: {
        type: 'Monthly',
        every: 1,
        start_date: '2026-01-31T00:00:00.000+00:00',
        reference_dates: [],
        times: [
          {
            start: 41_400_000,  //11:30am
            end: 45_000_000     //12:30pm
          }
        ],
        recurrence_rules: [
          {
            ordinal: -1,
            weekday: 'Saturday'
          }
        ]
      },
      service: 'ServedInLine',
      parking: 'OnPremise',
      setting: ['Outdoors'],
      features: ['Outlets', 'WifiAvailable', 'Seating', 'Entertainment', 'PetFriendly'],
      stats: {views:0, navigations:0}
    },
  ];

  for(let meal of meals){
    console.log(`Preloading DB with ${meal.name} @ ${meal.location.coordinates}...`);
    try{
      let result = await database.meal.createOrFind({data:meal},{where:{name: meal.name, place:{is:{address:meal.place.address}}}});
      if(result.created)
        console.log(`Created new meal with ID: ${result.document.id}`);
      else
        console.log(`Existing meal was found with ID: ${result.document.id}`);
    }catch(err){
      console.log(`Something went wrong preloading meal ${meal.name} @ ${meal.location.coordinates}`);
      console.error(err);
    }
  }

  console.log('COMPLETED MIGRATION');
}


//sunset 5:30 donations, some pet supplies (crystal pier)