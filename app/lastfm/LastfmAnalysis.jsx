import React from 'react'
import { SquareCheck, SquareMinus } from 'lucide-react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const LastfmAnalysis = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 py-10 sm:py-16 md:py-20 mt-6 md:mt-10 border border-gray-600 rounded-lg">
      {/* Desktop View - Hidden on mobile/tablet */}
      <div className="hidden lg:block">
        {/* Feature/App Logos */}
        <div className="grid grid-cols-5 text-left mx-8 xl:mx-20 mb-6 gap-4 xl:gap-20">
          <h2 className='text-xl font-semibold'>Feature/App</h2>
          <div className='flex items-center gap-2 xl:gap-4'>
            <Image src={assets.statsfm_logo} alt="Stats.fm Logo" className="w-8 h-8 xl:w-10 xl:h-10 rounded-lg" />
            <p className="text-sm xl:text-base">stats.fm</p>
          </div>
          <div className='flex items-center gap-2 xl:gap-4'>
            <Image src={assets.voltfm_logo} alt="Volt.fm Logo" className="w-8 h-8 xl:w-10 xl:h-10 rounded-lg" />
            <p className="text-sm xl:text-base">volt.fm</p>
          </div>
          <div className='flex items-center gap-2 xl:gap-4'>
            <Image src={assets.stats_logo} alt="Last.fm Stats Logo" className="w-8 h-8 xl:w-10 xl:h-10 rounded-lg" />
            <p className="text-sm xl:text-base">Last.fm Stats</p>
          </div>
          <div className='flex items-center gap-2 xl:gap-4'>
            <Image src={assets.musicboard_logo} alt="Musicboard Logo" className="w-8 h-8 xl:w-10 xl:h-10 rounded-lg" />
            <p className="text-sm xl:text-base">Musicboard</p>
          </div>
        </div>

        <hr className='mx-8 xl:mx-20 border-gray-600' />

        {/* Categories */}
        <div className="grid grid-cols-5 text-left mx-8 xl:mx-20 mb-10 gap-4 xl:gap-20 text-white">
          <div className='mt-8 mb-4 font-semibold'>
            <p className='mb-4'>Strengths</p>
            <p className='mb-4'>Weaknesses</p>
            <p className='mb-4'>Pricing</p>
            <p className='mb-4'>Free plan</p>
            <p className='mb-4'>Community</p>
          </div>

          <div className='mt-8 mb-4 text-gray-300 text-sm xl:text-base'>
            <p className='mb-4'>Exclusive for you</p>
            <p className='mb-4'>Too many ads</p>
            <p className='mb-5'>7€/month</p>
            <div className='mb-5'><SquareCheck className="w-5 h-5" /></div>
            <p className='mb-4'>Adding friends</p>
          </div>

          <div className='mt-8 mb-4 text-gray-300 text-sm xl:text-base'>
            <p className='mb-4'>Time machine</p>
            <p className='mb-4'>Spotify only</p>
            <p className='mb-5'>48€/lifetime</p>
            <div className='mb-5'><SquareCheck className="w-5 h-5" /></div>
            <p className='mb-4'>Spotify followers</p>
          </div>

          <div className='mt-8 mb-4 text-gray-300 text-sm xl:text-base'>
            <p className='mb-4'>Detailed statistics</p>
            <p className='mb-4'>User interface</p>
            <div className='mb-6'><SquareMinus className="w-5 h-5" /></div>
            <div className='mb-6'><SquareCheck className="w-5 h-5" /></div>
            <div className='mb-6'><SquareMinus className="w-5 h-5" /></div>
          </div>

          <div className='mt-8 mb-4 text-gray-300 text-sm xl:text-base'>
            <p className='mb-4'>Personalization</p>
            <p className='mb-4'>Bugs, slow</p>
            <p className='mb-5'>5.49€/month</p>
            <div className='mb-5'><SquareCheck className="w-5 h-5" /></div>
            <p className='mb-4'>Followers, Messaging</p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View - Card-based layout */}
      <div className="lg:hidden space-y-6 px-4">
        <h2 className='text-xl font-semibold text-center mb-6'>App Comparison</h2>
        
        {/* Stats.fm */}
        <div className="border border-gray-600 rounded-lg p-4">
          <div className='flex items-center gap-3 mb-4 pb-4 border-b border-gray-600'>
            <Image src={assets.statsfm_logo} alt="Stats.fm Logo" className="w-10 h-10 rounded-lg" />
            <h3 className="font-semibold text-lg">stats.fm</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div><span className="font-semibold">Strengths:</span> <span className="text-gray-300">Exclusive for you</span></div>
            <div><span className="font-semibold">Weaknesses:</span> <span className="text-gray-300">Too many ads</span></div>
            <div><span className="font-semibold">Pricing:</span> <span className="text-gray-300">7€/month</span></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Free plan:</span> <SquareCheck className="w-5 h-5 text-gray-300" /></div>
            <div><span className="font-semibold">Community:</span> <span className="text-gray-300">Adding friends</span></div>
          </div>
        </div>

        {/* Volt.fm */}
        <div className="border border-gray-600 rounded-lg p-4">
          <div className='flex items-center gap-3 mb-4 pb-4 border-b border-gray-600'>
            <Image src={assets.voltfm_logo} alt="Volt.fm Logo" className="w-10 h-10 rounded-lg" />
            <h3 className="font-semibold text-lg">volt.fm</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div><span className="font-semibold">Strengths:</span> <span className="text-gray-300">Time machine</span></div>
            <div><span className="font-semibold">Weaknesses:</span> <span className="text-gray-300">Spotify only</span></div>
            <div><span className="font-semibold">Pricing:</span> <span className="text-gray-300">48€/lifetime</span></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Free plan:</span> <SquareCheck className="w-5 h-5 text-gray-300" /></div>
            <div><span className="font-semibold">Community:</span> <span className="text-gray-300">Spotify followers</span></div>
          </div>
        </div>

        {/* Last.fm Stats */}
        <div className="border border-gray-600 rounded-lg p-4">
          <div className='flex items-center gap-3 mb-4 pb-4 border-b border-gray-600'>
            <Image src={assets.stats_logo} alt="Last.fm Stats Logo" className="w-10 h-10 rounded-lg" />
            <h3 className="font-semibold text-lg">Last.fm Stats</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div><span className="font-semibold">Strengths:</span> <span className="text-gray-300">Detailed statistics</span></div>
            <div><span className="font-semibold">Weaknesses:</span> <span className="text-gray-300">User interface</span></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Pricing:</span> <SquareMinus className="w-5 h-5 text-gray-300" /></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Free plan:</span> <SquareCheck className="w-5 h-5 text-gray-300" /></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Community:</span> <SquareMinus className="w-5 h-5 text-gray-300" /></div>
          </div>
        </div>

        {/* Musicboard */}
        <div className="border border-gray-600 rounded-lg p-4">
          <div className='flex items-center gap-3 mb-4 pb-4 border-b border-gray-600'>
            <Image src={assets.musicboard_logo} alt="Musicboard Logo" className="w-10 h-10 rounded-lg" />
            <h3 className="font-semibold text-lg">Musicboard</h3>
          </div>
          <div className="space-y-3 text-sm">
            <div><span className="font-semibold">Strengths:</span> <span className="text-gray-300">Personalization</span></div>
            <div><span className="font-semibold">Weaknesses:</span> <span className="text-gray-300">Bugs, slow</span></div>
            <div><span className="font-semibold">Pricing:</span> <span className="text-gray-300">5.49€/month</span></div>
            <div className="flex items-center gap-2"><span className="font-semibold">Free plan:</span> <SquareCheck className="w-5 h-5 text-gray-300" /></div>
            <div><span className="font-semibold">Community:</span> <span className="text-gray-300">Followers, Messaging</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastfmAnalysis
