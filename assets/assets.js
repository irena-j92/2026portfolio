import about_irena from './about-irena.jpg';
import Link from "next/link";
import { icons, Users, SlidersVertical, Pencil, Send } from 'lucide-react';
import { SiAdobe, SiClaude, SiFigma, SiGithub, SiJira, SiNextdotjs, SiNotion, SiTailwindcss, SiVercel, SiVsco } from "react-icons/si"

import lastfm_hero from "./lastfm/lastfm-hero.jpg"
import lastfm_brad from "./lastfm/lastfm-brad.jpg"
import lastfm_christa from "./lastfm/lastfm-christa.jpg"
import lastfm_logo from "./lastfm/lastfm-logo.png"
import statsfm_logo from "./lastfm/statsfm-logo.png"
import voltfm_logo from "./lastfm/voltfm-logo.png"
import stats_logo from "./lastfm/stats-logo.png"
import musicboard_logo from "./lastfm/musicboard-logo.png"
import lastfm_home from "./lastfm/lastfm-home.png"
import lastfm_menu from "./lastfm/lastfm-menu.png"
import lastfm_profile from "./lastfm/lastfm-profile.png"
import lastfm_search from "./lastfm/lastfm-search.png"
import lastfm_labs from "./lastfm/lastfm-labs.png"
import lastfm_personalities from "./lastfm/lastfm-personalities.png"
import lastfm_inbox from "./lastfm/lastfm-inbox.png"
import lastfm_followers from "./lastfm/lastfm-followers.png"
import lastfm_generator from "./lastfm/lastfm-generator.png"
import lastfm_obsessions from "./lastfm/lastfm-obsessions.png"
import lastfm_capsule from "./lastfm/lastfm-capsule.png"
import lastfm_capsule_stats from "./lastfm/lastfm-capsule-stats.png"
import lastfm_capsule_calendar from "./lastfm/lastfm-capsule-calendar.png"
import lastfm_user from "./lastfm/lastfm-user.png"
import lastfm_compatibility from "./lastfm/lastfm-compatibility.png"
import lastfm_person1 from "./lastfm/lastfm-person1.png"
import lastfm_person2 from "./lastfm/lastfm-person2.png"
import lastfm_person3 from "./lastfm/lastfm-person3.png"

import cakeclub_hero from "./cakeclub/cakeclub-hero.jpg"
import cakeclub_home from "./cakeclub/cakeclub-home.png"
import cakeclub_budget from "./cakeclub/cakeclub-budget.png"
import cakeclub_income from "./cakeclub/cakeclub-income.png"
import cakeclub_expenses from "./cakeclub/cakeclub-expenses.png"
import cakeclub_analytics from "./cakeclub/cakeclub-analytics.png"
import cakeclub_rewards from "./cakeclub/cakeclub-rewards.png"
import cakeclub_transfers from "./cakeclub/cakeclub-transfers.png"
import cakeclub_receipt from "./cakeclub/cakeclub-receipt.png"
import cakeclub_splash from "./cakeclub/cakeclub-splash.png"
import cakeclub_logo from "./cakeclub/cakeclub-logo.png"
import cakeclub_onboarding from "./cakeclub/cakeclub-onboarding.png"
import cakeclub_login from "./cakeclub/cakeclub-login.png"
import cakeclub_passcode from "./cakeclub/cakeclub-passcode.png"
import cakeclub_profile from "./cakeclub/cakeclub-profile.png"
import cakeclub_notification from "./cakeclub/cakeclub-notification.png"
import cakeclub_watch from "./cakeclub/cakeclub-watch.png"

import ypc_hero from "./ypc/ypc-hero.jpg"
import ypc_persona from "./ypc/ypc-persona.jpg"
import ypc_logo from "./ypc/ypc-logo.png"
import ypc_persona_small from "./ypc/ypc-persona-small.jpg"
import ypc_landing from "./ypc/ypc-landing.png"
import ypc_events from "./ypc/ypc-events.png"
import ypc_profile from "./ypc/ypc-profile.png"
import ypc_locations from "./ypc/ypc-locations.png"
import ypc_mobile from "./ypc/ypc-mobile.png"


import rbcfund_logo from "./rbcfund/rbcfund-logo.png"
import rbcfund_hero from "./rbcfund/rbcfund-hero.jpg"
import rbcfund_landing from "./rbcfund/rbcfund-landing.png"
import rbcfund_news from "./rbcfund/rbcfund-news.png"
import rbcfund_awards from "./rbcfund/rbcfund-awards.png"
import rbcfund_visit from "./rbcfund/rbcfund-visit.png"

export const assets = {
    about_irena,

   lastfm_hero,
   lastfm_brad,
   lastfm_christa,
   lastfm_logo,
   statsfm_logo,
    voltfm_logo,
    stats_logo,
    musicboard_logo,
    lastfm_home,
    lastfm_search,
    lastfm_labs,
    lastfm_menu,
    lastfm_personalities,
    lastfm_inbox,
    lastfm_followers,
    lastfm_profile,
    lastfm_user,
    lastfm_generator,
    lastfm_obsessions,
    lastfm_capsule,
    lastfm_capsule_calendar,
    lastfm_capsule_stats,
    lastfm_compatibility,
    lastfm_person1,
    lastfm_person2,
    lastfm_person3,

    cakeclub_home,
    cakeclub_budget,
    cakeclub_income,
    cakeclub_expenses,
    cakeclub_analytics,
    cakeclub_rewards,
    cakeclub_transfers,
    cakeclub_receipt,
    cakeclub_splash,
    cakeclub_hero,
    cakeclub_logo,
    cakeclub_onboarding,
    cakeclub_login,
    cakeclub_passcode,
    cakeclub_profile,
    cakeclub_notification,
    cakeclub_watch,

    ypc_hero,
    ypc_persona,
    ypc_logo,
    ypc_persona_small,
    ypc_landing,
    ypc_events,
    ypc_profile,
    ypc_locations,
    ypc_mobile,

    rbcfund_logo,
    rbcfund_hero,
    rbcfund_landing,
    rbcfund_news,
    rbcfund_awards,
    rbcfund_visit,
};

export const workData = [
    {
        id: 1,
        title: 'Young Professionals Communities',
        description: 'UX/UI Design',
        bgImage: '/work-1.jpg',
        link: "/ypcommunities"
    },

            {
        id: 2,
        title: 'CakeClub®',
        description: 'Product Design',
        bgImage: '/work-2.jpg',
        link: "/cakeclub"
    },
        {
        id: 3,
        title: 'Richard Bland College Foundation',
        description: 'Website Design',
        bgImage: '/work-3.jpg',
        link: "/rbcfund",
    },
        {
        id: 4,
        title: 'Last.fm Pro',
        description: 'UX/UI Design',
        bgImage: '/work-4.jpg',
        link: "/lastfm",
        },

    //     {
    //         id: 5,
    //         link: "",
    //     },

    //     {
    //     id: 6,
    //     title: '[WIP]',
    //     description: 'Product Design',
    //     bgImage: '/work-6.jpg',
    //     link: "/",
    // }
]

export const serviceData = [
    { icon: <Users />, title: '01. Visual & Brand Design', description: 'Crafting compelling visual identities across digital and print. From marketing materials to brand systems, I design assets that communicate clearly and leave a lasting impression.' },
    { icon: <SlidersVertical />, title: '02. UX/UI & Screen Design', description: 'Designing intuitive, user-centered digital experiences. With a foundation in UX research and UI systems, I create interfaces that are both functional and visually engaging.' },
    { icon: <Pencil />, title: '03. Illustration & Motion', description: 'Developing custom digital illustrations and visual elements that enhance storytelling. I also bring basic motion, video editing, and 3D knowledge to add depth and dynamism when needed.'},
    { icon: <Send />, title: '04. Front-End Foundations', description: 'Bridging design and development with a working knowledge of HTML, CSS, and front-end principles. I design with feasibility in mind and collaborate effectively with developers.'},
]


// export const infoList = [
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: '2010 - 2015', description: 'Master of Fine Arts' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: '2016 - 2023', description: 'Visual Designer' },
//     { icon: assets.certificate_icon, iconDark: assets.certificate_icon_dark, title: '2024 - present', description: 'Certified UX/UI Designer' },
// ];

export const toolsData = [
<SiFigma />, <SiAdobe />, <SiGithub />, <SiNextdotjs />, <SiTailwindcss />, <SiVercel />, <SiJira />, <SiNotion />, <SiClaude />,
];