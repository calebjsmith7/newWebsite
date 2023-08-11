'use client'
import Link from "next/link";
import Button from "../components/button";
import MusicThumb from "../components/musicThumb";
import Image from "next/image";
import ads from '../../../public/ads.png'
import social from '../../../public/sm.png'
import google from '../../../public/goog.png'
export default function Marketing() {
    return (
        <>
        <div style={{textAlign:'center', width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
            <h1>Digital Marketing</h1>
            <p>Our suite of digital marketing services is designed with you in mind – whether you're a seasoned entrepreneur looking to amplify your online presence or an aspiring start-up ready to make your mark. <br/><br/>From captivating web designs that mirror your brand's essence to harnessing the power of search engine optimization and Google rankings, we're here to navigate the complex digital landscape for you. Our approach is rooted in organic social media strategies, enabling you to authentically engage with your audience, and targeted ad campaigns that ensure your message reaches the right people at the right time. Let's join forces to transform your digital dreams into reality. </p>
            <Button btnFunc={'mailto:calebjoelsmith@gmail.com'}>GET STARTED</Button>
        </div>
        <div className="digitalSection" style={{display: 'flex', justifyContent: 'space-between', marginLeft: '15%', marginRight: '15%', marginTop: '5%', marginBottom: '5%', alignContent: 'center'}}>
            <Image src={social} width={300}/>
            <Image src={google} width={300} style={{alignSelf: 'center'}} className="rotatingGoogle"/>
            <Image src={ads} width={300}/>
        </div>
        </>
    )
}