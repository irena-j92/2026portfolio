"use client";
import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

const YPCJourney = () => {
  const stages = [
    "Awareness & Interest",
    "Exploration & Evaluation",
    "Commitment & Onboarding",
    "Event Participation",
    "Post-Event Reflection"
  ];

  const userActions = [
    "Hears about YPCommunities\nVisits the website out of curiosity",
    "Browses community values and mission\nLooks for local chapters\nReviews events, topics, and outcomes",
    "Creates an account\nExplores membership options\nRegisters for an event",
    "Attends an in-person or virtual event\nInteracts with other members",
    "Reflects on experience\nDecides whether to stay involved\nShares feedback or invites others"
  ];

  const userGoals = [
    "See if this community is \"for someone like me\"\nFind hope or reassurance about her situation",
    "Decide if YPC can realistically help her\nUnderstand what participation looks like\nReduce anxiety about joining alone",
    "Join with minimal friction\nFeel confident she made the right choice",
    "Meet like-minded people\nMake at least one meaningful connection\nLearn something useful",
    "Decide if YPC is worth continued effort\nBuild consistency and belonging"
  ];

  const pains = [
    "Doubts about fitting in\nFear of being judged or excluded\nUncertainty about legitimacy",
    "Information overload\nVague descriptions of benefits\nUnclear time or cost commitment",
    "Long forms or confusing sign-up\nUnclear next steps after registration",
    "Feeling awkward or out of place\nEvents that feel cliquey or disorganized",
    "No follow-up\nLosing momentum or connection"
  ];

  const joys = [
    "Seeing people like her represented\nWarm, inclusive tone",
    "Clear event descriptions and expectations\nBroad range of topics and formats\nTransparency about what she'll gain",
    "Easy sign-up (Google/Facebook)\nClear confirmation and guidance\nFeeling welcomed, not just \"processed\"",
    "Friendly facilitation\nStructured networking moments\nFeeling included and heard",
    "Follow-up emails or messages\nEvent recaps or next-step suggestions\nOpportunities to give back or lead"
  ];

  const feelings = ["😕", "🤔", "😬", "🙂", "😊"];

  return (
    <div className="w-full rounded-xl text-sm flex flex-col items-center">
      {/* Profile - Responsive */}
      <div className="w-full px-4 md:px-10 mb-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            <Image
              src={assets.ypc_persona_small}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full flex-shrink-0"
              alt="Maya profile"
            />
            <div className="leading-snug">
              <h2 className="text-base md:text-md font-medium">Maya, 23</h2>
              <p className="text-sm text-[#c4c4c4]">History B.A.</p>
            </div>
          </div>

          {/* Scenario */}
          <div className="bg-[#333333] rounded-lg px-4 md:px-6 py-4 text-sm leading-normal flex-1">
            <h2 className="text-base md:text-lg font-medium mb-2">Scenario</h2>
            <p className="text-[#c4c4c4]">
              Maya is 23 and has just moved to Atlanta after graduating with a
              degree in History. She doesn’t yet have a full-time job and knows
              very few people in the city. Most of her days are spent applying
              for entry-level roles online, but the process feels isolating and
              discouraging. She wants to meet people, learn what opportunities
              exist locally, and feel less alone while figuring out her next
              steps.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View (lg and above) */}
      <div className="hidden lg:block w-full px-10">
        {/* Stages */}
        <div className="flex flex-row gap-4 text-center mb-4">
          <div className="bg-[#333333] w-50 py-4 px-10 rounded-lg flex-shrink-0">
            Stages
          </div>
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-white w-50 py-4 px-10 text-black rounded-lg flex-1"
            >
              {stage}
            </div>
          ))}
        </div>

        {/* User action */}
        <div className="flex flex-row gap-4 text-center mb-4">
          <div className="bg-[#333333] w-50 rounded-lg flex items-center justify-center">
            User action
          </div>
          {userActions.map((action, index) => (
            <div
              key={index}
              className="border border-gray-600 w-50 text-[#c4c4c4] py-4 px-4 rounded-lg flex-1 whitespace-pre-line"
            >
              {action}
            </div>
          ))}
        </div>

        {/* User goals */}
        <div className="flex flex-row gap-4 text-center mb-4">
          <div className="bg-[#333333] w-50 rounded-lg flex items-center justify-center">
            User goals
          </div>
          {userGoals.map((goal, index) => (
            <div
              key={index}
              className="border border-gray-600 w-50 text-center text-[#c4c4c4] py-4 px-10 rounded-lg flex-1 whitespace-pre-line"
            >
              {goal}
            </div>
          ))}
        </div>

        {/* Pains */}
        <div className="flex flex-row gap-4 text-center mb-4">
          <div className="bg-[#333333] w-50 rounded-lg flex items-center justify-center">
            Pains
          </div>
          {pains.map((pain, index) => (
            <div
              key={index}
              className="border border-gray-600 w-50 text-center text-[#c4c4c4] py-4 px-10 rounded-lg flex-1 whitespace-pre-line"
            >
              {pain}
            </div>
          ))}
        </div>

        {/* Joys */}
        <div className="flex flex-row gap-4 text-center mb-4">
          <div className="bg-[#333333] w-50 rounded-lg flex items-center justify-center">
            Joys
          </div>
          {joys.map((joy, index) => (
            <div
              key={index}
              className="border border-gray-600 w-50 text-center text-[#c4c4c4] py-4 px-10 rounded-lg flex-1 whitespace-pre-line"
            >
              {joy}
            </div>
          ))}
        </div>

        {/* Feeling */}
        <div className="flex flex-row gap-4 text-center">
          <div className="bg-[#333333] w-50 rounded-lg flex items-center justify-center">
            Feeling
          </div>
          {feelings.map((feeling, index) => (
            <div
              key={index}
              className="border border-gray-600 w-50 text-2xl text-center text-[#c4c4c4] py-4 px-10 rounded-lg flex-1"
            >
              {feeling}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet View (below lg) */}
      <div className="lg:hidden w-full px-4">
        {stages.map((stage, index) => (
          <div key={index} className="mb-6 last:mb-0">
            {/* Stage Header */}
            <div className="bg-white text-black rounded-lg py-3 px-4 mb-3 font-medium text-center">
              {stage}
            </div>

            {/* Stage Details */}
            <div className="space-y-3">
              {/* User Action */}
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="text-xs font-medium text-[#c4c4c4] mb-2">
                  USER ACTION
                </div>
                <p className="text-[#c4c4c4] text-sm whitespace-pre-line">
                  {userActions[index]}
                </p>
              </div>

              {/* User Goals */}
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="text-xs font-medium text-[#c4c4c4] mb-2">
                  USER GOALS
                </div>
                <p className="text-[#c4c4c4] text-sm whitespace-pre-line">
                  {userGoals[index]}
                </p>
              </div>

              {/* Pains */}
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="text-xs font-medium text-[#c4c4c4] mb-2">
                  PAINS
                </div>
                <p className="text-[#c4c4c4] text-sm whitespace-pre-line">
                  {pains[index]}
                </p>
              </div>

              {/* Joys */}
              <div className="border border-gray-600 rounded-lg p-4">
                <div className="text-xs font-medium text-[#c4c4c4] mb-2">
                  JOYS
                </div>
                <p className="text-[#c4c4c4] text-sm whitespace-pre-line">
                  {joys[index]}
                </p>
              </div>

              {/* Feeling */}
              <div className="border border-gray-600 rounded-lg p-4 text-center">
                <div className="text-xs font-medium text-[#c4c4c4] mb-2">
                  FEELING
                </div>
                <div className="text-3xl">{feelings[index]}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YPCJourney;