'use client'

import Image from 'next/image'
import collage from '../../../public/webcollage2.png'
import appimage from '../../../public/app.png'
import logos from '../../../public/logos.png'
import Button from '../components/button'

export default function Creative() {



    return (
        <div className="creativePage">
            <div className='creativeSection'>
                <div className='creativeInnerSectionWithText'>
                    <h1>Websites</h1>
                    <p>Create custom & brilliant web experiences to properly represent your business digitally utilizing professional grade photography, videography, and copy. <br/><br/>Whether you are looking for a site refresh, or a total re-brand; we can help you take your business to the next level in the digital sphere.</p>
                    <Button btnFunc={'mailto:calebjoelsmith@gmail.com'}>GET STARTED</Button>
                </div>
                <div className='creativeInnerSectionWithPhoto'>
                    <Image src={collage} className='webCollage'/>
                </div>
            </div>
            <div className='creativeSection'>
            <div className='creativeInnerSectionWithPhoto'>
                    <Image src={appimage} className='webCollage appImage'/>
                </div>
                <div className='creativeInnerSectionWithText'>
                    <h1>Apps</h1>
                    <p>Take your business to the next level with a custom app, designed and coded with your unique needs in mind yet operable without code for simplicity. <br/><br/>Each of our apps is built upon React Native, a technology that is ambidextrous for both Android & Apple Apps, which means one code base. </p>
                    <Button btnFunc={'mailto:calebjoelsmith@gmail.com'}>GET STARTED</Button>
                </div>
            </div>
            <div className='creativeSection'>
                <div className='creativeInnerSectionWithText'>
                    <h1>Graphic & Logo Design</h1>
                    <p>Our custom graphic and logo design services bring your brand to life, capturing its essence with striking visuals. Elevate your brand's presence and recognition, as we meticulously tailor designs to convey your unique story. <br/><br/>From Vision to Visual, we transform concepts into impactful designs that resonate. <br/><br/>Beyond aesthetics, our logos symbolize your business's heart. Let us craft a visual identity that leaves an indelible mark, representing your brand across platforms and time.</p>
                    <Button btnFunc={'mailto:calebjoelsmith@gmail.com'}>GET STARTED</Button>
                </div>
                <div className='creativeInnerSectionWithPhoto'>
                    <Image src={logos} className='webCollage'/>
                </div>
            </div>
        </div>
    )
}