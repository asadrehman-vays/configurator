export default function FooterPrice() {
    return(
        <div className="price-wrapper flex items-start">
            <h2>
                Gesamtpreis
                <small>inkl. MwSt</small>
            </h2>
            <span>
                <small className="discount">1.299€</small>999€ <small className="mobile">inkl. MwSt </small>
            </span>
        </div>
    )
}