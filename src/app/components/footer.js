import Link from "next/link"
import { FaYoutube, FaSpotify, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerIcons">
                    <a href="https://www.youtube.com/channel/UCLTjyl5y_N6KmnlR_ScydEQ"><FaYoutube size={32}/></a>
                    <a href="https://open.spotify.com/artist/2Yc99f6tHTGTsvB1IJYN6g"><FaSpotify size={32} /></a>
                    <a href="https://github.com/calebjsmith7"><FaGithub size={32}/></a>
                    <a href="mailto:calebjoelsmith@gmail.com"><MdEmail size={32}/></a>
            </div>
        </div>
    )
}