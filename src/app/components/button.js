import Link from "next/link";

export default function Button({children, btnFunc}){
    return(
        <Link href={btnFunc}><button className="standardButton" onClick={()=>btnFunc}>{children}</button></Link>
    )
}