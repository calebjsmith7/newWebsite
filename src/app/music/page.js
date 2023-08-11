'use client'

import Link from "next/link"
import Image from 'next/image'
import guyHat from '../../../public/guyhat.jpg'
import arrow from '../../../public/bluearrow.png'
import $ from 'jquery'
import MusicThumb from "../components/musicThumb"

export default function Music() {



    return (
        <div className="musicPage">
            <div className="music" id="music">
                <MusicThumb cn={'music1'} address={'https://www.youtube.com/channel/UCLTjyl5y_N6KmnlR_ScydEQ'}>
                    From intimate Worship Moments to Worship Covers, check out Caleb's youtube channel.
                </MusicThumb>
                <MusicThumb cn={'music2'}>
                    Only You, Full Band Version, originally written for the full length album, So Amazed; recorded and produced by Levi Smith, 2023.
                </MusicThumb>
                <MusicThumb cn={'music3'} address={'https://open.spotify.com/album/2UerPnXG6UiRCCGB9AXAzy'}>
                    So Amazed is Caleb's first full length album, released in 2022. It is an intimate piano driven album centered around devotion to Jesus.
                </MusicThumb>
                <MusicThumb cn={'music4'} address={'https://open.spotify.com/album/4JwEjtF9v7HzbwhhpiJdZT'}>
                    Prophetic Piano is a full length instrumental piano album released in 2020.
                </MusicThumb>
            </div>
            <Image src={arrow} className="blueArrow" />
        </div>
    )
}