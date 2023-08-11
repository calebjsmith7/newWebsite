
export default function MusicThumb({children, cn, address}) {
    return (
        <div className={"musicThumbnail" + " " + cn} onClick={()=> window.open(address, '_blank')}>
            <p className="musicText">
                {children}
            </p>
        </div>
    )
}