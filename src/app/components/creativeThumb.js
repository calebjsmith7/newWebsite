export default function CreativeThumb({children, cn, address}) {
    return (
        <div className={"creativeThumbnail" + " " + cn} onClick={()=> window.open(address, '_blank')}>
            <p className="creativeText">
                {children}
            </p>
        </div>
    )
}