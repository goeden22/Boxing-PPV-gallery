const data = [
  
    {
        index: 0,
        position: '10',
        name: "Evander Holyfield vs George Foreman",
        trivia: 'On October 25, 1990, Evander Holyfield defeated James "Buster" Douglas by third round knockout to become the Undisputed Heavyweight Champion. Prior to his match with Douglas, Holyfield delayed a potential fight with Mike Tyson, instead agreeing to face 42-year-old George Foreman for the titles should he defeat Douglas. Holyfield ultimately won the fight via unanimous decision, winning all three judges scorecards',
        revenue: '75,000,000',
        network: "HBO",
        sales: "1,400,000",
        shortname: "Holyfield vs Foreman"
    },  {
        index: 1,
        position: '09',
        name: "Oscar De La Hoya vs Felix Trinidad",
        shortname: "De la Hoya vs Trinidad",
        sales: "1,450,000",
        revenue: "$64,000,000",
        network: "HBO",
        trivia: "Billed as The Fight of the Millennium, was a boxing match held at the Mandalay Bay Events Center on the Las Vegas Strip on September 18, 1999, to unify the WBC and IBF's world Welterweight championships. Planned by promoters Bob Arum and Don King, it pitted WBC world champion Oscar de la Hoya, a Los Angeles native, versus Puerto Rican IBF world champion Félix Trinidad. It was the last of the so-called superfights of the 20th century."
    },
    {
        index: 2,
        position: '08',
        name: "Mayweather vs Shane Mosely",
        shortname: "Mayweather vs Mosley",
        sales: "1,450,000",
        revenue: "94,000,000",
        network: "HBO",
        trivia: 'Boxing welterweight non-title superfight, in which Mayweather won by unanimous decision with two judges scoring it 119–109 and one judge scoring it 118–110. The bout was held on May 1, 2010, before a "sellout" crowd of 15,117 at the MGM Grand Garden Arena in Las Vegas, Nevada, United States. Boxing greats Muhammad Ali and Mike Tyson were among a long list of celebrities in attendance. The match was put together after Andre Berto pulled out of his scheduled January 30 unification bout against Mosley. '
    },
    {
        index: 3,
        position: '07',
        name: "Mike Tyson vs Peter McNeeley",
        shortname: "Tyson vs McNeeley",
        sales: "1,550,000",
        revenue: "96,000,000",
        network: "Showtime",
        trivia: "Tyson was subsequently convicted on February 10, 1992, and then sentenced to six years in prison on March 26. After serving three years, Tyson was paroled on March 25, 1995, and on March 2, he would hold a short press conference that would announce his return to boxing as well as that Don King would remain his promoter. After much debate over who would be Tyson's first opponent in his comeback, including talks about a potential superfight with George Foreman, it was announced that Tyson would face little-known Peter McNeeley on August 19, 1995."
    },
    {
        index: 4,
        position: '06',
        name: "Evander Holyfield vs. Mike Tyson I",
        shortname: "Holyfield vs Tyson",
        sales:"1,590,000",
        revenue:"77,900,000",
        network: "Showtime",
        trivia: `Billed as "Finally", was a professional boxing match fought between Evander Holyfield and Mike Tyson for the World Boxing Association heavyweight championship on November 9, 1996 at the MGM Grand Garden Arena in Paradise, Nevada. The bout was Tyson's first defense of the WBA title that he had won from Bruce Seldon on September 7 of that year.`
    },  {
        index: 5,
        position: '05',
        name: "Mike Tyson vs Lennox Lewis",
        shortname:"Tyson vs Lewis",
        sales: "1,950,000",
        revenue: "112,000,000",
        network: "HBO & Showtime",
        trivia: `Billed as Lewis–Tyson: Is On, was a professional boxing match that took place on June 8, 2002 at the Pyramid Arena in Memphis, Tennessee. The defending unified WBC, IBF, IBO heavyweight champion Lennox Lewis defeated former undisputed heavyweight champion Mike Tyson by knockout in the eighth round. Prior to the event, Lewis was awarded the Ring magazine heavyweight title, which had been vacant since the late 1980s and was last held by Tyson. `
    },  {
        index: 6,
        position: '04',
        name: "Evander Holyfield vs. Mike Tyson II",
        shortname: "Holyfield vs Tyson",
        sales: "1,990,000",
        revenue: "100,200,000",
        network: "Showtime & Sky Box",
        trivia: `Billed as "The Sound and the Fury" and afterwards infamously referred to as "The Bite Fight", was a professional boxing match contested on June 28, 1997, for the WBA Heavyweight Championship. It achieved notoriety as one of the most bizarre fights in boxing history, after Tyson bit off part of Holyfield's ear. Tyson was disqualified from the match and lost his boxing license, though it was later reinstated. `
    }, {
        index: 7,
        position: '03',
        name: "Mayweather vs Oscar De La Hoya",
        shortname: "Mayweather vs De la Hoya",
        sales: "2,480,000",
        revenue: "136,000,000",
        network: "HBO",
        trivia: `billed as The World Awaits, was a light middleweight superfight that took place on May 5, 2007, at the MGM Grand Arena in Las Vegas, Nevada between six-division world champion Oscar De La Hoya (38–4, 30 KO) and undefeated four-division champion Floyd Mayweather Jr. (37–0, 24 KO). At the time, the bout was the most lucrative boxing match ever, with over $130 million in generated revenue.Mayweather Jr. won by split decision over De La Hoya in 12 rounds, capturing the World Boxing Council (WBC) light middleweight title. `
    },   
    {
        index: 8,
        position: '02',
        name: 'Mayweather vs Canelo Alvarez',
        shortname: "Mayweather vs Alvarez",
        sales: "2,200,000",
        revenue: "150,000,000",
        network: "Showtime",
        trivia: `Billed as "The One", was a boxing light middleweight championship superfight. The bout was held on September 14, 2013, in the MGM Grand Garden Arena, at the MGM Grand Hotel & Casino in Las Vegas, Nevada, United States, on Showtime PPV. Mayweather received $41.5 million for this fight before taking into account pay-per-view sales. The fight was won by Mayweather in a 12-round majority decision in front of a sold out crowd of 16,746. Judge C. J. Ross scored the fight 114–114, a draw. Judge Dave Moretti had it 116–112, and Craig Metcalfe scored it 117–111. Judge Ross retired after this fight.`
    }
    ,{
        index: 9,
        position: '01',
        name: "Mayweather vs Pacquiao",
        shortname: "Mayweather vs Pacquiao",
        sales: "4,600,000",
        revenue: "410,000,000",
        network: "HBO & Showtime",
        trivia: "Billed as the Fight of the Century, or the Battle for Greatness, was a professional boxing match between undefeated five-division world champion Floyd Mayweather Jr. and eight-division world champion Manny Pacquiao. It took place on May 2, 2015, at the MGM Grand Garden Arena in Las Vegas, Nevada. Mayweather Jr. won the contest by unanimous decision, with two judges scoring it 116–112 and the other 118–110. The fight was considered to be one of the most anticipated sporting events in history."

    }
]

module.exports = {data}